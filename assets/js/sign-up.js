$(".malo").hide();
$("#sign-up").on("click", function(e){
    var name = $("#name").val();
    var email = $("#email").val();
    var pass = $("#pass").val();
    if(name == ""){
        $("#malo1").show();
    }else{
     $("#malo1").hide();
    }
    if(email.indexOf('@') == -1){
        
        $("#malo2").show();
    }else{
        
        $("#malo2").hide();
    }
    if(pass.length < 6){
        $("#malo3").show();
    }else{
        $("#malo3").hide();
    }
    
    if(name != "" && email.indexOf('@') != -1 && pass >= 6){
        localStorage.setItem("nameTasty", name);
        localStorage.setItem("emailTasty", email);
        localStorage.setItem("passTasty", pass);
    }else{
        e.preventDefault();
    }
});