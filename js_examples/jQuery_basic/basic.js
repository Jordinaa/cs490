$(document).ready(on_load);


function on_load(){
    $('#button').on('click',handle_button_click);

}

function handle_button_click(){
    var text_field_val=$('#field').val();
    $("#text").text("Hello " + text_field_val);
}

