    
    function $(id){
            return document.getElementById(id);
        }
        
    function changeText() { 
        $("text").innerHTML = "Hello " + $("field").value;
    }

