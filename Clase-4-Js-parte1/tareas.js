// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return  array[0];
  
}
devolverPrimerElemento([1, 2, 3, 4, 5]);


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return  array[array.length - 1];
  
}
devolverUltimoElemento([1, 2, 3, 4, 5]);

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return  array.length;
}
obtenerLargoDelArray([1, 2, 3, 4, 5,7,9,0]);

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    array[i] += 1;
    
  }
  return array;
  
}
incrementarPorUno([1, 2, 3, 4, 5]);
function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;

}
agregarItemAlFinalDelArray([1, 2, 3, 4, 5],6);



function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}
agregarItemAlComienzoDelArray([1, 2, 3, 4, 5],6);


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(' ');
  
}
dePalabrasAFrase(['Hola', 'mundo']);


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  return array.includes(elemento);
}
arrayContiene([1, 2, 3, 4, 5, 6, 7, 8, 9], 10);

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
}
return suma;

}
agregarNumeros([1, 2, 3, 4, 5, 6, 7]);

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let suma = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    suma += resultadosTest[i];
}
return suma / resultadosTest.length;
}
promedioResultadosTest([1, 2, 3, 4, 5, 6, 7 ]);


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  return (Math.max(...numeros));
  
}
numeroMasGrande([1, 2, 3, 4, 5, 6, ]);

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí:
  return (arreglo.filter(i => i > 18));
  //nota en el validador dice > a 18
  
}
cuentoElementos([1, 2, 30, 4, 5, 60]);

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí:
  switch (numeroDeDia) {
  
    case 1 :
      return "Es fin de semana";
      break;
    case 2 :
      return "Es dia Laboral";
      break;
    case 3 :
      return "Es dia Laboral";
      break;
    case 4 :
      return "Es dia Laboral";
      break;
    case 5 :
      return "Es dia Laboral";
      break;
    case 6 :
      return "Es dia Laboral";
      break;
    case 7 :
      return "Es fin de semana";
      break;
}
} 
diaDeLaSemana(1);


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
   return (n.toString()[0] === '9');
}
empiezaConNueve(3);
function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí:
  return arreglo.every(i => i === arreglo[0]);
  
} 
todosIguales([1, 2, 3, 4, 5, 6]);

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let nuevoArray = [];
  
  for (let i = 0; i < array.length; i++) {
         if (array[i] === "Enero" && array[i] === "Marzo" && array[i] === "Noviembre"){
               nuevoArray.push(array[i]);
              
         } else {
               return "No se encontraron los meses pedidos";
         }     
      } 
      return nuevoArray;              
}
mesesDelAño(["Enero", "Febrero", "Noviembre"]);
function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let nuevoArray = [];
  
  for (let i = 0; i < array.length; i++) {
      if (array[i] > 100) {
         nuevoArray.push(array[i]);
         
      }
  }
  return nuevoArray;
}
mayorACien([102,180]);
// No modificar nada debajo de esta línea, de lo contrario no correrán los test.
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
};
