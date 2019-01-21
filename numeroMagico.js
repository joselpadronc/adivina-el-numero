//numero maximo
var max = 40;
//numero minimo
var min = 1;
// numero aleatorio entre el 1 y el 100
var numeroSecreto = Math.random() * (max - min) + min;
//para que no tenga decimales
numeroSecreto = parseInt(numeroSecreto);

console.log(numeroSecreto);

var mensaje = "Ingresa un numero para advinar el numero magico";

while(true){
	var numeroDelUsuario = prompt(mensaje, "0");
	numeroDelUsuario = parseInt(numeroDelUsuario);


	if (numeroDelUsuario === numeroSecreto) {

		alert("Ganasteeee!!!! advinaste el numero secreto");
		break;

//para salir del juego
	}else if (numeroDelUsuario === 0) {
		alert("el numero magico es " + numeroSecreto);
		break;

	}else if (numeroDelUsuario > numeroSecreto) {

		mensaje = "Lo siento, el numero que ingresaste es mayor al numero magico";

	}else if (numeroDelUsuario < numeroSecreto) {

		mensaje = "Lo siento, el numero que ingresaste en menor al numero magico"

	}
}


//NOTA :
//prompt --> para pedir datos al usuario