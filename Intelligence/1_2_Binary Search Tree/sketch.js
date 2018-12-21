var tree;

function setup(){

  // noCanvas();
  createCanvas(600,400);
  background(51);
  tree =  new Tree();
  // var  n = new Node(5);
  for (var i = 0; i < 15; i++){
    tree.addValue(floor(random(0,100)));
  }

  console.log(tree)

  tree.traverse();

}


