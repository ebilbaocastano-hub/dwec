// EJERCICIO 2. Cada evento llama a una función; no se escribe funcion().
const usuario = document.getElementById("usuario");
const password = document.getElementById("password");
const mensaje = document.getElementById("mensaje");

// setTimeout ejecuta el callback UNA vez tras 10000 ms. Guardamos su id.
const aviso = setTimeout(() => alert("¡Corre, mete ya el password!"), 10000);

function vaciarCampo(e) {
    // currentTarget es el input donde hemos registrado este listener.
    e.currentTarget.value = "";
    mensaje.textContent = "";
}
usuario.addEventListener("focus", vaciarCampo);
password.addEventListener("focus", vaciarCampo);

function erroresPassword() {
    const errores = [];
    const texto = password.value; // No hacemos trim: los espacios cuentan en una clave.
    if (texto.length < 7 || texto.length > 15) {
        errores.push("La contraseña debe tener entre 7 y 15 caracteres.");
    }
    // test devuelve un booleano. Sin ^/$ buscamos una letra en cualquier sitio.
    if (!/[A-Z]/.test(texto)) errores.push("Falta al menos una mayúscula.");
    if (!/[a-z]/.test(texto)) errores.push("Falta al menos una minúscula.");
    if (!/[0-9]/.test(texto)) errores.push("Falta al menos un número.");
    return errores;
}

// blur se produce al abandonar el campo. join une el array con saltos de línea.
password.addEventListener("blur", () => {
    mensaje.textContent = erroresPassword().join("\n");
});

function comprobar(e) {
    e.preventDefault(); // Si se invoca desde submit, impide enviar el formulario.
    clearTimeout(aviso); // Pulsar el botón cancela el aviso, incluso si hay errores.
    const errores = erroresPassword(); // Validamos también al pulsar el botón.
    if (usuario.value.trim() === "") errores.push("El usuario es obligatorio.");
    mensaje.textContent = errores.length === 0
        ? "Los datos introducidos son válidos"
        : errores.join("\n");
}
document.getElementById("meterPassword").addEventListener("click", comprobar);
document.getElementById("acceso").addEventListener("submit", comprobar);
