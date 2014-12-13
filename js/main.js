var cur = 0;

var pages = ["#intro", "#article", "#question", "#tagpage", "#review"];

var readability_url = "https://www.readability.com/api/content/v1/parser?token=43e6e0e0b590f00a095a6a0e64f6c9da11783a5a&callback=?&url=";

var bg_color = ["#FEED76", "#94FD88", "#D532FF"];

var ANNOTATION_DATA = [[],[],[]];

var headline;
var title;

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
    // hide all divs
    for(var i =  0; i < pages.length; i ++) {
        hide($(pages[i]));
    }
    // show the one on state 
    show($(pages[s]));
}

function renderArticle(headline, content) {
    $(".at-hl").empty().html("<h2>" + headline +"</h2><hr></hr>");
    $(".at-ct").empty().html(content.toString());
}

$(document).ready(function() {

    /* For Debug */
    headline = "Java 8 Turotial";
    content = "Welcome to my introduction to Java 8. This tutorial guides you step by step through all new language features. Backed by short and simple code samples you'll learn how to use default interface methods, lambda expressions, method references and repeatable annotations. At the end of the article you'll be familiar with the most recent API changes like streams, functional interfaces, map extensions and the new Date API.No walls of text - just a bunch of commented code snippets. Enjoy!"
    renderArticle(headline, content);
    
    var hash = window.location.hash;
    cur = pages.indexOf(hash);
    if(cur == -1) {
        cur = 0;
    }
    loadState(cur);
    window.location.hash = pages[cur];

    $("#goto-article").click(function() {
        var url = readability_url + $("#url-box").val();
        $.getJSON(url, function(json) {
            headline = json.title;
            content = json.content;
            content = content.replace(/<[^<>]+>/g, "####")
                .replace(/((\#\#\#\#)(\s+)?)+/g, "<br><br>");
            renderArticle(headline, content);
            cur = cur + 1;
            window.location.hash = pages[cur];
            loadState(cur);
        });
    });

    $("#goto-question").click(function() {
        cur = cur + 1;
        window.location.hash = pages[cur];
        loadState(cur);
    });

    $("#goto-tagging").click(function() {
        // save doc options
        cur = cur + 1;
        window.location.hash = pages[cur];
        loadState(cur);
    });

    $("#finish").click(function() {
        history.go(-(history.length - 1));
        window.close();
    })
    
    window.onpopstate = function(event) {
        var hash = window.location.hash;
        cur = pages.indexOf(hash);
        loadState(cur);
    }
    window.onpushstate = function(event) {
        var hash = window.location.hash;
        cur = pages.indexOf(hash);
        loadState(cur);
    }

    /* tag page */
    $("#tag-content-container").mousedown(f).mouseup(g);
    $("#container").click(function() {
        f();
    });
    $("#highlightbar").mousedown(function(e) {
        e.preventDefault();
    });
    $("#submit-annotation-form").click(function() {
        var tag = $("input[name=tag]:checked", "#highlightbar").val();
        var color = $("input[name=tag]:checked", "#highlightbar").data("color");
        u(tag, color);
    });
    $("#goto-review").click(function() {
        // save tag data
        savetag();
        // jump to next page
        cur = cur + 1;
        window.location.hash = pages[cur];
        loadState(cur);
    });

    /* Review page */
    $("#rv-bt").click(function() {
        $("#rv-at").html($("#tag-content-container").html());
        $("#rv-ques").html($("#gform-container").html());
    });
});

function savetag() {
    $("#tag-content-container span").each(function() {
        var color = $(this).css("background-color")
        if(color) {
            var hex = rgb2hex(color).toUpperCase();
            var index = bg_color.indexOf(hex);
            var text = $(this).text();
            if(index <= 2 && index >= 0) {
                ANNOTATION_DATA[index].push(text);
            }
        }
    });
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
    range && (sel.removeAllRanges(), sel.addRange(range)),
    document.execCommand("HiliteColor", false, color) ||
        document.execCommand("BackColor", false, color);
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
                    var n = $('#tag-content-container');
                    l.css({
                        left: e.pageX + 10,
                        top: e.pageY + 10
                    });
                }
            }
        }
    }, 50);
}
