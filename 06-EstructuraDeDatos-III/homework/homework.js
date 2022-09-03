"use strict";

const { _normalizeShortcodeScope } = require("@11ty/eleventy/src/Engines/Liquid");

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function(value) {
  if(value < this.value) {
    if(this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value)
    }
  }

  if(value >= this.value) {
    if(this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value)
    }
  }
}

BinarySearchTree.prototype.size = function(){
  
if(!this.left && !this.right){
    return 1;
	} else{
		  if(this.left && !this.right){
			return this.left.size() + 1;
		} else if(!this.left && this.right){
			  return this.right.size() + 1;
		} else{
			  return (this.left.size() + 1 + this.right.size() + 1) - 1;
		}
	}
}

BinarySearchTree.prototype.contains = function(value){
  if (this.value === value) return true; 
  
  if(value < this.value && this.left != null) { 
    return this.left.contains(value);
  } else if (value >= this.value && this.right != null) {
    return this.right.contains(value);
  } else {
    return false;
  }
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, order){  
  if(order === "post-order") {
    if(this.left) this.left.depthFirstForEach(cb, order)
    if(this.right) this.right.depthFirstForEach(cb, order)
    cb(this.value)
  }
  if(order === "pre-order") {
    cb(this.value)
    if(this.left) this.left.depthFirstForEach(cb, order)
    if(this.right) this.right.depthFirstForEach(cb, order)
  }
  else {
    if(this.left) this.left.depthFirstForEach(cb, order)
    cb(this.value)
    if(this.right) this.right.depthFirstForEach(cb, order)
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, array = []){
  cb(this.value)
  if(this.left) array.push(this.left)
  if(this.right) array.push(this.right)

  var next = array.shift()
  if(next) next.breadthFirstForEach(cb, array)
};





// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
