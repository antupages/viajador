console.log("pagina inciada")

let hotel = "";
let precio = 0;
let simple = 0;
let doble = 0; 

function calcu() {

	console.log("inicia calcular");
	let hotel = document.getElementById("nameHotel").value;
	let precio = document.getElementById("precioHotel").value;
	let simple = document.getElementById("simpleRoom").value;
	let doble = document.getElementById("dobleRoom").value;
	console.log(hotel + " " + precio + " " + simple + " " + doble );

	if ( simple =! 0 ) {
		console.log(simple)
		let valorSimple = simple * ( precio * 1.3 );
		console.log("el valor de las simples es: " + valorSimple );
		//console.log(simple);
		//escritura(simple);
		for (let i = 1; i <= simple ; i++){
			console.log(i);
			console.log(simple);
			document.getElementById("escri").innerHTML = '<p>habitacion simple nro°'+ i +' pertenece a  <input type="text" class="form-control" placeholder="nombre de recidente" aria-label="nombre de recidente" aria-describedby="basic-addon1" ></p>';
		};
	};

	if ( doble =! 0 ) {
		let valorDoble = doble *  precio;
		console.log("el valor de las dobles es: " + valorDoble );
		for (let i = 0; i < doble ; i++) {
			console.log(i);
		};
	};
};











/*
function escritura (cantidad) {
	for (let i = 0; i < cantidad ; i++) {
		console.log(i);

	};
};

*/





/*for (let i = 0; i < 5 ; i++) {
		console.log(i);
};

let hotel = document.getElementById("nameHotel").value
console.log("el nombre del hotel es:" + hotel )

let hotel = "";
let precio = 0;
let simple = 1;
let doble = 1;
let valorDoble = 1;
let valorSimple = 1;
*/


/*
function sumaPrecios() {
	if ( simple =! 0 ) {
		let valorSimple = simple * ( precio * 1.3 );
		console.log("el valor de las simples es: " + valorSimple );
	};
	if ( doble =! 0 ) {
		let valorDoble = doble *  precio;
		console.log("el valor de las dobles es: " + valorDoble );
	};
};

*/