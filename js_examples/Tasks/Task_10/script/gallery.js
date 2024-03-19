$(document).ready(function () { 
    var gallery=new Gallery(images["images"]);
});

function Gallery(data) {
    this.photos = data;
    
    /*** constants ***/
    this.photos_div="#photos";
    this.circles_div="#circles";
    this.photo_template="#photo-template";
    this.circle_template="#circle-template";
    this.photo_width=502;
    this.circle_width=20;
    
    this.load_photos();
    this.load_circles();
}

/** load photos **/
Gallery.prototype.load_photos = function() {
    var template=$(this.photo_template).html(); //get the template
    var html_maker = new htmlMaker(template); //create an html Maker
    var html = html_maker.getHTML(this.photos); //generate dynamic HTML based on the data
    $(this.photos_div).html(html);
    $(this.photos_div).css("width",this.photos.length * this.photo_width + "px");
};

/** load circles **/
Gallery.prototype.load_circles = function() {
    var template=$(this.circle_template).html(); //get the template
    var html_maker = new htmlMaker(template); //create an html Maker
    var html = html_maker.getHTML(this.photos); //generate dynamic HTML based on the data
    $(this.circles_div).html(html);
    $(this.circles_div).children().eq(0).attr("class","selected_circle");  //select the first circle
    var gallery=this;
    var move_album=function(){gallery.move_album.call(gallery,this);};
    $(this.circles_div).children().on("click",move_album);
    $(this.circles_div).css("width",this.photos.length * this.circle_width + "px");  
};


Gallery.prototype.move_album =function(circle) {
    $(".selected_circle").attr("class","circle"); //unselect the unselected circle
    $(circle).attr("class","selected_circle");//make the current circle selected
    var img_index=$(circle).index(); //get the index of this circle
    
    var album_left = -1 * img_index * this.photo_width;//calculate where the left should be
    $(this.photos_div).css("left",album_left + "px");
};








