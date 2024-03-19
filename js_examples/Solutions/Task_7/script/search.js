$(document).ready(function () {
    $("#search_button").on('click', search);
});




function search() {
    var names = ["Sab", "Sam Sam", "Samir", "Samorai", "Sap"];
    var html = "";
    var value = $("#field").val(); //get the value of the text field
    var show = false; //don't show suggestions

    for(var i=0;i<names.length;++i){
        var start = names[i].toLowerCase().search(value.toLowerCase().trim());
        if (start != -1) { //if there is a search match
            html += "<div class='sub_suggestions' data-item='" + names[i] + "' >";
            html+=highlight(names[i],value,start);
            html += "</div>";
            show = true; //show suggestions
        }
    }
    if (show) {
        $("#suggestions_box").html(html);
        //get the children of suggestions_box with .sub_suggestions class
        $("#suggestions_box").children(".sub_suggestions").on('click', function () {
            var item = $(this).attr('data-item'); //get the data
            $("#field").val(item); //show it in the field
            $("#suggestions_box").hide(); //hide the suggestion box
        });

        $("#suggestions_box").show();
    }
    else
        $("#suggestions_box").hide();
}

function highlight(text, match, match_index) {
    var html = "";

    while (text.length > 0) {
        if (match_index != -1) {
            html += text.substring(0, match_index) + "<b>" + text.substring(match_index, match_index + match.length) + "</b>";
            text = text.substring(match_index + match.length, text.length);
            match_index=text.toLowerCase().search(match.toLowerCase().trim());
        }
        else {
            html += text;
            break;
        }
    }
    return html;
}

