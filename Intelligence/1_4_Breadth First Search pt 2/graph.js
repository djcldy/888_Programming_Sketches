function Graph(){
  this.nodes = [];
  this.graph = {};
  this.end   = null;
  this.start = null;
}

Graph.prototype.addNode = function(n){
    this.nodes.push(n);
    var title = n.value;
    // console.log(n);
  // node into "hash"
    this.graph[title] = n;
}

Graph.prototype.setStart = function(n){
  console.log("set start");
  this.start = this.graph[n];
  // console.log(JSON.stringify(this.start))
  return this.start;
}

Graph.prototype.setEnd = function(n){
  this.end = this.graph[n];
  console.log("set end");

  // console.log(JSON.stringify(this.end))
  return this.end;
}

Graph.prototype.getNode = function(actor){
  return this.graph[actor];
}

Graph.prototype.reset = function(){
   for (var i =0; i < this.nodes.length; i++){
     this.nodes[i].searched = false;
   }
}
