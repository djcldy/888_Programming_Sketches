function Graph(){
  this.nodes = [];
  this.graph = {};
}

Graph.prototype.addNode = function(n){
    this.nodes.push(n);
    var title = n.title;
  // node into "hash"
    this.graph[title] = n;
}

Graph.prototype.getNode = function(actor){
  return this.graph[actor];
}
