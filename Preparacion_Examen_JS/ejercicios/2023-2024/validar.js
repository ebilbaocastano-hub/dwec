// APARTADO 3.a. Validación en JavaScript: devuelve true o false.
function validar() {
    const errores = [];
    const textoKg = document.getElementById("kg").value.trim();
    const kg = Number(textoKg);
    const nombre = document.getElementById("nombre").value.trim();
    if (textoKg === "" || !Number.isFinite(kg) || kg < 1 || kg > 100) {
        errores.push("Los kg deben ser un número entre 1 y 100.");
    }
    // Regex completa: letras españolas y espacios, de 3 a 20 caracteres en total.
    const patronNombre = /^[A-Za-zÁÉÍÓÚÜáéíóúüÑñ ]{3,20}$/;
    // replaceAll quita espacios solo para contar las letras: exigimos al menos tres.
    if (!patronNombre.test(nombre) || nombre.replaceAll(" ", "").length < 3) {
        errores.push("El nombre debe tener al menos 3 letras, máximo 20 caracteres y solo letras y espacios.");
    }
    // Se comprueban AMBOS campos antes de mostrar un único alert con todos los fallos.
    if (errores.length > 0) alert(errores.join("\n"));
    return errores.length === 0;
}
