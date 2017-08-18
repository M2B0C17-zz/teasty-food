$(document).ready(function() {
    $(".malo").hide();
    $("#sign-up").click(function(e) {
        var name = $("#name").val();
        var email = $("#email").val();
        var pass = $("#pass").val();
        if (name == ""){
            $("#malo1").show();
            e.preventDefault();
        } else {
            $("#malo1").hide();
            console.log(name);
            localStorage.setItem("nameTasty", name);
        }
        if (email.indexOf('@') == -1){
            $("#malo2").show();
            e.preventDefault();
        } else {
            $("#malo2").hide();
            console.log(email);
            localStorage.setItem("emailTasty", email);
        }
        if (pass.length < 6){
            $("#malo3").show();
            e.preventDefault();
        } else {
            $("#malo3").hide();
            console.log(pass);
            localStorage.setItem("passTasty", pass);
        }
    });
});
