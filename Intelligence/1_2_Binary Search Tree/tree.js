
function Tree(){
  this.root = null;
}

Tree.prototype.addValue = function(n){
  var n = new Node(n);
  if (this.root == null){
    this.root = n;

    console.log("create root! " + n);
    this.root.x = width/2;
    this.root.y = 16;
  } else {
    this.root.addNode(n);
  }
}

Tree.prototype.traverse = function(){
  this.root.visit();
}



// Start by searching the root
Tree.prototype.search = function(val) {
  var found = this.root.search(val);
  return found;
}


