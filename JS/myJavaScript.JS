let hotel; 
let precio; 
let simple; 
let doble; 
let usuario = "";
let usuarioactivo = "";
let contraseña = "";
let status;
let datajson;
let globalData;
let ubicacion;
let Numero;
let valorSimple
let valorDoble



$(document).ready( function() {

	console.log("pagina inciada")
	$("#ingresar").on("click", ingreso );//hace vivible panel de acceso
	$("#iUsu").on("click", reedUser );//valida si el usuraio es admin no valida realmente el usuario 
	$("#calculate").on("click", calcu );//calcula el precio de las habitaciones 
	//$("#cargarhotelaJson").on("click", saveHotel );//guarda un hotel nuevo en json

	//aca recupera los datos del local para el acceso
	let dataAcceso = JSON.parse( localStorage.getItem("dataUser"))
	console.log(dataAcceso);

	$("#leeUsu").val(dataAcceso.user);
	$("#leeCont").val(dataAcceso.pass)

	//escritura de hoteles */
	fetch("http://localhost:3000/hotles")
 		.then((response) => response.json())
  		.then((data) => {
  			datajson = data;
  			console.log(datajson)
  			data.forEach( (data) => {
  				$("#selectorHto").append("<option value="+data.nombreHotel+">"+data.nombreHotel+"</option>");
  				//console.log(data.nombre +" " +j);
		})
	});
	
  	
	async function myFunction () {
  		const res = await fetch("http://localhost:3000/hotles")
  		const data = await res.json()
  		globalData = data
	}
	
	myFunction()




});


  			

//-----------------------------funciones---------------------------------

	function ingreso() {
		console.log("se muestra el acceso");
		$("#tazaIngreso").remove(".invisible");

	};	


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
		$("#tazaIngreso").removeClass("invisible");

	};

	function saveAccesUser() {

		let accesoUser = {
			user : usuario ,
			pass : contraseña
		};

		console.log( accesoUser );
		localStorage.setItem("dataUser" , JSON.stringify(accesoUser));
	};
//----------------------------------------
	
	function calcu() {

		console.log("inicia calcular");
		hotel = $("#selectorHto").find(":selected").val();
		console.log(hotel)
		globalData.forEach((data) => {
			if (data.nombreHotel == hotel) {
				precio = data.precio;
				ubicacion = data.locate;
				Numero = data.Numberphone;
				console.log( precio )
			}
		})
		console.log("el hotel es : "+hotel+" y el precio es: "+precio);
		simple = $("#simpleRoom").val();
		doble = $("#dobleRoom").val();
		if ( simple =! "" ) {
			valorSimple = simple * precio ;
			$("#escri").append( "<p>las piesas simples son "+simple+"y acumulan un precio total de "+valorSimple+"</p>");
		}
		if ( doble =! "" ) {
			valorDoble = doble * (precio * 1.25);
			$("#escri").append( "<p>las piesas dobles son "+doble+"y acumulan un precio total de "+valorDoble+"</p>");
		}
		let Preciofinal = valorDoble + valorSimple
		$("#escri").append( "<p>el total de las habitaciones tiene un costo de "+Preciofinal+"</p>");
		$("#escri").append( "<p>el hotel se encuentra en "+ ubicacion+" y su numero de contacto es "+Numero+"</p>");
	
	};
	
	

//solo admins 
//cargar hotel para seleccionador , cada hotel tiene como id nombre en valores precio, ubicacion y numero de tel 

//guardar datos para json 

	function saveHotel() {


		let nombreHotel = $("#nombreHotelCarga").val();
		let PrecioHotel = $("#hotelPrice").val();
		let LocateHotel = $("#locacionHotelCarga").val();
		let NumeroTelHotel = $("#phoneHotel").val();

		let datahotel = {
			"nombreHotel" : nombreHotel,
			"precio" : PrecioHotel,
			"locate" : LocateHotel,
			"NumberPhone" : NumeroTelHotel
			}

		fetch("http://localhost:3000/hotles",{
			method: 'POST',
        	body: JSON.stringify({
	
        		"nombreHotel" : nombreHotel,
				"precio" : PrecioHotel,
				"locate" : LocateHotel,
				"NumberPhone" : NumeroTelHotel,
			})
			/*
			headers: {
            	'Content-type': 'application/json; charset=UTF-8',
        	},*/
    	})
    		.then((response) => response.json())
    		.then((data) => console.log(data))

	}