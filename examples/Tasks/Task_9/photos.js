$(document).ready(function () {
    var controller = new Controller(images["images"]);
});

function init(){
    load_images();
}

function Controller(data) {
    this.photos = data;
    
    /*** constants ***/
    this.photos_div="#photos";
    this.grid_icon="#grid_icon";
    this.list_icon="#list_icon";
    this.combo_box="#combo_box";
    this.photo_template="#photo-template";
    
    
    this.load_photos(this);
}

Controller.prototype.load_photos = function(self) {
        //get the template
    var template=$(self.photo_template).html(); //get the template
    var html_maker = new htmlMaker(template); //create an html Maker
    var html = html_maker.getHTML(self.photos); //generate dynamic HTML based on the data
    $(self.photos_div).html(html);
};








