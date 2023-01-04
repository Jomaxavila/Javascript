alert('Bienvenido a elige tu propio Slideshow\nElige 3 palabras para que por inteligencia artificial diseñemos tu video');
let elegir = Number(prompt(`1.abrazos\n 2.besos\n 3.sonrisas\n 4.miradas\n 5.fiesta\n 6.civil\n 7.familia\n 8.iglesia\n 9.amigos\n 0.salir`.toLocaleLowerCase()));
const abrazos = 1;
const besos = 2;
const sonrisas = 3;
const miradas = 4;
const fiesta = 5;
const civil = 6;
const familia = 7;
const iglesia = 8;
const amigos = 9;

let elecciones = 5;

while (elegir != 0) {
	switch (elegir) {
		case 1:
			elecciones--;
			alert("Seleccionaste abrazos");
			alert(`Debes elegir ${elecciones} palabras más para armar tu slideshow`);
			if (elecciones === 0) {
				alert("Listo, ya seleccionaste tus palabras")
				alert("Bienvenido a tu slideshow");
			}
			break;

		case 2:
			elecciones--;
			alert("Seleccionaste besos");
			alert(`Debes elegir ${elecciones} palabras más para armar tu slideshow`);
			if (elecciones === 0) {
				alert("Listo, ya seleccionaste tus palabras")
				alert("Bienvenido a tu slideshow");
			}
			break;
		case 3:
			elecciones--;
			alert("Seleccionaste sonrisas");
			alert(`Debes elegir ${elecciones} palabras más para armar tu slideshow`);
			if (elecciones === 0) {
				alert("Listo, ya seleccionaste tus palabras")
				alert("Bienvenido a tu slideshow");
			}
			break;
		case 4:
			elecciones--;
			alert("Seleccionaste miradas");
			alert(`Debes elegir ${elecciones} palabras más para armar tu slideshow`);
			if (elecciones === 0) {
				alert("Listo, ya seleccionaste tus palabras")
				alert("Bienvenido a tu slideshow");
			}
			break;
		case 5:
			elecciones--;
			alert("Seleccionaste fiesta");
			alert(`Debes elegir ${elecciones} palabras más para armar tu slideshow`);
			if (elecciones === 0) {
				alert("Listo, ya seleccionaste tus palabras")
				alert("Bienvenido a tu slideshow");
			}
			break;
		case 6:
			elecciones--;
			alert("Seleccionaste civil");
			alert(`Debes elegir ${elecciones} palabras más para armar tu slideshow`);
			if (elecciones === 0) {
				alert("Listo, ya seleccionaste tus palabras")
				alert("Bienvenido a tu slideshow");
			}
			break;
		case 7:
			elecciones--;
			alert("Seleccionaste familia");
			alert(`Debes elegir ${elecciones} palabras más para armar tu slideshow`);
			if (elecciones === 0) {
				alert("Listo, ya seleccionaste tus palabras")
				alert("Bienvenido a tu slideshow");
			}
			break;
		case 8:
			elecciones--;
			alert("Seleccionaste iglesia");
			alert(`Debes elegir ${elecciones} palabras más para armar tu slideshow`);
			if (elecciones === 0) {
				alert("Listo, ya seleccionaste tus palabras")
				alert("Bienvenido a tu slideshow");
			}
			break;
		case 9:
			elecciones--;
			alert("Seleccionaste amigos");
			alert(`Debes elegir ${elecciones} palabras más para armar tu slideshow`);
			if (elecciones === 0) {
				alert("Listo, ya seleccionaste tus palabras")
				alert("Bienvenido a tu slideshow");
			}
			break;
		default:
			alert("Opcion Invalida");
			break;

	}

	elegir = Number(prompt(`1. abrazos\n 2. Besos\n 3. sonrisas\n 4. miradas\n 5. fiesta\n 6. civil\n 7. familia\n 8. iglesia\n 9.amigos\n 0. salir`.toLocaleLowerCase()));
}
alert("Muchas gracias hasta la próxima👋");
