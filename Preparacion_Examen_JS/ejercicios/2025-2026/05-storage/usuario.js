// EJERCICIO 5. LocalStorage guarda el nombre incluso después de cerrar la pestaña.
let botonCerrar;
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("formUsuario").addEventListener("submit", guardarUsuario);
    // El HTML no trae botón de cerrar sesión: lo creamos desde JavaScript.
    botonCerrar = document.createElement("button");
    botonCerrar.type = "button";
    botonCerrar.textContent = "Cerrar sesión";
    botonCerrar.addEventListener("click", cerrarSesion);
    document.getElementById("contenedor").append(botonCerrar);
    mostrarEstado(); // Comprueba también si hay usuario al cargar de nuevo.
});
function mostrarEstado() {
    const usuario = localStorage.getItem("usuario");
    const hayUsuario = usuario !== null && usuario !== "";
    document.getElementById("formUsuario").hidden = hayUsuario;
    botonCerrar.hidden = !hayUsuario;
    document.getElementById("mensaje").textContent = hayUsuario ? `Bienvenido de nuevo, ${usuario}` : "";
}
function guardarUsuario(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombreUsuario").value.trim();
    if (nombre === "") {
        document.getElementById("mensaje").textContent = "El usuario no puede estar vacío.";
        return;
    }
    localStorage.setItem("usuario", nombre); // Almacenamos un string: no necesita JSON.
    mostrarEstado(); // Misma lógica al iniciar sesión y al volver a la página.
}
function cerrarSesion() {
    localStorage.removeItem("usuario"); // Conservamos cualquier otra clave de la web.
    document.getElementById("formUsuario").reset();
    mostrarEstado(); // Vuelve a mostrar formulario, ocultar botón y limpiar saludo.
}
