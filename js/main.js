var cur = 0;

var pages = ["#intro", "#article", "#question", "#tagpage", "#review"];

var readability_url = "https://www.readability.com/api/content/v1/parser?token=43e6e0e0b590f00a095a6a0e64f6c9da11783a5a&callback=?&url=";

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
});

