'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var arreglo = [1];
  var numero = [2, 3, 5, 7, 11];

  for(let i = 0; i <= numero.length; i++) {
    var resto = numero[i]
    while(Number.isInteger(num / resto)) {
      arreglo.push(resto)
      num = num / resto
    } 
  } return arreglo.sort(function(a, b){a - b});
} 

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for (var i = 0; i < array.length; ++i) {
    for (var j = i + 1; j < array.length; ++j) {
      
      if (array[i] > array[j]) {
        var aux = array[i];
        array[i] = array[j];
        array[j] = aux;
      }
    }
  } return array;

}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  var l = array.length;
  var j; 
  var temp;
  
  for (var i = 1; i < l; i++) {
    j = i;
    temp = array[i];  
    while(j > 0 && array[ j - 1 ] > temp) {
      array[ j ] = array[ j - 1 ];
      j--;
    } array[ j ] = temp;
  } return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(var i = 1; i < array.length; ++i) {
    var j = i - 1;
    var aux = array[i];

    while (j >= 0 && array[j] > aux) {
      array[j + 1] = array[j];
      --j
    } array[j + 1] = aux;

  } return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
