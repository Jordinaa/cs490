 $(document).ready(function () { 
     $("#search_button").on('click',function(e){
        e.stopPropagation();
         search();}
             );
     
     $("html").on('click',function(){
        $("#suggestions_box").hide();
     });     
 });




function search() {
    var names = ["Sab", "Sam", "Samir", "Samorai", "Sap"];
    var html = "";
    var value = $("#field").val(); //get the value of the text field
    var show=false; //don't show suggestions

    for(var i=0;i<names.length;++i){
        var start = names[i].toLowerCase().search(value.toLowerCase().trim());
        if (start != -1) { //if there is a search match
            html += "<div class='sub_suggestions' data-item='" + names[i] + "' >";
            html += names[i];
            html += "</div>";
            show=true; //show suggestions
        }
    }
    if(show){
        $("#suggestions_box").html(html);
        //get the children of suggestions_box with .sub_suggestions class
        $(".sub_suggestions").on('click',function(){
            var item=$(this).attr('data-item'); //get the data
            $("#field").val(item); //show it in the field
            $("#suggestions_box").hide(); //hide the suggestion box
        });
        
        $("#suggestions_box").show();
    }
    else
       $("#suggestions_box").hide();
}

