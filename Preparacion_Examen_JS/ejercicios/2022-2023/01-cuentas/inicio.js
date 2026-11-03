// Creamos las dos cuentas y las guardamos en un array.
const cuentas = [new Cuenta("Ane", 100), new Cuenta("Jon")];
cuentas[0].ingresar(25.50); // 125,50.
cuentas[0].retirar(20);    // 105,50.
cuentas[0].retirar(1000);  // false: no se permite saldo negativo.
cuentas[1].ingresar(50);   // 50.
cuentas[1].ingresar(-10); // false: el saldo no cambia.
cuentas.forEach(cuenta => {
    console.log(cuenta.mostrar());
    const p = document.createElement("p");
    p.textContent = cuenta.mostrar();
    document.getElementById("resultados").append(p);
});
