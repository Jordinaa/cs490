$(document).ready(function () {
    var controller = new Controller(images["images"]);
    
});



function Controller(data) {
    this.photos = data;
    
    /*** constants ***/
    this.photos_div="#photos";
    this.grid_icon="#grid_icon";
    this.list_icon="#list_icon";
    this.combo_box="#combo_box";
    this.photo_template="#photo-template";
    
    
    //bind some events
    var self = this; //pass a reference to controller
    var make_grid_function=function(){
        self.make_grid.call(self);
    };
    
    var make_list_function=function(){
        self.make_list.call(self);
    };
    
    var sort_photos=function(){
        self.sort_photos.call(self);
    };
    
    $(this.grid_icon).on("click", make_grid_function);
    $(this.list_icon).on("click", make_list_function);
    $(this.combo_box).on('change',sort_photos);
    
    this.load_photos();
}

Controller.prototype.load_photos = function() {
        //get the template
    var template=$(this.photo_template).html(); //get the template
    var html_maker = new htmlMaker(template); //create an html Maker
    var html = html_maker.getHTML(this.photos); //generate dynamic HTML based on the data
    $(this.photos_div).html(html);
};

Controller.prototype.sort_photos=function(){
    var by=$(this.combo_box).val().toLowerCase();
    this.photos=this.photos.sort(
            function(a,b){
                if(a[by]<b[by])
                    return -1;
                if(a[by]==b[by])
                    return 0;
                if(a[by]>b[by])
                    return 1;
            }            
            );
    
    this.load_photos();
};


Controller.prototype.make_grid = function () {
    $(this.photos_div).attr("class", "grid");
    $(this.grid_icon).attr("src", "grid_pressed.jpg");
    $(this.list_icon).attr("src", "list.jpg");
};

Controller.prototype.make_list = function () {
    $(this.photos_div).attr("class", "list");
    $(this.grid_icon).attr("src", "grid.jpg");
    $(this.list_icon).attr("src", "list_pressed.jpg");
};






