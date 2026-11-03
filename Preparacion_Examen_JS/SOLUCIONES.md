# Los 20 ejercicios, explicados apartado por apartado

Las páginas se abren desde [index.html](index.html). El código de cada enlace está completamente implementado y comentado. Las herramientas de lenguaje están desarrolladas por temas en [APUNTES.md](APUNTES.md).

Las variantes de idioma comparten solución: no hay que aprender dos implementaciones del mismo problema. Se conservan los nombres del HTML proporcionado y se indican las equivalencias cuando la traducción cambia un nombre de clase o función.

## 2021–2022

### 1. Arrays: comprobar posiciones · 2 puntos

Código: [script.js](ejercicios/2021-2022/01-arrays/script.js).

1. Se define el array numérico de nueve elementos. El índice 0 debe contener 1 y, en general, el índice `i` debe contener `i + 1`.
2. `comprobarArray(miArray)` recorre con `for`, porque necesitamos simultáneamente posición y valor.
3. Cada diferencia se guarda con `push` en un array de errores. No hay `break`: se informa de todos, no solo del primero.
4. Los mensajes se convierten en párrafos y se añaden a la página con DOM.
5. La función devuelve `errores.length === 0`: un booleano, no el propio mensaje.

La demostración ejecuta un array correcto y otro con errores en las posiciones 3 y 6. También se comprueba la longitud para no declarar correcto un array incompleto.

### 2. Eventos y temporizador · 2 puntos

Código: [script.js](ejercicios/2021-2022/02-eventos/script.js).

1. Ambos inputs comparten `vaciarCampo` en `focus`. `currentTarget` identifica qué input vaciar.
2. Al abandonar la contraseña, `blur` comprueba sus 7–15 caracteres y sus tres requisitos de contenido.
3. Las regex independientes buscan mayúscula, minúscula y número. Los mensajes se acumulan y se escriben en `div#mensaje`.
4. `setTimeout` programa el alert a los diez segundos. Se conserva su identificador.
5. El botón ejecuta `clearTimeout` y vuelve a validar todo. Esto evita depender de que el usuario haya pasado previamente por `blur`.
6. Si usuario y clave son correctos se muestra el texto de éxito; el submit también se intercepta para no enviar nunca el formulario.

Vaciar al obtener el foco es una condición de este ejercicio. Por eso, al volver a entrar en un campo se borra lo que había: no es un fallo de la solución.

### 3. Clase Jugador y ruleta · 3,5 puntos

Código: [Jugador.js](ejercicios/2021-2022/03-jugadores/Jugador.js) e [inicio.js](ejercicios/2021-2022/03-jugadores/inicio.js).

1. La clase reúne nombre, vidas, pistola, granada y balas. Se definen sus getters y setters.
2. El constructor utiliza los setters. El de las balas comprueba que exista pistola; el de la pistola borra las balas si se retira el arma. La regla permanece después de construir el objeto.
3. `toString` devuelve una frase adaptada a los booleanos, incluyendo el número de vidas y balas que correspondan.
4. `inicio.js` crea los tres jugadores estáticos dentro de un array. Ane empieza sin pistola: sus 20 balas recibidas se corrigen a 0.
5. `imprime` crea una sección nueva con los tres estados actuales. Conservamos la anterior para ver el cambio.
6. `ruletaRusa` elige un índice con `Math.floor(Math.random() * jugadores.length)` y asigna cero vidas al objeto seleccionado.
7. Se ejecutan `imprime`, `ruletaRusa` e `imprime`. Los scripts se cargan al final del HTML, en el orden requerido.

El elegido cambia entre ejecuciones; siempre debe haber tres jugadores en cada sección y exactamente uno pasa de sus vidas iniciales a cero.

### 4. Noticias creadas con DOM · 2 puntos

Código: [script.js](ejercicios/2021-2022/04-noticias/script.js).

1. El formulario incluye título, texto, tres periodistas y URL.
2. Se impide el envío y se rechazan título/texto vacíos, incluidos los formados solo por espacios. Una URL opcional, si está escrita, se comprueba con `reportValidity`.
3. Se crea un `article`: representa una noticia independiente.
4. Dentro se crea un `h3` con un enlace cuyo texto es el título y cuyo destino es la URL; si no se indica URL, se usa `#`.
5. Se crea un `h2` con periodista y fecha actual, en negrita por CSS, y un `p` con la noticia.
6. El valor del periodista corresponde a una clase CSS. Se aplica al artículo y al párrafo: así quedan cubiertas tanto la descripción como la rúbrica, que menciona la clase del párrafo.
7. Se añade la noticia sin borrar las anteriores y se restaura el formulario.

## 2022–2023

### 5. Cuenta bancaria · 3 puntos

Código: [Cuenta.js](ejercicios/2022-2023/01-cuentas/Cuenta.js) e [inicio.js](ejercicios/2022-2023/01-cuentas/inicio.js).

1. El constructor admite titular pendiente y saldo inicial por defecto 0. Un saldo inicial inválido o negativo se sustituye por 0.
2. Hay getter/setter de titular y getter/setter de cantidad. El campo `#cantidad` es privado.
3. El setter de cantidad rechaza asignaciones directas con `throw`: modificarlo queda reservado a los métodos. No se expone un setter que permita saltarse esa regla.
4. `ingresar` rechaza negativos y valores no finitos; `retirar` comprueba además que no supere el saldo. Si falla una operación, no cambia el dinero.
5. Se exige un titular no vacío para operar. Así se reconcilian las dos frases del original: constructor vacío permitido y titular obligatorio al utilizar la cuenta.
6. `mostrar` devuelve el titular y el saldo con dos decimales.
7. La demostración crea dos cuentas, las guarda en un array, realiza movimientos válidos e inválidos y muestra resultados: **105,50 € y 50,00 €**.

Equivalencias en euskera: `kontua` utiliza el mismo constructor; `display`, `sartu` y `kendu` llaman a `mostrar`, `ingresar` y `retirar`. El titular se trata como nombre de la persona; no se exige una clase Persona adicional.

### 6. Tabla de participantes · 3,5 puntos

Código: [invierno.js](ejercicios/2022-2023/02-participantes/js/invierno.js). Se conserva el HTML original, sus estilos y las banderas.

1. Al estar el script en el head, `DOMContentLoaded` retrasa la conexión de los botones y los eventos `blur`.
2. `errorCampo` valida un control y devuelve un mensaje o `""`. La misma regex valida nombre y país, incluyendo acentos, ñ y espacios. El mensaje identifica cuál falló.
3. La puntuación se convierte a número después de comprobar el vacío y se limita a 0–100, ambos incluidos.
4. `validar` reúne los errores, los muestra en un alert y devuelve booleano. También se usa la regla individual al abandonar cada campo.
5. `crear` construye `tr` y tres `td`, incluyendo la imagen y el nombre del país. Para España se respeta la forma Unicode del archivo original; si no existe bandera, se conserva el nombre y se retira la imagen rota.
6. Los eventos de la fila nueva cambian el fondo completo al entrar/salir. `currentTarget` evita colorear solo una celda.
7. `borrarFormulario` limpia los tres campos después de crear una fila válida.
8. `borrarUltimo` solo borra si hay más de una fila: conserva las cabeceras incluso al pulsarlo repetidamente.

Aunque la versión traducida mencione otro nombre del JS, se utiliza `invierno.js`, que es el archivo realmente enlazado en el HTML entregado.

### 7. Corregir el formulario · 3 puntos

Código: [functions.js](ejercicios/2022-2023/03-correcciones/functions.js). Cada corrección está numerada en los comentarios.

1. Se ejecuta la inicialización y se seleccionan elementos en vez de tratar una colección como un elemento.
2. Desde JS se desactiva la validación automática para poder reunir todos los errores del HTML original con `required`.
3. Se validan los tres campos obligatorios y la regex del nombre sobre `.value`, con la negación correcta. El enunciado pide email obligatorio; no se inventa una regla adicional de formato.
4. Se corrige el id sin comillas y se usa `textContent` en el párrafo de errores. Todos los fallos aparecen juntos.
5. El resultado booleano determina si se muestra la zona inferior; el formulario nunca se envía.
6. `change` lee el value de la actividad. Riesgo corresponde a `"3"`, no al texto `"riesgo"`. Se compara con `===` y se convierte la edad a número.
7. Antes de escribir un mensaje, se borran ambos anteriores. Así no queda simultáneamente un error y un agradecimiento.
8. El botón Restaurar ejecuta `reset`, limpia mensajes y oculta de nuevo la zona inferior.

## 2023–2024 · Punto limpio

Los tres apartados funcionan juntos en [index.html](ejercicios/2023-2024/index.html), con el HTML original intacto.

### 8. Clase Descarga · 1,5 puntos

Código: [descarga.js](ejercicios/2023-2024/descarga.js).

1. El constructor recibe color, residuo, kg y nombre.
2. Sus cuatro propiedades tienen getter/setter estándar; `_` diferencia el almacenamiento interno del nombre público.
3. `mostrar` devuelve la frase con los cuatro datos. La consola la utiliza al recorrer el array.

`Deskarga` es una referencia al mismo constructor para la versión en euskera.

### 9. Arrays · 1,25 puntos

Código: [array.js](ejercicios/2023-2024/array.js).

1. `addArray(array, elemento)` usa `unshift` para añadir **al principio**.
2. A continuación llama a `mostrarArray`.
3. `mostrarArray` recorre con `forEach` y muestra el resultado de `descarga.mostrar()`, sin reconstruir la frase por separado.

`gehituArray` y `erakutsiArray` son las equivalencias en euskera.

### 10. Validación, formulario, acumuladores y color · 7,25 puntos

Código: [validar.js](ejercicios/2023-2024/validar.js), [script.js](ejercicios/2023-2024/script.js) y [pintar.js](ejercicios/2023-2024/pintar.js).

1. El submit se cancela antes de realizar cualquier operación.
2. La validación de kg exige número de 1 a 100. La del nombre usa regex, mínimo tres letras y máximo veinte caracteres contando espacios.
3. Se acumulan ambos errores antes de mostrar un único alert. Si algo falla, la función termina sin crear una descarga ni cambiar los totales.
4. Del option se extraen **value = color** y **text = residuo**. Con los campos convertidos se crea el objeto.
5. El párrafo usa los getters del objeto y añade la fecha local con formato `dd/mm/aaaa`.
6. `actualizarKg` convierte el texto actual del acumulador y suma el número de kg. El id se obtiene con `residuo.toLowerCase()`: no hacen falta cinco condicionales.
7. `addArray` guarda el objeto y muestra la lista por consola.
8. `pintarColor` recibe el objeto y aplica la clase del residuo en minúsculas. Sustituye todo el switch original por una relación que el HTML/CSS ya proporciona.

Ejemplo: dos descargas válidas de Envases de 10 y 20 kg dejan su acumulador en **30**, dos párrafos y dos objetos en el array, el último al principio. `eguneratuKg` es el nombre equivalente de actualizarKg.

## 2024–2025 · Viajes

Es una sola web con tres páginas de trabajo. Se mantienen sus HTML y recursos originales. Las rutas reales son `bidaiak_zerrenda.html`, `bidaia_sortu.html` y `saioa_hasi.html`; hay nombres distintos en algunos textos del enunciado.

### 11. Arrays, búsqueda y precios · 3 puntos

Código: [zerrenda.js](ejercicios/2024-2025/js/zerrenda.js).

1. `destinos` recorre las veinte filas y extrae sus `h3`.
2. `destinosOrdenados` reutiliza ese array y lo ordena con `localeCompare`; no reordena la tabla.
3. `buscarDestino` normaliza consulta y títulos con minúsculas, filtra con `includes` y muestra el listado en alert. La búsqueda vacía devuelve todos, porque todos contienen `""`.
4. En `destinosPrecios` se corrige la fila inicial, el selector del párrafo de precio, la conversión numérica, el índice compartido y el retorno que faltaba.
5. Se filtra y luego se ordena por la propiedad numérica `precio`.

**Contradicción del original:** el texto pide `< 500`, pero la captura incluye un viaje de 500. `destinosPrecios()` sigue el texto y devuelve **7**; `destinosPrecios(true)` reproduce la captura y devuelve **8**. Se muestran ambos con etiquetas. No se cambian los datos para forzar el recuento.

### 12. Validar formulario de viaje · 1,5 puntos

Código: [balidazioa.js](ejercicios/2024-2025/js/balidazioa.js).

1. Título y destino: 3–50 caracteres; descripción: 3–500. La función común de longitudes evita repetir la lógica.
2. Precio: texto no vacío, número finito y rango 0–9999. Se aceptan decimales porque el requisito no exige enteros.
3. Fecha: válida, hoy o posterior. Se comparan ambas fechas a medianoche local para no rechazar el propio día actual.
4. Categoría: una de las opciones válidas del select.
5. Cada función devuelve booleano. La general ejecuta todas y después utiliza `every`, conservando todos los mensajes.

### 13. Constructor y creación del objeto · 1,5 puntos

Código: [Bidaia.js](ejercicios/2024-2025/js/Bidaia.js) y [sortuBidaia.js](ejercicios/2024-2025/js/sortuBidaia.js).

1. El constructor guarda las seis propiedades con los nombres que espera el método proporcionado: title, destination, date, price, description y category_id.
2. El controlador impide el envío y llama a `validarFormulario` antes de crear nada.
3. Si hay errores, los muestra y termina. Si es correcto, convierte el precio, instancia Bidaia y lo añade a `bidaiakArray`.

### 14. Crear la ficha con DOM · 2,5 puntos

Código: los mismos dos archivos del apartado anterior.

1. Se llama a `bidaiaSortuta` para insertar la plantilla HTML. Sus datos se escapan para que se muestren literalmente.
2. `bidaiaSortutaDOM` crea un fragmento con `h3`, cinco párrafos e imagen `images/default.jpg` con alt igual al título.
3. Se usan las auxiliares: `crearElemento` seis veces y `crearImagen` una vez.
4. El controlador sustituye la primera representación por la segunda: se ejecutan ambas versiones solicitadas y queda una sola ficha visible.

`crearElemento` devuelve un nodo con texto; `crearImagen` devuelve el nodo con sus atributos. La función principal decide dónde insertarlos.

### 15. Gestión de usuario con Web Storage · 1,5 puntos

Código: [saioa.js](ejercicios/2024-2025/js/saioa.js). La página se abre directamente desde el índice de preparación, como pide el ejercicio.

1. Se usa **sessionStorage**, de acuerdo con la sesión y el comentario del archivo original.
2. Al cargar, `actualizarSesion` comprueba la clave usuario, cambia el menú, oculta/muestra el formulario y escribe/borra el saludo.
3. Al enviar, se impide navegar, se rechaza el usuario vacío, se guarda el nombre, se muestra el alert pedido y se reutiliza `actualizarSesion`.
4. Al cerrar, se borra la clave, se restaura el formulario y se reutiliza de nuevo la misma función.

## 2025–2026 · Películas

El material original solo contiene comentarios con indicaciones. Las interpretaciones necesarias se indican en los JS; no hay puntuaciones disponibles.

### 16. Arrays y sintaxis básica

Código: [peliculas.js](ejercicios/2025-2026/01-arrays/peliculas.js).

1. `mayúsculas` usa `map` y spread para devolver copias con los títulos en mayúsculas. Conserva los objetos originales.
2. `peliculasPorCategoria` devuelve todos los objetos de la categoría exacta, ignorando mayúsculas y espacios extremos de la consulta.
3. `buscarPorTitulo` utiliza coincidencia parcial sin distinguir mayúsculas y devuelve el primer objeto o `undefined`.
4. `mediaValoraciones` suma con `reduce` y divide entre el número de películas. Para una lista vacía devuelve 0.

Se incluyen llamadas demostrativas. Con los datos originales, la media es **8,1**. Los años originales no se han alterado.

### 17. Clase Pelicula

Código: [objetos.js](ejercicios/2025-2026/02-clases/objetos.js).

1. El constructor recibe las cinco propiedades indicadas.
2. `mostrar` devuelve el formato «Matrix (1999), dirigida por Wachowski, categoría: Ciencia Ficción».
3. Se crean dos instancias, se almacenan en un array y se recorre para mostrar ambas en consola.

### 18. DOM y eventos

Código: [dom.js](ejercicios/2025-2026/03-dom/dom.js).

1. Al pulsar Mostrar se recorre el array y se crea un `li` por título.
2. El ratón cambia la propiedad `fontWeight` a negrita; al salir se restaura.
3. Se limpia la lista antes de reconstruirla para que repetir el clic no duplique películas.

### 19. Validación del formulario

Código: [validacion.js](ejercicios/2025-2026/04-formulario/validacion.js).

1. El listener de submit impide enviar la página.
2. Un recorrido aplica la misma regla 3–50 a título y director.
3. El año debe contener exactamente cuatro dígitos y estar entre 1900 y 2099. No se acepta un texto parcialmente numérico ni notación exponencial.
4. Se exige categoría no vacía.
5. Los errores o el mensaje de éxito aparecen dentro del div indicado, con saltos de línea cuando hay varios.

### 20. Usuario y localStorage

Código: [usuario.js](ejercicios/2025-2026/05-storage/usuario.js).

1. Se crea el botón de cierre desde JS porque no viene en el HTML.
2. Al cargar, `mostrarEstado` consulta **localStorage** y ajusta formulario, saludo y botón.
3. El envío se cancela y solo se guarda un nombre que no esté vacío después de trim.
4. Cerrar sesión borra la clave usuario y restaura interfaz y controles.
5. Recargar con la sesión iniciada mantiene el saludo; borrar el usuario recupera el formulario.

## Correspondencia de las versiones en euskera

| Curso | Apartados equivalentes |
| --- | --- |
| 2022–2023 | 1. Objektuak → cuenta; 2. Formularioak eta DOM → participantes; 3. Zuzenketak → formulario corregido. |
| 2023–2024 | 1. Klaseak eta objektuak → Descarga/Deskarga; 2. Arrays → añadir/mostrar; 3. Formularioa → el mismo programa integrado. |
| 2024–2025 | Ariketak 1–5 → destinos, validación, objetos, DOM y sesión de la misma web de viajes. |

Las tres versiones traducidas cubren once apartados ya contados entre los veinte. Compartir solución evita mantener otras once copias de los mismos programas.
