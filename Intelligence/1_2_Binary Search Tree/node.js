Node.prototype.addNode = function(n){
  if (n.value < this.value){
    if (this.left == null){

      this.left = n;
      this.left.x = this.x - 50;
      this.left.y = this.y + 20;

    } else {
      this.left.addNode(n)
    }

  } else if (n.value > this.value) {

    if (this.right == null){

      this.right = n;
      this.right.x = this.x + 50;
      this.right.y = this.y + 20;

    } else {
      this.right.addNode(n);
    }
  }

}

// Visit a node
Node.prototype.visit = function(parent) {
  // Recursively go left
  if (this.left != null) {
    this.left.visit(this);
  }
  // Print out value
  console.log(this.value);
  // console.log("visit", this.x,this.y);
  noFill();
  textAlign(CENTER);
ellipse(this.x,this.y,20,20);
    fill(255);
    noStroke();

  text(this.value,this.x,this.y);

  if (parent != null){
    stroke(255);
    line(parent.x,parent.y,this.x,this.y);
  }

  // Recursively go right
  if (this.right != null) {
    this.right.visit(this);
  }
}

// Node.prototype.search = function(val){
//   if (this.value == val){
//     console.log("FOUND" + val);
//   } else if (val < this.value && this.left !=null){
//     this.left.search();
//   } else if (val > this.value && this.right != null){
//     this.right.search();
//   }

// }
Node.prototype.search = function(val) {
  if (this.value == val) {
    return this;
  } else if (val < this.value && this.left != null) {
    return this.left.search(val);
  } else if (val > this.value && this.right != null) {
    return this.right.search(val);
  }
  return null;
}

function Node(val,x,y){
  this.value = val;
  this.left = null;
  this.right = null;
  this.x = x;
  this.y = y;
}
