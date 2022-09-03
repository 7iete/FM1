'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {
    return array
  }
  
  var menores = [];
  var mayores = [];
  var a = [];
  var p = array.pop();
  var c = array.length;

  for (var i = 0; i < c; i++) {
    if (array[i] > p) {
      mayores.push(array[i])
    }
    else {
      menores.push(array[i])
    }
  } 
    
  return a.concat(quickSort(menores), p, quickSort(mayores))
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  return array.merge();
}

Array.prototype.merge = function() {
  if(this.length <= 1) {
    return this;
  }
  
  var a = Math.floor(this.length / 2);
  var b = this.slice(0, a).merge();
  var c = this.slice(a).merge();

  var merge1 = function(b, c) {
    var aux = [];
    
    while(b.length > 0 && c.length > 0) {
      aux.push(b[0] <= c[0] ? b.shift() : c.shift())
    }

    return aux.concat(b, c);
  }

  return merge1(b, c);
}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
