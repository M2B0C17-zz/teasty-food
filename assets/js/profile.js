$(document).ready(function() {
    if(localStorage.user_img) {
        $('#list').html('<img class="prof-pic" src="'+ localStorage.user_img +'" title="test"/>');
        $('#user-img').html('<img class="prof-pic" src="'+ localStorage.user_img +'" title="test"/>');
    }
    if(localStorage.nameTasty) {
        $('#name').html(localStorage.nameTasty);
        $('#name_side').html(localStorage.nameTasty);
    }
    if(localStorage.emailTasty) {
        $('#email').html(localStorage.emailTasty);
        $('#email_side').html(localStorage.emailTasty);
    }

    var storedFavorites = JSON.parse(localStorage.getItem("favoritoRestaurant")); 

    storedFavorites.forEach(function(e){
        var favorito = $("<div>").attr('class', 'favorito');
        favorito.text(e);
        $("#fav-list").append(favorito);
    })
});