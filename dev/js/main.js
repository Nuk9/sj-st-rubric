var cur = 0;

var pages = ["#intro", "#article", "#question", "#tagpage", "#review"];
var tag_l = ["problem", "solution", "result"];

var readability_url = "https://www.readability.com/api/content/v1/parser?token=43e6e0e0b590f00a095a6a0e64f6c9da11783a5a&callback=?&url=";
// var gform_url = "https://docs.google.com/forms/d/1A5M4T8TGWyfUPsdrcRjvVYbAJLhPA-VR-02830EqLE0/formResponse";
var gform_url = "/dev/save.php";
// name , ques 1 ,..., ques 10, article_url, article_content, article_annotation, article_headline
// var field_ids = ["entry.215751540","entry.623526571","entry.1476092598","entry.309895902","entry.571080810","entry.1188901335","entry.1897769701","entry.404944299","entry.1910145078","entry.926592991","entry.562869012","entry.1780171989","entry.1227660023","entry.528936757","entry.1002450135"];
var field_ids = ["entry.66704122", // name
                 "entry.2135852305", // email
                 "entry.1739474268", // status // j start
                 "entry.1739474268.other_option_response", // status other option
                 "entry.1398427809", // interest
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

var news_links = ["http://www.seattletimes.com/2015/03/stunning-surge-in-graduation-rate-as-rainier-beach-gamble-pays-off/",  // done
"http://www.seattletimes.com/education-lab/schools-using-new-tools-to-make-teachers-better/", // done
"http://seattletimes.com/html/education/2025538481_edlabrestorativejusticexml.html", // done
"http://seattletimes.com/html/education/2025176296_edlabkentdisciplinexml.html", // done
"http://seattletimes.com/html/education/2025132186_edlabacademicredshirtxml.html", // done
"http://seattletimes.com/html/education/2024894748_edlabsmallclassesxml.html", // done
"http://seattletimes.com/html/localnews/2024598767_edlabreadingbrainxml.html", // done
"http://seattletimes.com/html/localnews/2024590806_edlabprekoverviewxml.html", // done
"http://seattletimes.com/html/education/2024591420_edlabtulsaxml.html", // done
"http://www.seattletimes.com/seattle-news/education/a-roosevelt-high-drama-club-embraces-special-ed-students/", //  done
    "http://www.seattletimes.com/seattle-news/education/tough-new-exams-in-state-test-students-math-reading-skills/", // done
"http://www.seattletimes.com/seattle-news/education/uw-investigates-claims-of-racial-slurs-by-frat-members/",  // done
"http://www.seattletimes.com/seattle-news/education/state-not-joining-revolt-against-common-core-learning-model/",  // done
"http://www.seattletimes.com/seattle-news/bellevue-schools-meet-greet-high-tech-immigrants/", // done
"http://www.seattletimes.com/seattle-news/uw-loses-its-top-dawg-young-off-to-texas-am/", // done
"http://www.seattletimes.com/seattle-news/higher-ed-spending-in-texas-lured-uws-president/", // done
"http://www.seattletimes.com/news/behind-bars-college-is-back-in-session-in-some-washington-prisons/", // done
"http://www.seattletimes.com/seattle-news/statersquos-first-charter-school-in-disarray/", // done
"http://www.seattletimes.com/seattle-news/seattlersquos-nyland-skilled-at-working-across-school-factions/"
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
    $(".at-hl").empty().html("<h2>" + headline +"</h2><hr></hr>");
    $(".at-ct").empty().html(content.toString());
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

function gen_article_array(read) {
    news_read_arr = [];
    var i = 0;
    for(i = 0; i < news_links.length; i ++) {
        news_read_arr.push(0);
    }
    
    var read_arr = read.split(",");
    for(i = 0; i < read_arr.length; i ++ ) {
        if(read_arr[i].length != 0) {
            news_read_arr[parseInt(read_arr[i])] = 1;
        }
    }
    available_news = [];
    var i = 0;
    for(i = 0; i < news_links.length; i ++) {
        if(news_read_arr[i] == 0) {
            available_news.push(i);
        }
    }
    return available_news;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function getRandomNewsFromAvailable() {
    var low  = 0;
    var high = available_news.length;
    var index = Math.floor(Math.random((new Date()).getTime()) * high);
    return available_news[index];
}


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function addReadArticle(index) {
    var cookie = getCookie("siteRead");
    cookie = cookie + index + ",";
    setCookie("siteRead", cookie, 10);
    return getCookie("siteRead");
}

function clearCookie() {
    setCookie("siteRead", "", 10);
}

$(document).ready(function() {
    
    // clearCookie();
    gen_article_array(getCookie("siteRead"));
    var index = getRandomNewsFromAvailable();
    current_index = index;
    $('#url-box').val(news_links[index]);
    $('#url-box').attr("readonly", true);
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
        url = readability_url + $("#url-box").val();
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
            hint = "Do you understand clearly from this story what the problem is, and what is causing that problem?";
        } else if(name == "tmm2") {
            hint = "In addition to the problem, does the story clearly describe a solution to that problem?";
        } else if (name == "tmm3") {
            hint = "If the story describes a solution, is that description more than superficial? Does it explain clearly how the solution actually works?";
        } else if (name == "tmm4") {
            hint = "If the story describes a solution, is there solid data or other evidence to show that the solution does (or doesn’t) work? If there’s no solid data, does the story describe first-hand observation or early anecdotal results?";
        } else if (name == "tmm5") {
            hint = "Does the story connect the problem and/or solution to a bigger insight about how the world works and, perhaps, how it could be made to work better?";
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
            next();
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
            var dialog = $('<p>You will be ineligible for the iPad drawing if you submit an incomplete response. Would you like to tag some text?</p>')
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
                    "Exclude me from the drawing": function() {
                        $(this).dialog("close");
                        cur = cur + 1;
                        window.location.hash = pages[cur];
                        loadState(cur);
                    },
                    "Of course": function() {
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
        saveUser();
        $(this).attr("disabled","disabled");
        $("#finish").attr("disabled", "disabled");
        submitCoding(function() {
            addReadArticle(current_index); // update cookie
            window.location.href = "http://www.seattletimes.com/education-lab/";
        });
    });
    $("#finish").click(function() {
        saveUser();
        $(this).attr("disabled","disabled");
        submitCoding(function() {
            ANSWER = {};
            ANNOTATION_DATA = [];
            $("#finish").attr("disabled", false);
            addReadArticle(current_index); // update cookie
            gen_article_array(getCookie("siteRead"));
            var index = getRandomNewsFromAvailable();
            current_index = index;
            $('#url-box').val(news_links[index]);
            cur = 0;
            loadState(0);    
        });
    });

});

function escapeJSON(jsonString) {
    return jsonString.replace(/\\n/g, "\\n")
        .replace(/\\'/g, "\\'")
        .replace(/\\"/g, '\\"')
        .replace(/\\&/g, "\\&")
        .replace(/\\r/g, "\\r")
        .replace(/\\t/g, "\\t")
        .replace(/\\b/g, "\\b")
        .replace(/\\f/g, "\\f")
        .replace(/“/g, "\\“")
        .replace(/”/g, "\\”")
        .replace(/’/g, "\\’")
    ;
}


function submitCoding(cont) {
    var data = "";
    var url = encodeURIComponent($("#url-box").val());
    var cc = $(".at-ct").text();
    cc = cc.replace(/(\r\n|\n|\r)/gm,"");
    cc = encodeURIComponent(cc);
    var ad = encodeURIComponent(JSON.stringify(ANNOTATION_DATA));
    var hl = encodeURIComponent(escapeJSON(headline));
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
        } else if (i == 0 || i == 1 || i == 2 || i == 3 || i == 4) {
            // 0: user name
            // 1: user email
            // 2: education status
            // 3: status other option
            // 4: interest
            if(USER[field_ids[i]]) {
                data = data + USER[field_ids[i]];
            }
        } else {
            data = data + ANSWER[names[j]];
            j = j + 1;
        }
        if(i != field_ids.length - 1) {
            data = data + "&"
        }
    }
    data = data+"&draftResponse=[,,\"4996399877183524830\"]"+"&pageHistory=0"+"&fbzx=7337225476764607371"+"&submit=Submit";
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
    $("#entry_2135852305").val(USER["entry.2135852305"]);
    $("#entry_1739474268_other_option_response").val(USER["entry.1739474268.other_option_response"]);
    $("#user-info .ss-choices").each(function() {
        var rName = $(this).find("input").attr("name");
        if(rName.val() == USER[name]) {
            $(this).prop("checked", true);
        } else {
            $(this).prop("checked", false);
        }
    });
}

function saveUser() {
    var name = $("#entry_98167410").val();
    USER["entry.66704122"] = name;
    var email = $("#entry_2135852305").val();
    USER["entry.2135852305"] = email;
    // save interest
    var help = $("#user-info .ss-radio").find("input[name='entry.1398427809']:checked").val();
    if(help !== undefined) {
        USER["entry.1398427809"] = $("#user-info .ss-radio").find("input[name='entry.1398427809']:checked").val();    
    } else {
        USER["entry.1398427809"] = "";
    } 
    // save occupation
    var occu = [];
     $("#user-info .ss-checkbox .ss-choice-item").each(function() {
         var value = $(this).find("input[name='entry.1739474268']:checked").val();
         if(value) { // if this option is checked
             if (value === "__other_option__") { // if this checked is other option, read other option text
                 var other_val = $("#entry_1739474268_other_option_response").val();
                 if(other_val) {
                     occu.push("\"" + other_val + "\"");
                 }        
             } else {
                occu.push("\"" + value + "\""); 
             }  
         }
     });
     USER["entry.1739474268"] = occu.join(",");
     USER["entry.1739474268.other_option_response"] = "";
}

function savetag() {
    var have = false;
    $("#tag-content-container span").each(function() {
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
                        "text": escapeJSON(text.replace(/(\r\n|\n|\r)/gm,""))
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

// render color
function c(tag, color) {
    var sel = window.getSelection();
    var range;
    sel.rangeCount && sel.getRangeAt && (range = sel.getRangeAt(0));
    $("#tag-content-container").attr("contentEditable", 1);
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
