// Ariketa 2
const crearLimitadorIntentos = function (maxIntentos) {
    let intentos = maxIntentos;

    return function () {
        if (intentos === 0) {
            console.log("Acceso bloqueado: sin intentos");
            return;
        }
        intentos--;
        console.log("Te quedan " + intentos + " intentos");
    };
};

const intentarLogin = crearLimitadorIntentos(3);

intentarLogin(); 
intentarLogin(); 
intentarLogin(); 
intentarLogin(); 

// Ariketa 3

function crearCalculadorImpuesto(porcentaje) {
    return function(precioBase) {
        return precioBase * (1 + porcentaje / 100);
    };
}

const calcularIVA = crearCalculadorImpuesto(21);
const calcularIVAReducido = crearCalculadorImpuesto(10);

console.log(calcularIVA(100));        
console.log(calcularIVAReducido(100)); 
console.log(calcularIVA(50));         