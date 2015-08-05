var cur = 0;

var pages = ["#intro", "#article", "#question", "#tagpage", "#review"];
var tag_l = ["problem", "solution", "result"];

var readability_url = "https://www.readability.com/api/content/v1/parser?token=43e6e0e0b590f00a095a6a0e64f6c9da11783a5a&callback=?&url=";
// var gform_url = "https://docs.google.com/forms/d/1A5M4T8TGWyfUPsdrcRjvVYbAJLhPA-VR-02830EqLE0/formResponse";
var gform_url = "/5/save.php";
var field_ids = ["entry.66704122", // name
                 "entry.1918432746", // q1
                 "entry.477095358", // q2
                 "entry.1554396570", // q3
                 "entry.1631672294", // q4
                 "entry.1970954995", // q5
                 "entry.354358979", //url
                 "entry.775723807", // content
                 "entry.903406015", // anno
                 "entry.1494902380" //headline
                ];
var news_read_arr = [];
var available_news = [];


var bg_color = [];
var ANNOTATION_DATA = [];
var ANSWER = {};
var USER = {};
var qnum = 5;

var cur_art_url;
var headline;
var title;
var names = [];

function escapeRegExp(string) {
    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function replaceAll(string, find, replace) {
  return string.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function show(obj) {
    if(obj.hasClass("hidden-field")) {
        obj.removeClass("hidden-field");
    }
}

function hide(obj) {
    if(!obj.hasClass("hidden-field")) {
        obj.addClass("hidden-field");
    }
}

function loadState(s) {
    if(s == -1) {
        s = 0;
    }
    if(cur == 2) {
        if(cur_art_url) {
            if(cur_art_url != $("#url-box").val()) { // anlyzing a new article
                ANSWER = {};
                ANNOTATION_DATA = [];
            }
        }
        cur_art_url = $("#url-box").val();
    }
    window.location.hash = pages[s];
    // hide all divs
    for(var i =  0; i < pages.length; i ++) {
        hide($(pages[i]));
    }
    // show the one on state 
    show($(pages[s]));
    scroll(0,0);
}

function renderArticle(headline, content) {
    $(".at-hl").empty().each(function() {
       $(this).html("<h2>" + headline +"</h2><hr></hr>"); 
    });
    $(".at-ct").empty().each(function() {
        $(this).html(content.toString());
    });
}

function next() {
    cur = cur + 1;
    loadState(cur);    
} 

function getUrlParam(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if(results == null) {
        return "";
    } else {
        return results[1];
    }
}

var referer;
var current_index;
var content_backup;

var url;

$(document).ready(function() {
    if (!Array.prototype.indexOf)
    {
        Array.prototype.indexOf = function(elt /*, from*/)
        {
            var len = this.length >>> 0;

            var from = Number(arguments[1]) || 0;
            from = (from < 0)
                ? Math.ceil(from)
                : Math.floor(from);
            if (from < 0)
                from += len;

            for (; from < len; from++)
            {
                if (from in this &&
                    this[from] === elt)
                    return from;
            }
            return -1;
        };
    }
    $("#url-box").keydown(function(event){
        if(event.keyCode == 13) {
            event.preventDefault();
            $("#goto-article").trigger("click");
            return false;
        }
    });
    $(".ss-choices").each(function() {
        names.push($(this).find("input").attr("name"));
    });
    $("#highlightbar input").each(function() {
        bg_color.push($(this).data("color"));
    });
    referer = getUrlParam("referer");
    var hash;
    if(referer) {
        $("#url-box").val(referer);
        $("#url-box").attr("disabled", "disabled");
        hash = window.location.hash.substring(0, window.location.hash.indexOf("?"));
    } else {
        hash = window.location.hash;
    }
    cur = pages.indexOf(hash);
    if(cur == -1) {
        cur = 0;
    }
    loadState(cur);
    $("#goto-article").click(function() {
        var ubox = $("#url-box").val().trim();
        url = readability_url + ubox;
        $.getJSON(url, function(json) {
            headline = json.title;
            content = json.content;
            var contHtml = $.parseHTML(content);
            $(contHtml).find(".insetbox").each(function() {
                $(this).remove();
            });
            $(contHtml).find(".article-profile").each(function() {
                $(this).remove();
            });
            $(contHtml).find(".article-methode").each(function() {
                $(this).remove();
            });
            $(contHtml).find(".note").each(function() {
                $(this).remove();
            });
            $(contHtml).find(".factoid-body").each(function() {
                $(this).remove();
            });
            $(contHtml).find("figcaption").each(function() {
                $(this).remove();
            });
            $(contHtml).find("blockquote").each(function() {
                $(this).remove();
            });
            $(contHtml).find(".article-component").each(function() {
                $(this).remove();
            });
            $(contHtml).find(".right-image").each(function() {
                $(this).remove();
            });
            $(contHtml).find(".right-graphic").each(function() {
                $(this).remove();
            });
            $(contHtml).find(".right-pullquote").each(function() {
                $(this).remove();
            });
            $(contHtml).find(".image-pair").each(function() {
                $(this).remove();
            });
            $(contHtml).find(".info-box").each(function() {
                $(this).remove();
            });
            content = $(contHtml).html();
            // remove links
            content = content.replace(/<a.*?>/g, "");
            content = content.replace(/<\/a>/g, "");
            // remove syntax marks
            content = content.replace(/<em>/g, "");
            content = content.replace(/<\/em>/g, "");
            // remove headlines
            content = content.replace(/<h2.*?>/g, "###P");
            content = content.replace(/<\/h2>/g, "###Q");
            content = content.replace(/<b>/g, "###L");
            content = content.replace(/<\/b>/g, "###M");
            content = content.replace(/\<strong\>Related\:\&nbsp\;.*/g, "");
            content = content.replace(/<[^<>]+>/g, "####")
                .replace(/((\#\#\#\#)(\s+)?)+/g, "<br><br>");
            
            content = content.replace(/\#\#\#L/g, "<b>");
            content = content.replace(/\#\#\#M/g, "</b>");
            content = content.replace(/\#\#\#P/g, "<b>");
            content = content.replace(/\#\#\#Q/g, "</b>");
            // hack: remove "Education Lab"
            content = content.replace("<br><br>&#xA0;", "");
            content = content.replace("<br><br>Education Lab is a Seattle Times project that spotlights promising approaches to some of the most persistent challenges in public education. It is produced in partnership with the Solutions Journalism Network, a New York-based nonprofit that works to spread the practice of solutions-oriented journalism. Education Lab is funded by a grant from the Bill &amp; Melinda Gates Foundation.", "");
            content = content.replace(/Click\supper\sright\sto\senlarge\<br\>\<br\>/g, "");
            content = content.replace("Join Education Lab, 88.5 KPLU and the University of Washington College of Education this Wednesday for an inspiring evening of stories about what it takes to become a great teacher. The event is free, but you must register in advance.<br><br>", "");
            content = content.replace("What does it take for advanced learning to take root at a high-poverty school?", "");
            content = content.replace("Join IB coordinator Colin Pierce and students Tavares Tagaleo&#x2019;o and Christian Capers for a live chat about the school&#x2019;s IB program and ongoing academic progress. Check here for details.<br><br>", "");
            content = content.replace("Pictured above: The International Baccalaureate program at Rainier Beach High School is run by IB coordinator Colin Pierce, who is focused on bringing high-end programs to low-income students. (Mike Siegel / The Seattle Times)", "");
            // hack: remove "related works"
            renderArticle(headline, content);
            next();
        });
    });

    $(".questionMark").click(function() {
        var name = $(this).attr("myname");
        var hint = "";
        if(name == "tmm1") {
            hint = " A solution should be explained in the context of the problem it’s trying to address. The causes of that problem should be reported on in ways that make clear the opportunity for a solution to create impact. If the article is short, however, the reporter may only have room to make a brief reference to the causes.";
        } else if(name == "tmm2") {
            hint = "The acid test; if the story doesn’t describe a solution, it’s not solutions journalism.";
        } else if (name == "tmm3") {
            hint = "A great solutions story delves into the how-to’s of problem solving, investigating questions like: What models are having success improving an educational outcome and how do they actually work?";
        } else if (name == "tmm4") {
            hint = "Solutions journalism is about ideas – but like all good journalism, the determination of what works (or doesn’t) and how is supported by solid data and evidence. If there is no solid data or evidence, does the journalist draw on first-hand observation or early anecdotal results to make a credible case for the effectiveness of this response?";
        } else if (name == "tmm5") {
            hint = "(core SJ) What makes solutions journalism compelling is the discovery — the journey that brings the reader or viewer to an insight about how the world works and, perhaps, how it could be made to work better.";
        }
        $("#hintcontent").text(hint);
        var top = $(this).position().top;
        var left = $(this).position().left;
        $("#hintblock").css({'position': 'absolute', 'top':top + 40,'left':left + 100}).fadeIn('slow');
    });

    $("#hintclose").click(function() {
        $("#hintblock").fadeOut("fast");
    });

    $("#goto-question").click(function() {
        next();
    });

    $("#ques-reset").click(function() {
        if(confirm('Are you sure you want to reset your response?')) {
            ANSWER = {};
            loadQues();
        }        
    });
    $("#goto-tagging").click(function() {
        var f = saveQues();
        if(f) {
            var g = saveUser();
            if(g) {
                next();    
            }
        }        
    });

    window.onpopstate = function(event) {
        var hash = window.location.hash;
        cur = pages.indexOf(hash);
        loadState(cur);
        if(cur == 2) {
            loadQues();
        }
    }
    window.onpushstate = function(event) {
        var hash = window.location.hash;
        cur = pages.indexOf(hash);
        loadState(cur);
        if(cur == 2) {
            loadQues();
        }
    }

    /* tag page */
    $("#tag-content-container").mousedown(f).mouseup(g);
    $("#container").click(function() {
        f();
    });
    $("#highlightbar").mousedown(function(e) {
        e.preventDefault();
    });
    $(".tagbut").click(function() {
        var tag = $(this).val();
        var color = $(this).data("color");
        u(tag, color);
        $(this).prop("checked", false);
        // clear selection
        if (window.getSelection) {
            if (window.getSelection().empty) {  // Chrome
                window.getSelection().empty();
            } else if (window.getSelection().removeAllRanges) {  // Firefox
                window.getSelection().removeAllRanges();
            }
        } else if (document.selection) {  // IE?
            document.selection.empty();
        }
    });
    $("#goto-review").click(function(e) {
        if(savetag()) {
            cur = cur + 1;
            window.location.hash = pages[cur];
            loadState(cur);    
        } else {
            var dialog = $('<p>Currenly you don\'t tag any text. Would you like to tag some text?</p>')
            .dialog({
                modal: true,
                create: function(event, ui) {
                  $("body").css({ overflow: 'hidden' })
                 },
                 beforeClose: function(event, ui) {
                  $("body").css({ overflow: 'inherit' })
                 },
                dialogClass: 'notagdialog',
                buttons: {
                    "I don't having anything to tag": function() {
                        $(this).dialog("close");
                        cur = cur + 1;
                        window.location.hash = pages[cur];
                        loadState(cur);
                    },
                    "I want to add some tag": function() {
                        $(this).dialog("close");
                    }
                }
            });
        }
    });
    $("#tag-reset").click(function() {
        if(confirm('Are you sure you want to reset your response?')) {
            ANNOTATION_DATA = [];
            var node = document.getElementById('tag-content-container');
            var range = document.createRange();
            var sel = window.getSelection();
            range.selectNodeContents(node);
            document.designMode = "on";
            if(range) {
                sel.removeAllRanges();
                sel.addRange(range);
            }
            if(!document.execCommand("HiliteColor", false, "transparent")) {
                document.execCommand("BackColor", false, "transparent");
            }
            document.designMode = "off";
            if(window.getSelection()) {
                var sel = window.getSelection();
                sel.removeAllRanges();
                document.selection.empty();
            }            
        }        
    });

    /* Review page */
    $("#rv-bt").click(function() {
        $("#rv-at").html($("#tagged-article").html());
        $("#rv-ques").html($("#gform-container").html());
        $(".questionMark").hide();
        loadQuesAndSetReadOnly();
    });
    $("#finish").click(function() {
        $(this).attr("disabled","disabled");
        submitCoding(function() {
            ANSWER = {};
            ANNOTATION_DATA = [];
            $("#finish").attr("disabled", false);
            $("#rv-at").html("");
            $("#rv-ques").html("");
            $('#url-box').val("");
            cur = 0;
            loadState(0);    
        });
    });

});

function loadQuesAndSetReadOnly() {
    $("#rv-ques #entry_98167410").val(USER["entry.66704122"]);
    $("#rv-ques .ss-form-question .ss-q-short").attr("readonly", true);
    $("#rv-ques .ss-form-question .ss-choices input").each(function() {
        var name = $(this).attr("name");
        $(this).attr("disabled", "disabled");
        if($(this).val() === ANSWER[name]) {
            $(this).prop("checked", true);
        }
    });
}

function submitCoding(cont) {
    var data = "";
    var url = encodeURIComponent($("#url-box").val());
    var cc = $(".at-ct-plain").text();
    cc = cc.replace(/(\r\n|\n|\r)/gm,"");
    cc = encodeURIComponent(cc);
    
    var ad = encodeURIComponent(JSON.stringify(ANNOTATION_DATA));
    var hl = encodeURIComponent(headline);
    var j = 0;
    for(var i = 0; i < field_ids.length; i ++) {
        data = data + field_ids[i] + "=";
        if (i == field_ids.length - 4) { // 11: article_url
            data = data + url;
        } else if (i == field_ids.length - 3) {  // 12: aritcle_content
            data = data + cc;
        } else if (i == field_ids.length - 2) { // 13: article_annotation
            data = data + ad;
        } else if (i == field_ids.length - 1) { // 14: article_headline
            data = data + hl;
        } else if (i == 0) {
            // 0: user name
            if(USER[field_ids[i]]) {
                data = data + USER[field_ids[i]];
            }
        } else {
            data = data + ANSWER[names[j]];
            j = j + 1;
        }
        if(i != field_ids.length - 1) {
            data = data + "&";
        }
    }
    $.ajax({
        type: "POST",
        url: gform_url,
        data: data,
        complete: cont
    }).done(function(data) {
        // alert(data);
    });
}

function loadQues() {
    $("#gform-container .ss-form-question .ss-choices input").each(function() {
        var name = $(this).attr("name");
        if($(this).val() === ANSWER[name]) {
            $(this).prop("checked", true);
        } else {
            $(this).prop("checked", false);
        }
    });
}

function saveQues() {
    var unanswered = 5;
    $("#gform-container .ss-choices").each(function() {
        var rName = $(this).find("input").attr("name");
        var checked = $(this).find("input[name='" + rName + "']:checked").val();
        if(!checked) {
            $(this).parent().find(".ss-missing-item").css("display", "inline");
        } else {
            $(this).parent().find(".ss-missing-item").css("display", "none");
            unanswered --;
        }
    });
    if(unanswered != 0) {
        if(unanswered == 1) {
            alert ("You missed 1 question.");
        } else {
            alert ("You missed " + (unanswered) + " questions.");
        }
        return false;
    } else {
        // only save data when all are finished
        $("#gform-container .ss-choices").each(function() {
            var rName = $(this).find("input").attr("name");
            var checked = $(this).find("input[name='" + rName + "']:checked").val();
            ANSWER[rName] = checked;
        });
        return true;
    }
    
}

function loadUser() {
    $("#entry_98167410").val(USER["entry.66704122"]);
    return true;
}

function saveUser() {
    var name = $("#entry_98167410").val();
    USER["entry.66704122"] = name;
    return true;
}

function savetag() {
    var have = false;
    // span: chrome, firefox; font: IE 11
    $("#tag-content-container").find('span, font').each(function() {
        var color = $(this).css("background-color")
        if(color && color !== "transparent") {
            var hex = rgb2hex(color).toUpperCase();
            var index = bg_color.indexOf(hex);
            var text = $(this).text();
            if(text != "") {
                have = true;
                if(index <= 2 && index >= 0) {
                    ANNOTATION_DATA.push({
                        "tag": tag_l[index],
                        "text": text.replace(/(\r\n|\n|\r)/gm,"").replace(/\"/g, "\\\"")
                      .replace(/\[/g, "\\[")
                      .replace(/\]/g, "\\]")
                      .replace(/\{/g, "\\{")
                      .replace(/\}/g, "\\}")
                      .replace(/\:/g, "\\:")
                    });
                }
            }
        }
    });
    if(!have) {
        return false;
    } else {
        return true;
    }
}

// set background color
function u(tag, color) {
    var i = window.getSelection();
    if(i && 0 != i.rangeCount) {
        var s = i.getRangeAt(0);
        if(!s.collapsed) {
            (c(tag, color)), f();
        }
    }
}

function highlight(color) {
    var sel = window.getSelection();
    var range;
    sel.rangeCount && sel.getRangeAt && (range = sel.getRangeAt(0));
    document.designMode = "on";
    if(range) {
        sel.removeAllRanges();
        sel.addRange(range);
    }
    if(!document.execCommand("HiliteColor", false, color)) {
        document.execCommand("BackColor", false, color);
    }
    document.designMode = "off";
}

// render color
function c(tag, color) {
    $("#tag-content-container").attr("contentEditable", 1);
    if(window.getSelection) {
        try{
            if(!document.execCommand("BackColor", false, color)) {
                highlight(color);
            }
        }catch(ex) {
            highlight(color);
        }
    } else  if (document.selection && document.selection.createRange) {
        // IE <= 8 case
        var range = document.selection.createRange();
        range.execCommand("BackColor", false, color);
    }
}

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

// fadeOut highlighter
function f() {
    $("#highlightbar").stop(!0, !0).fadeOut(300)
}

// fade in highlighter
function g(e) {
    setTimeout(function() {
        if(window.getSelection) {
            var i = window.getSelection();
            if(i && 0 != i.rangeCount) {
                var s = i.getRangeAt(0);
                if(!s.collapsed) {
                    var l = $('#highlightbar').stop(!0, !0).fadeTo(100, 1);
                    var n = $('#tagged-article').offset();
                    l.css({
                        left: e.pageX + 10, 
                        top: e.pageY + 10
                    });
                }
            }
        }
    }, 50);
}
