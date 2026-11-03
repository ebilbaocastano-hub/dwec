// EJERCICIO 5. SessionStorage conserva el usuario al recargar esta pestaña.
// El enunciado habla de sesión y el archivo original especifica SessionStorage.
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formSaioa");
    formulario.noValidate = true; // Nuestro JS comprueba el usuario vacío o solo espacios.
    formulario.addEventListener("submit", iniciarSesion);
    document.getElementById("buttonSaioa").addEventListener("click", cerrarSesion);
    actualizarSesion(); // También se ejecuta al entrar con un usuario ya almacenado.
});
function actualizarSesion() {
    const usuario = sessionStorage.getItem("usuario"); // String o null si no existe.
    document.getElementById("buttonSaioa").textContent = usuario ? "Saioa itxi" : "Saioa hasi";
    document.getElementById("formSaioa").hidden = Boolean(usuario);
    document.getElementById("mezua").textContent = usuario ? `Kaixo, ${usuario}!` : "";
}
function iniciarSesion(e) {
    e.preventDefault();
    const usuario = document.getElementById("username").value.trim();
    if (usuario === "") {
        document.getElementById("mezua").textContent = "El usuario no puede estar vacío.";
        return;
    }
    sessionStorage.setItem("usuario", usuario);
    alert("El usuario ha sido guardado en el storage.");
    actualizarSesion(); // Reutilizamos las mismas tres operaciones de presentación.
}
function cerrarSesion() {
    if (sessionStorage.getItem("usuario") === null) return;
    sessionStorage.removeItem("usuario"); // Borramos solo la clave de este ejercicio.
    document.getElementById("formSaioa").reset();
    actualizarSesion(); // Restaura botón, formulario y mensaje.
}
