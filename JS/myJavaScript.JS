$(document).ready( function() {


let hotel; 
let precio; 
let simple; 
let doble; 
let usuario = "";
let usuarioactivo = "";
let contraseña = "";
let rooms;
let status;


	console.log("pagina inciada")
	$("#ingresar").on("click", ingreso );//hace vivible panel de acceso
	$("#iUsu").on("click", reedUser );//valida si el usuraio es admin no valida realmente el usuario 
	$("#calculate").on("click", calcu );//calcula el precio de las habitaciones 

	//aca recupera los datos del local para el acceso
	let dataAcceso = JSON.parse( localStorage.getItem("dataUser"))
	console.log(dataAcceso);

	$("#leeUsu").val(dataAcceso.user);
	$("#leeCont").val(dataAcceso.pass)


	fetch("./hotel.txt")
 		.then(res => res.JSON())
 		.then(JSON => console.log(res));
 			//response.json())
  		//.then(json => console.log(json));
	


});



//-----------------------------funciones---------------------------------

	function reedUser(){
		console.log("inicio validacion de usuario")
		usuario = $("#leeUsu").val();
		contraseña = $("#leeCont").val();

		if (usuario == "admin") {
			if (contraseña == "1234") {
				status = "admin";
			}else{
				console.log("contraseña invalida")
				$("#leeCont").value = "";
			}
		}else{
			status = "usuario"
		};

		if (status == "admin") {
			$("panelAdmin").removeClass("invisible");
		}
		console.log("el usuario es del tipo:" + status);
		console.log(usuario);
		saveAccesUser();

	};

	function saveAccesUser() {

		let accesoUser = {
			user : usuario ,
			pass : contraseña
		};

		console.log( accesoUser );
		localStorage.setItem("dataUser" , JSON.stringify(accesoUser));
	};

	function calcu() {

		console.log("inicia calcular");
		let hotel = $("#nameHotel").val;
		let precio = $("#precioHotel").val;
		let simple = $("#simpleRoom").val;
		let doble = $("#dobleRoom").val;
		console.log(hotel + " " + precio + " " + simple + " " + doble );

		if ( simple =! "" ) {
			console.log(simple)
			let valorSimple = simple * ( precio * 1.3 );
			console.log("el valor de las simples es: " + valorSimple );
			for (let i = 1; i <= simple ; i++){
				console.log(i);
				console.log(simple);
				$("#escri").append( '<p>habitacion simple nro°'+ i +' pertenece <input type="text" class="form-control" placeholder="nombre de recidente" aria-label="nombre de recidente" aria-describedby="basic-addon1" ></p>');
			};
		};

		if ( doble =! "" ) {
			let valorDoble = doble *  precio;
			console.log("el valor de las dobles es: " + valorDoble );
			for (let i = 0; i < doble ; i++) {
				console.log(i);
				$("#escri2").append = '<p>habitacion doble nro° D'+ i +' pertenece a  <input type="text" class="form-control" placeholder="nombre de recidentes" aria-label="nombre de recidentes" aria-describedby="basic-addon1" ></p>';
			};
		};
	};
	
	function ingreso() {
		console.log("se muestra el acceso");
		$("#tazaIngreso").removeClass("invisible");

	};

//solo admins 
//cargar hotel para seleccionador , cada hotel tiene como id nombre en valores precio, ubicacion y numero de tel 

//guardar datos para json 

	function saveHotel() {


		let nombreHotel;
		let PrecioHotel;
		let LocateHotel;
		let NumeroTelHotel;

		let datahotel = {
			"nombreHotel" : nombreHotel,
			"precio" : PrecioHotel,
			"locate" : LocateHotel,
			"NumberPhone" : NumeroTelHotel
		}	
	}