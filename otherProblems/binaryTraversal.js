'use strict';

const BinarySearchTree = require('./bst.js');
function preOrder(tree){
  if(tree === null) return;

  console.log(tree.value);
  preOrder(tree.left);
  preOrder(tree.right);
}
function inOrder(tree){
  if(tree === null) return;
  inOrder(tree.left);
  console.log(tree.value);
  inOrder(tree.right);
}

function postOrder(tree){
  if(tree.left){
    postOrder(tree.left);
  }
  if(tree.right){
    postOrder(tree.right);
  }
  console.log(tree.value);
}

function main(){
  let bst = new BinarySearchTree ();
  let exampleData = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];

  exampleData.forEach(num => bst.insert(num,num));
  console.log(bst);
  console.log('==pre==');
  preOrder(bst);
  console.log('==in==');
  inOrder(bst);
  console.log('==post==');
  postOrder(bst);

}



main();
