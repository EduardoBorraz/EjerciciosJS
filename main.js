//1) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro),Ej: mifuncion("Salas") devolverá true.
let form = document.querySelector("#formulario");
let mensaje = document.querySelector("#mensajeActividades");

const esPalindromo = (word) => {
  /* if (typeof word !== "string")
    return (mensaje.innerHTML = `<li>Upps!!La frase no debe ser un número</li>`); */

  if (word === "")
    return (mensaje.innerHTML = `<li style = "color: #f4b700;">Upps!!No ha ingresado la frase</li>`);
  if (!isNaN(word))
    return (mensaje.innerHTML = `<li style = "color: #f4b700;">Upps!!No ingrese numeros</li>`);

  word = word.toLowerCase();
  let alReves = word.split("").reverse().join("");

  return word === alReves
    ? (mensaje.innerHTML = `<li style = "color: #32a3b1">La frase: "${word}" es un palindromo</li>`)
    : (mensaje.innerHTML = `<li style = "color: red;">La frase: "${word}" no es un palindromo</li>`);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let palindromo = document.querySelector("#palindromo").value;
  esPalindromo(palindromo);
  form.reset();
  //console.log(esPalindromo(palindromo));
  //console.log(palindromo);
});

///2) Programa una función que reciba un número y evalúe si es capicúa o no(que se lee igual en un sentido que en otro),Ej: miFuncion(2002) devolverá true.

let formulario = document.querySelector("#form");
let mensajeCapicua = document.querySelector("#mensajeCapicua");

const esCapicua = (number = 0) => {
  if (!number)
    return (mensajeCapicua.innerHTML = `<li style = "color: #f4b700;">Upps!!No ha ingresado el número</li>`);
  //return console.log(number);
  number = number.toString();
  let alReves = number.split("").reverse().join("");

  return parseInt(number) === parseInt(alReves)
    ? (mensajeCapicua.innerHTML = `<li style = "color: #32a3b1">El número: "${number}" es Capicúa</li>`)
    : (mensajeCapicua.innerHTML = `<li style = "color: red;">El número: "${number}" no es Capicúa</li>`);
  /* return number === alReves
    ? `<li style = "color: #32a3b1">El número: "${number}" es Capicúa</li>`
    : `<li style = "color: red;">El número: "${number}" no es Capicúa</li>`; */
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let capicua = document.querySelector("#capicua").value;
  esCapicua(capicua);
  formulario.reset();
});
//3) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), Ej. miFuncion(5) devolverá 120.

let formularioFactorial = document.querySelector("#fomularioFactorial");
let mensajeFactorial = document.querySelector("#mensajeFactorial");

const factorial = (numero = 0) => {
  if (numero === "")
    return (mensajeFactorial.innerHTML = `<li style = "color: #f4b700;">Upps!!No ha ingresado el número a calcular</li>`);
  if (Math.sign(numero) === -1)
    return (mensajeFactorial.innerHTML = `<li style = "color: red;">!!No es posible calcular números negativos</li>`);

  let total = 1;
  for (let i = 1; i <= numero; i++) {
    total = total * i;
  }

  return (mensajeFactorial.innerHTML = `<li style = "color: #32a3b1">El factorial del numero: "${numero}" es ${total}</li>`);
};

formularioFactorial.addEventListener("submit", (e) => {
  e.preventDefault();
  let numFactorial = document.querySelector("#factorial").value;
  factorial(numFactorial);
  formularioFactorial.reset();
});

//6) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, Ej: miFuncion(0,"C") devolverá 32°F.

let formularioConvertidor = document.querySelector("#formularioConvertidor");
let mensajeConvertidor = document.querySelector("#mensajeConvertidor");

const gradoConvertidor = (grados, unidad) => {
  if (grados === "")
    return (mensajeConvertidor.innerHTML = `<li style = "color: #f4b700;">Upps!!No ha ingresado el grado a convertir</li>`);

  if (unidad === "C")
    return (mensajeConvertidor.innerHTML = `<li style = "color: #32a3b1">La conversión de: "${grados} ºC" == ${Math.round(
      grados * 1.8 + 32
    )}ºF</li>`);
  if (unidad === "F")
    return (mensajeConvertidor.innerHTML = `<li style = "color: #32a3b1">La conversión de: "${grados}ºF" == ${Math.round(
      (grados - 32) * 0.55556
    )}ºC</li>`);
};

formularioConvertidor.addEventListener("submit", (e) => {
  e.preventDefault();
  let convertidor = document.querySelector("#convertidor").value;
  let comboGrado = document.querySelector("#selectGrados");
  let selectedGrado = comboGrado.options[comboGrado.selectedIndex].value;

  console.log(convertidor);
  console.log(selectedGrado);
  gradoConvertidor(convertidor, selectedGrado);
  formularioConvertidor.reset();
});

//7) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

let formularioDescuento = document.querySelector("#formularioDescuento");
let mensajeDescuento = document.querySelector("#mensajeDescuento");

const aplicarDescuento = (precio, descuento) => {
  if (precio === "")
    return (mensajeDescuento.innerHTML = `<li style = "color: #f4b700;">Upps!!No ha ingresado el precio original</li>`);
  if (descuento === "")
    return (mensajeDescuento.innerHTML = `<li style = "color: #f4b700;">Upps!!No ha ingresado el descuento</li>`);
  if (Math.sign(precio) === -1 || Math.sign(descuento) === -1)
    return (mensajeDescuento.innerHTML = `<li style = "color: red;">!!No es posible calcular números negativos</li>`);
  if (descuento === 0)
    return (mensajeDescuento.innerHTML = `<li style = "color: red;">!!El descuento no puede ser del 0% </li>`);

  descuento = descuento / 100;
  precio = precio - precio * descuento;

  return (mensajeDescuento.innerHTML = `<li style = "color: #32a3b1">El precio total con descuento es de: $ ${precio} </li>`);
};

formularioDescuento.addEventListener("submit", (e) => {
  e.preventDefault();
  let precio = document.querySelector("#precio").value;
  let descuento = document.querySelector("#descuento").value;
  //console.log(precio);
  //console.log(descuento);
  aplicarDescuento(precio, descuento);
  formularioDescuento.reset();
});

//8) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

let formularioVocal = document.querySelector("#formularioVocal");
let mensajeVocal = document.querySelector("#mensajeVocal");

const vocalConsonante = (frase) => {
  if (frase === "")
    return (mensajeVocal.innerHTML = `<li style = "color: #f4b700;">Upps!!No ha ingresado la frase</li>`);
    if (!isNaN(frase))
    return (mensajeVocal.innerHTML = `<li style = "color: #f4b700;">Upps!!No ingrese numeros</li>`);

  let vocales = 0;
  let consonantes = 0;

  frase = frase.toLocaleLowerCase();

  for (const letra of frase) {
    if (/[aeiouáéíóúü]/.test(letra)) vocales++;
    if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
  }

  return (mensajeVocal.innerHTML = `<li style = "color: #32a3b1">Total de Vocales: ${vocales}</li>
  <li style = "color: #32a3b1">Total de consonantes: ${consonantes}</li>
  `);
};

formularioVocal.addEventListener("submit", (e) => {
  e.preventDefault();
  let vocales = document.querySelector("#vocales").value;
  //console.log(vocales);
  vocalConsonante(vocales);
  formularioVocal.reset();
});

//9) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
