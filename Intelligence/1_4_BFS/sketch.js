// var data;
var graph;

function preload(){

}

function setup(){

  graph = new Graph();


  noCanvas();
  var movies = data.movies;

  for (var i = 0; i < movies.length; i++){
    var movie =  movies[i].title;
    var cast = movies[i].cast;
    var movieNode = new Node(movie);
    graph.addNode(movieNode);

    for (var j = 0; j < cast.length; j++){
      var actor = cast[j];
      var actorNode = graph.getNode(actor);
      if (actorNode == undefined){
        actorNode = new Node(actor);
      }
      graph.addNode(actorNode);
      movieNode.addEdge(actorNode);
      // console.log(actor);
    }



  }
console.log(graph);
}



var data = {
    "movies": [{
            "title": "Diner",
            "cast": [
                "Steve Guttenberg",
                "Daniel Stern",
                "Mickey Rourke",
                "Kevin Bacon",
                "Tim Daly",
                "Ellen Barkin",
                "Paul Reiser",
                "Kathryn Dowling",
                "Michael Tucker",
                "Jessica James",
                "Colette Blonigan",
                "Kelle Kipp",
                "Clement Fowler",
                "Claudia Cron"
            ]
        },
        {
            "title": "Footloose",
            "cast": [
                "Kevin Bacon",
                "Lori Singer",
                "Dianne Wiest",
                "John Lithgow",
                "Sarah Jessica Parker",
                "Chris Penn",
                "Frances Lee McCain",
                "Jim Youngs",
                "John Laughlin",
                "Lynne Marta",
                "Douglas Dirkson"
            ]
        },
        {
            "title": "Flatliners",
            "cast": [
                "Kiefer Sutherland",
                "Julia Roberts",
                "Kevin Bacon",
                "William Baldwin",
                "Oliver Platt",
                "Kimberly Scott",
                "Joshua Rudoy",
                "Benjamin Mouton",
                "Hope Davis",
                "Patricia Belcher",
                "Beth Grant"
            ]
        },
        {
            "title": "Eat Pray Love",
            "cast": [
                "Julia Roberts",
                "Javier Bardem",
                "Billy Crudup",
                "Richard Jenkins",
                "Viola Davis",
                "James Franco",
                "Sophie Thompson",
                "Mike O 'Malley",
                "Christine Hakim",
                "Arlene Tur",
                "Hadi Subiyanto",
                "Gita Reddy",
                "Tuva Novotny",
                "Luca Argentero",
                "Rushita Singh"
            ]
        },
        {
            "title": "Spotlight",
            "cast": [
                "Mark Ruffalo",
                "Michael Keaton",
                "Rachel McAdams",
                "Liev Schreiber",
                "John Slattery",
                "Brian d'Arcy James",
                "Stanley Tucci",
                "Gene Amoroso",
                "Jamey Sheridan",
                "Billy Crudup",
                "Maureen Keiller",
                "Richard Jenkins",
                "Paul Guilfoyle",
                "Len Cariou",
                "Neal Huff",
                "Michael Cyril Creighton",
                "Laurie Heineman",
                "Tim Progosh"
            ]
        }
    ]
}
