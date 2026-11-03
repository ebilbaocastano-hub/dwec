# JavaScript del examen: apuntes explicados por temas

Estos apuntes reúnen lo que se utiliza en los **20 ejercicios resueltos**. Los ejemplos ya incluyen su resultado. Cada bloque es independiente, salvo que se indique lo contrario. El código completo se encuentra en `ejercicios/`; [SOLUCIONES.md](SOLUCIONES.md) explica cada examen.

## Índice

1. [Cómo leer la sintaxis](#1-cómo-leer-la-sintaxis)
2. [Variables, valores y conversiones](#2-variables-valores-y-conversiones)
3. [Condiciones y control del programa](#3-condiciones-y-control-del-programa)
4. [Funciones, callbacks y retorno](#4-funciones-callbacks-y-retorno)
5. [Texto: limpiar, buscar y construir mensajes](#5-texto-limpiar-buscar-y-construir-mensajes)
6. [Arrays y elección de métodos](#6-arrays-y-elección-de-métodos)
7. [Objetos, clases y encapsulación](#7-objetos-clases-y-encapsulación)
8. [HTML, carga del script y selección del DOM](#8-html-carga-del-script-y-selección-del-dom)
9. [Crear, modificar y borrar elementos](#9-crear-modificar-y-borrar-elementos)
10. [Eventos y formularios](#10-eventos-y-formularios)
11. [Validación y expresiones regulares](#11-validación-y-expresiones-regulares)
12. [Números aleatorios, fechas y temporizadores](#12-números-aleatorios-fechas-y-temporizadores)
13. [Storage y estado de la interfaz](#13-storage-y-estado-de-la-interfaz)
14. [Conectar todo y localizar errores](#14-conectar-todo-y-localizar-errores)
15. [Tabla de consulta rápida](#15-tabla-de-consulta-rápida)

## 1. Cómo leer la sintaxis

```js
const aprobados = participantes.filter(persona => persona.puntos >= 5);
```

- `const aprobados = ...` declara una variable y guarda en ella un resultado.
- `participantes` es un array de objetos que ya tenemos.
- El punto accede a una propiedad o método: `persona.puntos`, `participantes.filter`.
- `filter(...)` ejecuta el método y recibe una función como argumento.
- `persona => ...` es esa función: recibe cada objeto y responde si tiene al menos cinco puntos.
- El `;` termina la instrucción. Los saltos de línea no sustituyen siempre al punto y coma.

| Símbolo | Para qué sirve aquí |
| --- | --- |
| `()` | Llamar una función; definir parámetros; agrupar una expresión. |
| `{}` | Cuerpo de función/clase/condición, o un objeto literal según el contexto. |
| `[]` | Crear un array, acceder por índice o usar una clave guardada en una variable. |
| `.` | Acceder a una propiedad o método. |
| `,` | Separar argumentos, parámetros o elementos. |
| `//` / `/* ... */` | Comentario de una línea / varias líneas: no se ejecuta. |

**Propiedad y método:** `lista.length` es un dato, sin paréntesis. `lista.push(x)` es una acción, con paréntesis. `cuenta.cantidad` usa un getter; `cuenta.mostrar()` ejecuta un método.

## 2. Variables, valores y conversiones

`const` se usa si la variable no se reasigna; `let`, si cambia. El ámbito de ambas es el bloque entre llaves. Leerlas antes de inicializarlas da error.

```js
const cuentas = [];
cuentas.push("Ane"); // Permitido: cambia el contenido del array.
// cuentas = [];    // No permitido: reasigna una const.
let total = 0;
total += 5;          // total = total + 5; ahora vale 5.
```

Tipos relevantes: string (`"Ane"`), number (`7.5`), boolean (`true`/`false`), objeto (`{ nombre: "Ane" }`) y valores de ausencia (`null`, `undefined`). Los arrays y las fechas son objetos. Una función también es un valor que se puede guardar o pasar a otra función.

**Lo que lees de un input con `.value` es texto**, aunque sea `type="number"`:

```js
const texto = "20";
texto + 5;                  // "205": concatena.
Number(texto) + 5;          // 25: suma números.
Number("");                // 0: por eso hay que comprobar primero el vacío.
Number("hola");            // NaN: no representa un número válido.
Number.isFinite(20);        // true.
Number.isFinite(NaN);       // false.
Number.isInteger(2.5);      // false.
Number.parseFloat("250.00 €"); // 250: lee el prefijo numérico.
```

`Number` exige que todo el texto tenga sentido numérico; `parseFloat` permite un sufijo. Antes de `parseFloat("Prezioa: 250.00 €")` hay que quitar la etiqueta: empieza por letras y daría `NaN`.

`NaN` se comprueba con `Number.isNaN(valor)`, no con `valor === NaN`. `toFixed(2)` **devuelve texto** con dos decimales; se usa al presentar el saldo, no para sustituir su valor numérico.

Para convertir a booleano existe `Boolean(valor)`. Son falsy, entre otros, `""`, `0`, `null`, `undefined`, `NaN` y `false`. Un objeto, `[]` o `"false"` son truthy. En Storage es relevante que `null` significa «no existe esa clave».

## 3. Condiciones y control del programa

| Operador | Significado |
| --- | --- |
| `=` | Asigna: `vida = 0`. |
| `===` / `!==` | Igual / distinto comparando valor y tipo. |
| `<`, `<=`, `>`, `>=` | Comparaciones, con o sin igualdad. |
| `&&` | Exige ambas condiciones. |
| `\|\|` | Basta con una condición. |
| `!` | Niega el resultado. |
| `condicion ? a : b` | Elige `a` si se cumple; `b` si no. |

```js
const nota = 5;
if (nota >= 5) {
    console.log("Aprobado");
} else {
    console.log("Suspenso");
}
const mensaje = nota >= 5 ? "Aprobado" : "Suspenso";
```

**Cortocircuito:** con `&&`, si la izquierda es falsa, no se evalúa la derecha; con `||`, si la izquierda es verdadera, tampoco. Por eso `usuario && usuario.nombre` evita leer una propiedad de `null`. Estos operadores pueden devolver valores, no solo booleanos: `nombre || "pendiente"` elige el segundo cuando el primero es falsy.

En las validaciones se usa mucho **salir pronto**:

```js
function procesar(correcto) {
    if (!correcto) return false; // Termina esta función.
    console.log("Continuamos");
    return true;
}
```

`return` no detiene toda la página: termina la función actual. Para mostrar todos los fallos de varios campos, primero se revisan todos y después se decide si continuar.

## 4. Funciones, callbacks y retorno

Una función agrupa instrucciones reutilizables. Los **parámetros** son los nombres que recibe; los **argumentos**, los valores concretos de cada llamada.

```js
function sumar(a, b = 0) { return a + b; }
sumar(3, 4); // 7.
sumar(3);    // 3: b tiene valor por defecto 0.

const doble = function (n) { return n * 2; }; // Expresión de función.
const triple = n => n * 3;                   // Flecha con retorno implícito.
const cuadruple = n => { return n * 4; };    // Con llaves, hace falta return.
```

`return` entrega el resultado a quien llamó. `console.log` muestra algo en la consola, pero **no lo devuelve**. Una función sin `return` devuelve `undefined`.

Un **callback** es una función que otra recibe para llamarla. `map` la ejecuta durante su recorrido; un listener la ejecuta cuando ocurre el evento. «Callback» no significa necesariamente que haya un retraso.

```js
const valores = [1, 2, 3];
valores.map(doble); // [2, 4, 6]. Pasamos la función; no escribimos doble().
```

`addEventListener("click", crear)` entrega la función. Escribir `crear()` la ejecutaría en ese momento y entregaría su resultado en lugar del manejador.

Una flecha que devuelve un objeto necesita agruparlo: `n => ({ numero: n })`. Sin paréntesis, `{}` se interpreta como cuerpo de la función.

**Separar responsabilidades:** una función valida, otra crea el objeto y otra lo muestra. Es más fácil seguir el flujo y reutilizar reglas. En 2024, `crearElemento(etiqueta, texto)` evita repetir la creación de seis nodos.

## 5. Texto: limpiar, buscar y construir mensajes

Los strings son inmutables: los métodos producen resultados nuevos.

| Herramienta | Ejemplo y utilidad |
| --- | --- |
| `.length` | `"Ane".length` → `3`. Comprueba longitudes. |
| `.trim()` | `"  Ane ".trim()` → `"Ane"`. Descarta espacios extremos. |
| `.toLowerCase()` | `"ANE".toLowerCase()` → `"ane"`. Unifica búsquedas o construye ids/clases. |
| `.toUpperCase()` | `"Ane".toUpperCase()` → `"ANE"`. Transforma títulos en 2025. |
| `.includes(texto)` | `"Matrix".toLowerCase().includes("mat")` → `true`. Coincidencia parcial. |
| `.replace(a, b)` | Sustituye la primera coincidencia: quita una etiqueta del precio. |
| `.replaceAll(a, b)` | Sustituye todas: elimina espacios al contar letras o escapa caracteres HTML. |
| `.padStart(2, "0")` | `"3".padStart(2,"0")` → `"03"`. Día/mes con dos dígitos. |
| `.normalize("NFD")` | Descompone caracteres Unicode; permite coincidir con el nombre original de España.png. |

Para buscar ignorando mayúsculas, se normalizan **los dos lados**:

```js
const titulo = "Familia Abentura Nafarroan";
const consulta = " ABENTURA ";
titulo.toLowerCase().includes(consulta.trim().toLowerCase()); // true.
```

`+` concatena textos. Las **plantillas literales** usan backticks y `${expresion}`:

```js
const nombre = "Ane", puntos = 7;
const mensaje = `${nombre} - ${puntos} puntos`; // "Ane - 7 puntos".
```

Las plantillas también conservan saltos de línea. `errores.join("\n")` convierte un array de mensajes en una única cadena con una línea por error. En un elemento HTML, `style.whiteSpace = "pre-line"` hace visibles esos saltos.

Al producir HTML como texto, los caracteres de los datos no deben convertirse en etiquetas: `&`, `<`, `>`, `"` y `'` se sustituyen por entidades. En `escaparHTML` se cambia primero `&` para no volver a escapar lo que acabamos de generar. Con `textContent` esa interpretación HTML no sucede.

## 6. Arrays y elección de métodos

Un array contiene varios elementos en orden. Los índices comienzan en 0; el último índice es `length - 1`.

```js
const nombres = ["Ane", "Jon"];
nombres[0];       // "Ane".
nombres.length;   // 2.
nombres.push("Irati"); // Añade al final: ["Ane", "Jon", "Irati"].
nombres.unshift("Leire"); // Añade al principio.
```

### Recorrer cuando necesitas el índice

```js
const lista = [1, 2, 9];
for (let i = 0; i < lista.length; i++) {
    const esperado = i + 1;
    if (lista[i] !== esperado) console.log(`Error en ${i}: se esperaba ${esperado}`);
}
// Error en 2: se esperaba 3.
```

`i++` aumenta el contador después de cada vuelta. El límite es `< length`, porque `lista[length]` ya está fuera del array. No se usa `break` si el ejercicio pide informar de todos los errores.

### Elegir según el resultado que necesitas

Estos ejemplos comparten el siguiente array:

```js
const peliculas = [
    { titulo: "Matrix", categoria: "Ciencia Ficción", valoracion: 9 },
    { titulo: "El Padrino", categoria: "Drama", valoracion: 8 }
];
```

| Método | Para qué sirve | Ejemplo |
| --- | --- | --- |
| `forEach` | Hacer una acción por elemento; no produce un array nuevo. | `peliculas.forEach(p => console.log(p.titulo))` |
| `map` | Transformar cada elemento en otro valor, con igual número de elementos. | `peliculas.map(p => p.titulo)` → dos títulos. |
| `filter` | Seleccionar todos los que cumplen. | `peliculas.filter(p => p.valoracion >= 9)` → array con Matrix. |
| `find` | Obtener el primer elemento que cumple. | `peliculas.find(p => p.titulo === "Matrix")` → objeto Matrix. |
| `reduce` | Acumular un resultado a partir de todos los elementos. | `peliculas.reduce((suma,p) => suma + p.valoracion, 0)` → `17`. |
| `every` | Comprobar que todos cumplen. | `[true, true, false].every(x => x)` → `false`. |
| `includes` | Comprobar si un valor aparece. | `["1", "2"].includes("2")` → `true`. |

`find` devuelve `undefined` si no encuentra nada. Antes de usar su resultado, compruébalo. `filter` devuelve un array, que puede estar vacío. `forEach` devuelve `undefined`: no sirve para asignar el array transformado.

### Cómo funciona reduce y cómo calcular una media

```js
const notas = [8.5, 7.8, 8];
const total = notas.reduce((suma, nota) => suma + nota, 0);
const media = notas.length > 0 ? total / notas.length : 0;
```

| Vuelta | Acumulador antes | Nota | Acumulador después |
| --- | ---: | ---: | ---: |
| Primera | 0 | 8.5 | 8.5 |
| Segunda | 8.5 | 7.8 | 16.3 |
| Tercera | 16.3 | 8 | 24.3 |

El último argumento de `reduce`, `0`, es el acumulador inicial. El resultado del callback pasa a la siguiente vuelta. La media es `24.3 / 3 = 8.1`, con la aproximación binaria habitual de los números JS. La condición evita dividir entre cero si no hay elementos.

### Ordenar correctamente

```js
const numeros = [100, 20, 3];
numeros.sort((a, b) => a - b); // [3, 20, 100].
const textos = ["Jon", "Ane"];
textos.sort((a, b) => a.localeCompare(b)); // ["Ane", "Jon"].
const porNota = [...peliculas].sort((a, b) => b.valoracion - a.valoracion);
```

El comparador devuelve negativo si `a` debe ir antes, positivo si debe ir después y cero si son equivalentes para ordenar. `a - b` es ascendente; `b - a`, descendente. Sin comparador, los números se comparan como texto.

**`sort` modifica su array.** Para conservarlo, usa una copia con spread. `filter` devuelve un array nuevo, así que ordenar ese resultado no cambia la lista de partida.

### Copias de objetos y arrays

`[...lista]` copia los elementos a otro array. `{...objeto, titulo: "NUEVO"}` copia las propiedades y sustituye `titulo`. Son copias **superficiales**: los objetos anidados se comparten. En las películas de 2025, cuyas propiedades son valores simples, sirve para devolver objetos con títulos en mayúsculas sin cambiar los originales.

## 7. Objetos, clases y encapsulación

Un objeto agrupa datos y operaciones. Una clase define cómo crear objetos similares:

```js
class Persona {
    constructor(nombre) { this._nombre = nombre; }
    get nombre() { return this._nombre; }
    set nombre(valor) { this._nombre = valor; }
    mostrar() { return `Hola, ${this.nombre}`; }
}
const persona = new Persona("Ane");
persona.nombre = "Irati";       // Ejecuta el setter.
console.log(persona.nombre);    // Getter: "Irati".
console.log(persona.mostrar()); // Método: "Hola, Irati".
```

- `new` crea una instancia y ejecuta el `constructor` con los argumentos indicados.
- `this` se refiere a esa instancia en estas llamadas.
- En una clase, los métodos se escriben sin `function`.
- Un getter se lee sin `()`; un setter recibe la asignación; un método se llama con `()`.
- `get nombre() { return this.nombre; }` se llamaría a sí mismo indefinidamente. Por eso se guarda el dato en `_nombre`.
- `_` solo es una convención: esa propiedad sigue siendo pública. `#cantidad`, en cambio, es un campo privado declarado dentro de la clase.

### Mantener reglas del objeto

No basta con copiar parámetros. El constructor y los métodos deben preservar lo que exige el problema:

- **Jugador:** sin pistola, cero balas; al quitar la pistola, se ponen a cero también.
- **Cuenta:** no aceptar ingresos negativos ni retiradas que superen el saldo. La cantidad privada solo cambia en esos métodos.
- **Descarga:** agrupar color, residuo, kg y nombre para usar sus getters al generar la salida.

En `Cuenta`, el setter de `cantidad` existe pero rechaza una asignación directa con un error. Así se respeta que solo ingreso/retirada puedan cambiar el saldo. Un error se lanza con `throw new Error("mensaje")` y puede manejarse con `try/catch`:

```js
try {
    throw new Error("Usa ingresar o retirar");
} catch (error) {
    console.log(error.message); // Muestra la explicación sin interrumpir lo posterior.
}
```

El array de cuentas/jugadores almacena los **objetos**, no sus descripciones. `cuenta.mostrar()` o `jugador.toString()` transforman temporalmente sus datos en una cadena para enseñarlos.

## 8. HTML, carga del script y selección del DOM

El DOM es el árbol de elementos que representa la página. Antes de leer o modificar un elemento, hay que seleccionarlo **cuando ya existe**.

```html
<script src="script.js" defer></script>
```

`defer` descarga el script sin bloquear el análisis del HTML y lo ejecuta cuando el documento ya está construido. Los scripts clásicos con defer mantienen el orden entre ellos.

Cuando el HTML original tiene el script en el `head` sin defer y no se permite modificarlo:

```js
document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("enviar");
    boton.addEventListener("click", () => console.log("Clic"));
});
```

No se modifica HTML: se retrasa la selección desde el JS. `load` esperaría además recursos como imágenes; `DOMContentLoaded` es suficiente para seleccionar los controles.

| Selección | Devuelve |
| --- | --- |
| `getElementById("nombre")` | Elemento por id, sin `#`; o `null` si no está. |
| `querySelector(".informacion")` | Primer elemento por selector CSS. |
| `querySelectorAll("#tabla tr")` | NodeList estática con todos los resultados; admite `forEach`. |
| `getElementsByClassName("informacion")` | Colección de elementos, no un único elemento. |

Selectores usados: `#id`, `.clase`, `tr` (etiqueta), `#tabla tr` (descendientes), `input[type="button"]` (atributo). **`p:nth-of-type(3)`** elige el tercer párrafo; `p:nth-child(3)` exige que el párrafo sea el tercer hijo entre todas las etiquetas. Es el fallo del precio de 2024: el `h3` también contaba como hijo.

### Los elementos de formulario que aparecen

- `input` es un campo; `type="text"`, `"number"`, `"password"`, `"url"` o `"date"` determina su comportamiento.
- `textarea` admite varias líneas; `select` contiene opciones `option`.
- `label` identifica el campo; `id` permite encontrarlo desde JS.
- `button type="submit"` envía un formulario; `type="button"` solo dispara su clic.
- Dentro de un formulario, un `button` sin tipo suele actuar como submit.
- Una tabla tiene filas `tr`, cabeceras `th` y celdas `td`. El navegador puede introducir un `tbody` automáticamente.

El **value y el texto de una opción son distintos**:

```html
<select id="residuo"><option value="amarillo">Envases</option></select>
```

```js
const select = document.getElementById("residuo");
const opcion = select.options[select.selectedIndex];
opcion.value; // "amarillo".
opcion.text;  // "Envases".
```

En el punto limpio, `Envases`.toLowerCase() produce `envases`, que coincide con el id del acumulador y la clase CSS. Esa relación sustituye varios `if/switch`.

## 9. Crear, modificar y borrar elementos

```js
const lista = document.querySelector("ul");
const li = document.createElement("li"); // Crea en memoria.
li.textContent = "Ane";
lista.append(li);                        // Inserta: ya aparece en la página.
```

| Operación | Efecto |
| --- | --- |
| `elemento.textContent = texto` | Sustituye el texto, sin interpretar etiquetas. |
| `elemento.innerHTML = html` | Analiza el texto como HTML y sustituye los hijos. |
| `elemento.append(nodo, "texto")` | Añade al final uno o varios nodos/textos. |
| `elemento.replaceChildren(...)` | Sustituye todos sus hijos; sin argumentos, los borra. |
| `elemento.remove()` | Elimina ese nodo del documento. |
| `imagen.src`, `.alt`; `enlace.href` | Asignan dirección, texto alternativo y destino. |
| `elemento.classList.add("envases")` | Aplica una clase definida en el CSS. |
| `elemento.style.backgroundColor` | Estilo de fondo directo; `""` elimina ese estilo en línea. |
| `elemento.style.fontWeight = "bold"` | Pone el texto en negrita. |
| `elemento.hidden = true` | Oculta el elemento; `false` lo vuelve a mostrar. |

`style.display = "none"` oculta; `"block"` muestra como bloque. Para revertir solo un estilo en línea, se asigna `""` en vez de inventar el color que había antes.

**Un nodo tiene un solo sitio en el DOM:** volver a insertarlo lo mueve, no lo duplica. En las noticias se crea un artículo nuevo por envío, para conservar los anteriores. En la lista de películas se vacía la lista antes de reconstruirla, para evitar duplicados al repetir el clic.

### Fragmentos y funciones auxiliares

`document.createDocumentFragment()` agrupa nodos en memoria. Al insertarlo, se insertan sus hijos, sin una etiqueta contenedora adicional. La ficha de viajes devuelve un fragmento con un `h3`, cinco `p` y una imagen.

```js
function crearElemento(etiqueta, texto) {
    const nodo = document.createElement(etiqueta);
    nodo.textContent = texto;
    return nodo;
}
```

Esta función **devuelve el nodo**, no lo inserta. La función que construye la ficha decide dónde añadirlo. Es una forma sencilla de reutilizar código sin acoplarlo a un contenedor concreto.

## 10. Eventos y formularios

```js
function manejar(e) {
    console.log(e.type);
    console.log(e.target);        // Dónde se originó el evento.
    console.log(e.currentTarget); // Dónde registramos este listener.
}
document.querySelector("button").addEventListener("click", manejar);
```

| Evento | Uso en las soluciones |
| --- | --- |
| `click` | Botones de mostrar, crear, borrar o cerrar sesión. |
| `submit` | Procesar un formulario con botón o Enter. |
| `focus` | Vaciar los inputs de 2021 al entrar. |
| `blur` | Validar contraseña/campos al abandonarlos. |
| `change` | Actualizar información al elegir otra actividad. |
| `mouseover` / `mouseout` | Poner/quitar negrita en las películas. |
| `mouseenter` / `mouseleave` | Entrar/salir de una fila sin confundir movimientos entre sus hijos. |
| `error` | Quitar la imagen de un país si el archivo no existe. |

`e.preventDefault()` impide la acción predeterminada. En un submit, evita navegar o enviar el formulario. Se ejecuta antes de validar para que tampoco se envíe cuando los datos son incorrectos.

Los listeners se registran una vez al inicializar. Registrarlos cada vez que se valida puede acumular manejadores. En los nodos creados dinámicamente se añaden sus listeners cuando se crean.

**Reset:** `formulario.reset()` devuelve los controles a los valores iniciales del HTML. No limpia mensajes ni oculta zonas que hayas mostrado con JS. El ejercicio de correcciones necesita ambas cosas: reset de campos y restauración de la interfaz.

## 11. Validación y expresiones regulares

El patrón general es: **leer → comprobar → reunir errores → devolver un resultado → decidir si continuar**.

```js
function validarTexto(texto) {
    const limpio = texto.trim();
    return limpio.length >= 3 && limpio.length <= 50;
}
validarTexto(" Ane "); // true.
validarTexto("  ");    // false.
```

No se usa `if (numero)` para comprobar si está vacío cuando **0 es válido**. En los precios y puntuaciones se separa la comprobación del string vacío de la conversión a número.

### Reunir todos los errores

```js
const errores = [];
const nombre = "", kg = 200;
if (nombre.trim() === "") errores.push("Falta el nombre");
if (kg < 1 || kg > 100) errores.push("Kg fuera de rango");
console.log(errores.join("\n")); // Muestra ambos mensajes.
```

Si escribieras `errores = "..."` en cada condición, el último fallo sustituiría al anterior. Si hicieras `return` en cada fallo, los siguientes campos no se revisarían.

**Ojo con `&&` y `every`:** para ejecutar todas las validaciones y recoger todos sus mensajes, primero se construye `[validarTitulo(), validarPrecio(), ...]`. Después se aplica `.every(resultado => resultado)`. Aunque `every` se detenga al primer false, todas las funciones ya se han ejecutado al crear el array.

### Qué significa una regex

Una expresión regular es un patrón de texto entre `/.../`. `.test(cadena)` devuelve si coincide.

| Parte | Significado |
| --- | --- |
| `^` y `$` | Inicio y fin: exigir que coincida toda la cadena. |
| `[A-Za-z]` | Un carácter entre esos rangos; no incluye acentos por sí solo. |
| `[0-9]` o `\d` | Un dígito decimal. |
| Un espacio dentro de `[...]` | Permite el espacio literal. |
| `+` | Una o más repeticiones. |
| `{4}` / `{3,20}` | Exactamente cuatro / entre tres y veinte repeticiones. |
| `!patron.test(texto)` | Se cumple cuando el texto NO sigue el patrón. |

```js
/^[A-Za-zÁÉÍÓÚÜáéíóúüÑñ ]+$/.test("Ane Pérez"); // true.
/^[A-Za-zÁÉÍÓÚÜáéíóúüÑñ ]+$/.test("Ane2");     // false.
/^\d{4}$/.test("2026");                       // true.
/^\d{4}$/.test("2e3");                        // false.
/[A-Z]/.test("Clave123");                     // true: contiene mayúscula.
/[a-z]/.test("Clave123");                     // true: contiene minúscula.
/[0-9]/.test("Clave123");                     // true: contiene número.
```

Las tres últimas regex no llevan anclas porque buscan **algún** carácter de ese tipo dentro de la contraseña. No exigen que toda la contraseña sean mayúsculas o números.

Para el año de películas se combinan dos reglas: cuatro dígitos y número entre 1900 y 2099. La regex no sustituye a la comprobación del rango. Para nombres con mínimo de letras, se comprueba el patrón y además se cuentan las letras quitando los espacios.

### Validación HTML y JavaScript

`required` exige valor; `min/max` limitan números o fechas; `type="url"` comprueba el formato de una URL. `reportValidity()` devuelve booleano y muestra el aviso nativo cuando no es válido.

Con validación automática, un campo inválido puede bloquear el submit antes de ejecutar su listener. En los originales que necesitan mostrar todos los mensajes propios, se establece `formulario.noValidate = true` **desde JS**, sin editar el HTML. Eso desactiva la comprobación automática al enviar, pero no escribe nuestras reglas: hay que implementarlas.

La validación en navegador sirve para esta aplicación local. Cuando una aplicación envía datos a un servidor, también tiene que validarlos allí.

## 12. Números aleatorios, fechas y temporizadores

### Elegir un índice al azar

`Math.random()` produce un número desde 0 incluido hasta 1 excluido. `Math.floor` redondea hacia abajo.

```js
const lista = ["Ane", "Jon", "Irati"];
const indice = Math.floor(Math.random() * lista.length); // 0, 1 o 2.
const elegida = lista[indice];
```

No se suma 1: el primer índice es 0. Antes de elegir, se comprueba que la lista no esté vacía. Es la selección de un jugador de la ruleta, cuyo objeto se modifica poniendo vidas a 0.

### Obtener y comparar fechas

```js
const ahora = new Date();
const hoy = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate());
const elegida = new Date("2026-11-10T00:00:00");
elegida >= hoy; // Compara fechas; el resultado depende del día actual.
```

- `new Date()` obtiene la fecha y hora actuales.
- `getFullYear`, `getMonth` y `getDate` obtienen año, mes y día del mes.
- **El mes numérico empieza en 0.** Para presentarlo se suma 1.
- `getTime()` devuelve los milisegundos de la fecha; un Date inválido produce `NaN`.
- `toLocaleDateString("es-ES")` produce una fecha legible según el formato local.

Para validar «hoy o posterior», ambas fechas se comparan a medianoche local. Comparar el día de hoy a las 00:00 con la hora actual lo rechazaría por error. El input date da `aaaa-mm-dd`; añadir `T00:00:00` explicita la hora local. No se usa `toISOString()` para obtener el día local: trabaja en UTC.

En el punto limpio el formato con dos dígitos se construye así:

```js
const fecha = new Date(2026, 10, 3);
const dia = String(fecha.getDate()).padStart(2, "0");
const mes = String(fecha.getMonth() + 1).padStart(2, "0");
`${dia}/${mes}/${fecha.getFullYear()}`; // "03/11/2026".
```

### Programar y cancelar un aviso

```js
const id = setTimeout(() => console.log("Aviso"), 10000);
clearTimeout(id); // Lo cancela antes de que se ejecute.
```

El tiempo se expresa en milisegundos: 10000 son diez segundos. `setTimeout` devuelve un identificador; `clearTimeout` necesita ese identificador, no la función. Solo programa una ejecución; no hace falta un intervalo repetido. El callback se ejecutará cuando haya transcurrido el tiempo y JavaScript pueda atenderlo.

## 13. Storage y estado de la interfaz

| Almacenamiento | Duración que interesa al ejercicio |
| --- | --- |
| `sessionStorage` | Sesión de la pestaña; sobrevive a recargarla. Usado en viajes de 2024. |
| `localStorage` | Persiste entre sesiones hasta borrarse. Pedido en películas de 2025. |

Ambos almacenan pares clave–valor como **texto** y están separados por origen: protocolo, host y puerto. Usar HTTP local facilita comprobarlos de forma consistente.

```js
localStorage.setItem("usuario", "Ane"); // Guardar.
const usuario = localStorage.getItem("usuario"); // "Ane"; null si no existiera.
localStorage.removeItem("usuario"); // Borrar solo esa clave.
```

El nombre ya es un string: no necesita JSON. Si se quisiera guardar un objeto o array, habría que convertirlo con `JSON.stringify` y recuperarlo con `JSON.parse`; estos ejercicios no lo necesitan.

**Guardar el dato y mostrarlo son acciones distintas.** Por eso se reutiliza una función `mostrarEstado` o `actualizarSesion`:

1. Leer Storage.
2. Mostrar/ocultar formulario.
3. Actualizar saludo y botón de cierre.

Esa función se ejecuta al cargar la página y después de guardar o borrar. Así el estado de la interfaz coincide con el guardado incluso después de recargar. Al cerrar se utiliza `removeItem`, no `clear`, para conservar las demás claves del mismo origen.

## 14. Conectar todo y localizar errores

Este es el recorrido completo del punto limpio y del formulario de viajes:

```text
DOMContentLoaded
  → registrar listener de submit
  → preventDefault
  → validar todos los campos
  → si hay errores: mostrarlos y terminar la función
  → crear objeto con los valores correctos
  → añadirlo al array
  → generar la representación DOM
  → actualizar acumuladores, clases y mensajes que correspondan
```

El objeto funciona como fuente de datos después de crearlo. Volver a leer el formulario al presentar el resultado puede dar información distinta si el formulario se limpia o cambia.

Errores del histórico y su explicación:

| Error | Por qué falla / corrección |
| --- | --- |
| `inicio` definida pero sin llamada | Sus listeners nunca se registran; se conecta a DOMContentLoaded. |
| `getElementsByClassName(...).style` | Devuelve una colección; seleccionar un elemento o recorrerla. |
| `getElementById(formError)` | Usa una variable; el id literal debe ser `"formError"`. |
| `input.valueMissing()` | No existe ese método; leer el valor o su `validity.valueMissing`. |
| `patron.test(input)` | Está probando un elemento, no el texto de `input.value`. |
| `if (patron.test(texto))` mostrando error | Lógica invertida: el error corresponde a `!patron.test(texto)`. |
| `opcion = riesgo` | Asigna y usa un identificador; comparar con `opcion === "3"` según el HTML real. |
| `edadPersona < 18` | Compara el elemento; se necesita `Number(edadPersona.value)`. |
| `parrafo.value = mensaje` | Un párrafo se modifica con `textContent`. |
| Mostrar zona inferior siempre | Hay que usar el booleano devuelto por validar. |
| Empezar en la segunda fila sin cabecera | Pierde el primer viaje. |
| Ordenar precios como texto | Convertirlos a Number y usar comparador numérico. |
| Reutilizar `var i` en bucles anidados | Un bucle modifica el índice del otro; usar recorridos separados y variables de bloque. |
| Reset solo de controles | También hay que limpiar mensajes y recuperar visibilidad inicial. |

En consola, `console.log` muestra resultados; `console.error` destaca un error. Si una selección devuelve `null`, revisa el id y el momento de ejecución. Una sintaxis válida no garantiza una lógica correcta: los dos programas de correcciones lo demuestran.

## 15. Tabla de consulta rápida

| Si el apartado dice… | Herramienta |
| --- | --- |
| «Todos los errores de posición» | `for` con índice, comparar con `i + 1`, acumular errores. |
| «Añadir al principio» | `unshift`. |
| «Un nuevo array con…» | `map` para transformar; `filter` para seleccionar. |
| «Primer objeto que coincida» | `find`; contemplar `undefined`. |
| «Media» | `reduce` con inicial 0 y división entre `length`. |
| «Ordenar por precio» | Convertir precios a número y `sort((a,b) => a.precio - b.precio)`. |
| «Sin distinguir mayúsculas» | `toLowerCase()` en dato y consulta. |
| «No enviar el formulario» | Listener de `submit` con `preventDefault`. |
| «Error al salir del campo» | `blur`. |
| «Dato obligatorio que puede valer 0» | Comprobar string vacío antes de convertir. |
| «Solo letras y espacios» | Regex anclada y `test` sobre el texto. |
| «Constructor, get y set» | Clase, `this`, getters/setters y almacenamiento diferenciado. |
| «Crear nodos del DOM» | `createElement`, propiedades, `append`; no sustituirlo todo por innerHTML. |
| «Borrar última fila sin perder cabecera» | Seleccionar filas y borrar la última solo si hay más de una. |
| «Color según el residuo» | Aprovechar el nombre común del dato, id y clase CSS. |
| «Fecha no anterior a hoy» | Comparar fechas locales a medianoche. |
| «Después de diez segundos y cancelable» | Guardar id de `setTimeout` y usar `clearTimeout`. |
| «Recordar usuario y restaurar al cerrar» | Storage + una función común de actualización de interfaz. |
