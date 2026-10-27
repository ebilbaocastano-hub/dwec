// Instancia global para que los "onclick" del DOM la reconozcan
const kudeatzailea = new AtazaKudeatzailea();

// Módulo 4: Eventos de documento
document.addEventListener('DOMContentLoaded', () => {
    
    // Añadimos un par de tareas iniciales directamente en JS (sin fetch)
    kudeatzailea.gehituAtaza(new Ataza("JavaScript apunteak irakurri", false));
    kudeatzailea.gehituAtaza(new Ataza("DOM ariketak egin", true));

    // Módulo 4: Formularios e Interacción
    const inprimakia = document.getElementById('task-form');
    const sarrera = document.getElementById('task-input');

    inprimakia.addEventListener('submit', (e) => {
        // Detiene el recargo de la página al enviar el formulario
        e.preventDefault(); 
        
        const izenburua = sarrera.value.trim(); // Manipulación de string
        
        if (izenburua !== "") {
            kudeatzailea.gehituAtaza(new Ataza(izenburua)); // Añadimos la nueva tarea al gestor de tareas
            sarrera.value = ""; // Vaciamos el input
        }
    });

    // Módulo 2: Control de tiempo y eventos de ratón
    let timerInterval; // Variable para almacenar el intervalo del temporizador
    let timeLeft = 25 * 60; // 25 minutos en segundos
    const timerDisplay = document.getElementById('timer');
    const btnStart = document.getElementById('btn-start');
    const btnReset = document.getElementById('btn-reset');

    function updateTimerDisplay() {
        const minutuak = Math.floor(timeLeft / 60); // Hacemos uso de Math para obtener los minutos
        const segunduak = timeLeft % 60; // Obtenemos los segundos restantes
        // Actualizamos el contenido del temporizador en el DOM para mostrarlo en formato "mm:ss", usando padStart para asegurar dos dígitos
        timerDisplay.textContent = `${String(minutuak).padStart(2, '0')}:${String(segunduak).padStart(2, '0')}`;
    }

    btnStart.addEventListener('click', () => {
        if (btnStart.textContent === 'Hasi') {
            btnStart.textContent = 'Pausatu'; // Cambiamos el texto del botón a "Pausatu" para indicar que el temporizador está en marcha

            // Ejecutar código cada 1 segundo repetidamente para decrementar el tiempo restante y actualizar la visualización del temporizador
            timerInterval = setInterval(() => {
                if (timeLeft > 0) {
                    timeLeft--;
                    updateTimerDisplay();
                } else {
                    clearInterval(timerInterval); // Parar temporizador
                    alert("Pomodoroa amaitu da!");
                    btnStart.textContent = 'Hasi'; // Reiniciamos el texto del botón a "Hasi" para permitir iniciar un nuevo temporizador
                }
            }, 1000); // 1000 milisegundos = 1 segundo
        } else {
            // Si el temporizador está en marcha, pausamos el temporizador y cambiamos el texto del botón a "Hasi"
            btnStart.textContent = 'Hasi';
            clearInterval(timerInterval); 
        }
    });

    btnReset.addEventListener('click', () => {
        clearInterval(timerInterval); // Parar temporizador
        timeLeft = 25 * 60; // Reiniciamos el tiempo a 25 minutos
        updateTimerDisplay(); // Actualizamos la visualización del temporizador en el DOM
        btnStart.textContent = 'Hasi'; // Reiniciamos el texto del botón a "Hasi" para permitir iniciar un nuevo temporizador
    });
});