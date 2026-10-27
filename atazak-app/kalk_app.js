document.addEventListener('DOMContentLoaded', () => {
    // Instanciamos la clase (Tema 3)
    const kalk = new Kalkulagailua();
    
    // Seleccionamos elementos del DOM (Tema 5)
    const pantaila = document.getElementById('pantaila');
    
    // querySelectorAll devuelve una lista (NodeList) de todos los botones
    const botoiak = document.querySelectorAll('.btn'); 

    function pantailaEguneratu() {
        // Actualizamos el texto del div pantalla
        pantaila.textContent = kalk.lortuPantailaBalioa(); // Llamamos al método de la clase para obtener el valor a mostrar
    }

    // Tema 3: Bucle forEach para recorrer todos los botones de golpe
    botoiak.forEach(botoia => {
        
        // Tema 4: Añadir evento click a cada botón
        botoia.addEventListener('click', () => {
            
            // Leemos los atributos 'data-' del HTML
            const ekintza = botoia.dataset.ekintza; // coger el valor del atributo data-ekintza
            const balioa = botoia.dataset.balioa; // coger el valor del atributo data-balioa (si existe, undefined si no)

            // Lógica de decisión
            if (ekintza === 'zenbakia') {
                kalk.gehituZenbakia(balioa);
            } else if (ekintza === 'eragiketa') {
                kalk.aukeratuEragiketa(balioa);
            } else if (ekintza === 'kalkulatu') {
                kalk.kalkulatu();
            } else if (ekintza === 'garbitu') {
                kalk.garbitu();
            }

            // Después de procesar cualquier pulsación, actualizamos la pantalla
            pantailaEguneratu();
        });
    });
});