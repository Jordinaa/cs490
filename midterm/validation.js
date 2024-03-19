$(document).ready(function() {
    $("input[type='submit']").click(function(event) {
        event.preventDefault(); // Prevent form submission to see the validation
        
        // reset form
        $("input, select").css("border", "");
        $(".validation-message").remove();
        
        // username
        var uname = $("#uname").val();
        if (!/^[A-Za-z_]{6,10}$/.test(uname)) {
            $("#uname").after("<span class='validation-message'>Invalid username</span>").css("border", "2px solid red");
        } else {
            $("#uname").after("<span class='validation-message'>&#10003;</span>").css("border", "2px solid green");
        }
        
        // email
        var email = $("#email").val();
        if (!/^[A-Za-z0-9_]+@[A-Za-z0-9_]+\.[A-Za-z0-9_]+$/.test(email) || (email.match(/@/g) || []).length > 1) {
            $("#email").after("<span class='validation-message'>Invalid email</span>").css("border", "2px solid red");
        } else {
            $("#email").after("<span class='validation-message'>&#10003;</span>").css("border", "2px solid green");
        }
        
        // position
        var position = $("#position").val();
        if (position === "default") {
            $("#position").after("<span class='validation-message'>Select a position</span>").css("border", "2px solid red");
        } else {
            $("#position").after("<span class='validation-message'>&#10003;</span>").css("border", "2px solid green");
        }
        
        // type 
        var typeSelected = $("input[name='contact']:checked").val();
        if (!typeSelected) {
            $("input[name='contact']").last().after("<span class='validation-message'>Select Full-time or Part-time</span>");
            $("input[name='contact']").css("outline", "2px solid red");
        } else {
            $("input[name='contact']").last().after("<span class='validation-message'>&#10003;</span>").css("outline", "none");
        }
    });
});
