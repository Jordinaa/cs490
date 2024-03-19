$(document).ready(load_images);


function load_images() {

    var data = images["images"];
    //get the template
    var template=$("#photo-template").html(); //get the template
    var html_maker = new htmlMaker(template); //create an html Maker
    var html = html_maker.getHTML(data); //generate dynamic HTML based on the data
    $("#photos").html(html);
}

