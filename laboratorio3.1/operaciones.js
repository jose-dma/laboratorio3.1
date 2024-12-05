// paso 1: declaracion de variable

let num1, num2;
let operacion;

// paso 2: funcion para realizar operacions

function realizaroperacion(num1, num2, operaciones){ //inicializacion de variables
    if(operacion === "suma"){ //condicdicional para la suma
        return num1 + num2 ; //operacion para la suma

    } else if (operacion === "resta"){ // condicional para la resta
        return num1 - num2;
    } else if(operacion === "multiplicacion"){

        return num1 * num2;
    } else if (operacion === "division"){
        if (num2 === 0){
            return "error division por cero no permitida"
        }
        return num1 / num2;
    } else {
        return "operacion no valida"
    }


}
//paso 3 bucle para realizar multiples operaciones 

while (true){
    //solicitar al usuario que ingrese el primer numero
    num1 = parseFloat(prompt("ingrse el primer numero (o escriba salir para terminar) "));

    //si la entrada no es un numero termine el bucle
    if(isNaN(num1)){
        console.log("adios.");
        break;
    }

    //solicitar al usuario que ingrse el numero 2
    num2 = parseFloat(prompt("ingrese el segundo numero"));

    //si el segundo numero no es valido
    if(isNaN(num2)){
        console.log("por favor ingrse un numero valido");
        continue; //ingrese al inicio del bucle
    }
    //solicita al usuario la operacion deseada

operacion = prompt ("ingrse la operacion (suma, resta, division, multiplicacion)");

//si el usuario ingresa salir terminar bucle
if(operacion === "salir"){
    console.log("adios");
    break;
}
//llama la funcion operaciones con los datos proporcionados
const resultado = realizaroperacion(num1, num2, operacion.toLocaleLowerCase());
console.log(' resultado: ${resultado}');


}
   