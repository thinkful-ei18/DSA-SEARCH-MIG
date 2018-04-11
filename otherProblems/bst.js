'use strict';

class BinarySearchTree{
  constructor(key=null, value=null, parent=null){
    this.key = key;
    this.parent = parent;
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(key, value){
    if(this.key === null){
      this.key = key;
      this.value = value;
    }
    else if (this.key > key) {
      if(this.left === null){
        this.left = new BinarySearchTree(key, value, this);
      }
      else{
        this.left.insert(key, value);
      }

    }
    else{
      if(this.right===null){
        this.right = new BinarySearchTree(key, value, this);
      }
      else{
        this.right.insert(key, value);
      }
    }
  }
  remove(key){
    //we found it
    if(this.key === key){
      if(this.left && this.right){
        const newReplacement = this.right._findMin();
        this.key = newReplacement.key;
        this.value = newReplacement.value;
        newReplacement.remove(newReplacement.key);
      }
      else if(this.left){
        this._replaceWith(this.left);
      }
      else if(this.right){
        this._replaceWith(this.right);
      }
      else{
        this._replaceWith(null);
      }
    }
    else if(this.key > key){
      this.left.remove(key);
    }
    else if(this.key < key){
      this.right.remove(key);
    }
    else{
      throw new Error('Key Error');
    }
  }

  find(key){
    if(this.key === key){
      return this.value;
    }
    else if(key < this.key && this.left){
      return this.left.find(key);
    }
    else if(key > this.key && this.right){
      return this.right.find(key);
    }
    else{
      throw new Error('Key Error');
    }
  }
  //class helpers
  _replaceWith(node){
    if(this.parent){
      if(this === this.parent.left){
        this.parent.left = node;
      }
      else if(this === this.parent.right){
        this.parent.right = node;
      }
      if(node){
        node.parent = this.parent;
      }
    }
    else{
      if(node){
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      }
      else{
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }
  _findMin(){
    if(!this.left){
      return this;
    }
    return this.left._findMin();
  }

}
module.exports =  BinarySearchTree;
