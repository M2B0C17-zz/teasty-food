/* NAVBAR */
$(document).ready(function(){
	$(".button-collapse").sideNav();
})


/* VALIDACION */

$(document).ready(function() {

	//validación de los input
	function validateForm(){
		//falta ver que pasa con el log in
		$(".btn-signup").click(function(){
			//valores de los inputs
			var idNombre = $("#name").val();
			var idCorreo = $("#email").val();
			var idContrasena = $("#pass").val();

			//guardamos correo con localStorage
			localStorage.setItem("email",idCorreo);
			// falta validacion nombre

			//se agregan toast como alertas
			if(!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(idCorreo) && !(/^[0-9].{3,7}$/).test(idContrasena)){
				Materialize.toast('¡CORREO Y CONTRASEÑA INVÁLIDAS!', 4000);
			} else if (!(/^[0-9].{3,7}$/).test(idContrasena)){
				Materialize.toast('¡CONTRASEÑA INVÁLIDA!', 4000);
			} else if(!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(idCorreo) || !(/^[0-9].{3,7}$/).test(idContrasena)){
				Materialize.toast('¡CORREO INVÁLIDO!', 4000);
			} else {
				$(this).attr("href","profile.html");/* nombre html sgte */
			}

			//Para limpiar los inputs
			//document.getElementById("name").value = "";
			document.getElementById("email").value = "";
			document.getElementById("pass").value = "";
		});
	}
	validateForm();

});