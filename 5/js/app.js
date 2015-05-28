(function() {
    var ANNOTATION_DATA = [];
    var article_url;

    var loadArticle = function() {

        article_url = $('#url-box').val();

        var readability_url = "https://www.readability.com/api/content/v1/parser?token=43e6e0e0b590f00a095a6a0e64f6c9da11783a5a&callback=?&url=";

        var url = readability_url + article_url;

        $.getJSON(url,function(json){
            // fix problem with <p> tags
            headline = json.title;
            content = json.content;
            content = content.replace(/<[^<>]+>/g, "####")
                .replace(/((\#\#\#\#)(\s+)?)+/g, "<br><br>");

            $('#entry_2146594322').val(content.toString());
            $('#entry_1787320211').val(headline.toString());
            $('#document-viewer-container').append(
                "<h2>" + headline + "</h2><hr></hr>" + content
            );

            $('#document-viewer-container').highlighter({complete:function(){
                $('.highlighter-container input[type=radio]').prop('checked', false);
                $('.highlighter-container').css('visibility', 'visible');

            }});
        });
        return article_url;

    }
    $("#url-box").keydown(function(event){
        if(event.keyCode == 13) {
            event.preventDefault();
            $("#submit-url-button").trigger("click");
            return false;
        }
    });

    $( "#submit-url-button" ).click(function() {
        // clear existing annotation
        ANNOTATION_DATA = [];
        // load article, return url
        $('#document-viewer-container').css('display', 'inline-block')
        $('#document-viewer-container').empty();
        var article_url = loadArticle();
        $('#entry_842954229').val(article_url);
        $('#form-container').css("display", "inline-block")
        // wrap container in border
        $('#document-viewer-container').css('border-width', '1px')
    });
    
    $( "#submit-annotation-form" ).click(function() {
        
        // get tag name
        var tag = $('input[name=tag]:checked', '#pop-up-form').val();
        var article_url = $('#url-box').val();

        // determine color
        if (tag == 'problem') {
            var color = "#ffcc00";
        } else if (tag == 'solution') {
            var color =  "#00ffcc"; 
        } else if (tag == 'result') {
            var color =  "#d532ff";
        }
        
        var selection = window.getSelection();
        var range = selection.getRangeAt(0);
        var highlight_dictionary = {
            'tag' : tag,
            'text' : range.toString()
        };

        if (selection.toString()!=="") {
            // first check if already selected
            var index = -1;
            var str = "";
            for(var e in ANNOTATION_DATA) {
                if(ANNOTATION_DATA[e]['text'] === highlight_dictionary['text']) {
                    str = ANNOTATION_DATA[e]['text'];
                    index = e;
                }
            }
            if(tag == 'cancel') {
                if(index != -1) {
                    var text = document.createTextNode(str);
                    var node = selection.anchorNode;
                    if(node) {
                        var parent = node.parentNode;
                        parent.parentNode.removeChild(parent);
                        range.insertNode(text);
                    }
                    // ANNOTATION_DATA.splice(index, 1);
                }
            } else {
                var fragment = range.cloneContents();
                
                var div = document.createElement('div');
                div.appendChild( fragment.cloneNode(true) );

                var span = document.createElement("span");
                span.innerHTML = div.innerHTML;
                span.style.backgroundColor = color;
                range.deleteContents();
                range.insertNode(span);

                ANNOTATION_DATA.push(highlight_dictionary);
                var json_string = JSON.stringify(ANNOTATION_DATA);
                $('#entry_381671704').val(json_string);
            }
            $(".highlighter-container").fadeOut();
        }
    });
}).call(this);
