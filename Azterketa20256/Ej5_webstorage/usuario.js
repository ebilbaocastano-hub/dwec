
// Ejercicio 5 - Web Storage

  // Si hay usuario en localStorage -> mostrar "Bienvenido de nuevo" y botón cerrar sesión
  // Si no, mostrar formulario

  // Guardar usuario en localStorage si no está vacío

  // Borrar usuario de localStorage y restaurar formulario

// DOM-a erabat kargatu arte itxaron, script-a errore gabe exekutatzeko
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. ELEMENTUAK HAUTATU: HTML-ko elementuak ID bidez lortu eta aldagaietan gorde
    const formUsuario = document.getElementById("formUsuario");
    const inputNombre = document.getElementById("nombreUsuario");
    const divMensaje = document.getElementById("mensaje");

    // 2. PANTAILA EGUNERATZEKO FUNTZIOA: LocalStorage-aren arabera interfazea aldatzen du
    const eguneratuPantaila = () => {
        // LocalStorage-ko memorian "usuario" izeneko datua dagoen irakurri
        const usuarioGuardado = localStorage.getItem("usuario");

        if (usuarioGuardado) {
            // ERABILTZAILEA BADAGO: Formularioa ezkutatu (CSS display: none)
            formUsuario.style.display = "none";
            
            // Ongietorri mezua eta saioa ixteko botoia dinamikoki sortu HTML barruan
            divMensaje.innerHTML = `
                <p>Bienvenido de nuevo, <strong>${usuarioGuardado}</strong></p>
                <button id="btnCerrarSesion">Cerrar sesión</button>
            `;

            // SAIOA IXTEKO BOTOIAREN EKINTZA: Klik egitean erabiltzailea ezabatu
            document.getElementById("btnCerrarSesion").addEventListener("click", () => {
                // Nabigatzailearen memoriatik (localStorage) erabiltzailea guztiz ezabatu
                localStorage.removeItem("usuario");
                // Pantaila berritu, hasierako egoerara (formularioa) itzultzeko
                eguneratuPantaila();
            });

        } else {
            // ERABILTZAILERIK EZ BADAGO: Formularioa berriro erakutsi
            formUsuario.style.display = "block";
            // Mezuen kutxa garbitu, aurreko daturik ez ikusteko
            divMensaje.innerHTML = "";
            // Sarrera-eremua (input) hutsik utzi erabiltzaile berri batentzat
            inputNombre.value = ""; 
        }
    };

    // 3. FORMULARIOA BIDALTZEKO EKINTZA: Erabiltzaile berria memorian gordetzeko
    formUsuario.addEventListener("submit", (e) => {
        // Nabigatzaileak orria automatikoki berritzea ekidin (ezinbestekoa formularioetan)
        e.preventDefault(); 

        // Idatzitako testua hartu eta muturretako zuriuneak kendu (trim)
        const nombre = inputNombre.value.trim();

        // Izenaren eremua ez badago hutsik, prozesatu
        if (nombre !== "") {
            // LocalStorage-an "usuario" izenarekin idatzitako izena gorde
            localStorage.setItem("usuario", nombre);
            // Pantaila berehala aldatu ongietorria erakusteko
            eguneratuPantaila(); 
        }
    });

    // 4. HASIERAKO EGIAZTAPENA: Orria lehen aldiz kargatzean pantaila nola erakutsi erabaki
    // Pantaila eguneratu, erabiltzaile bat dagoen edo ez egiaztatzeko, sartzen den guztietan
    eguneratuPantaila();
});