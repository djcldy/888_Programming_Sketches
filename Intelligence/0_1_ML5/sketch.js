// use image net
// https://ml5js.org/docs/image-classification-example

// Introduction to Machine Learning


let mobilenet;

let puffin;


function setup(){

  createCanvas(800,800);
  puffin = createImg('images/puffin.jpg',imageReady)
  puffin.hide();
  background(51);
  mobilenet = ml5.imageClassifier('MobileNet', modelReady);

}

function imageReady(){
  image(puffin,0,0,width,height);
}

function modelReady(){

  console.log('Model is ready!!!');
  mobilenet.predict(puffin,gotResults);

}

// call-back, check for erros

function gotResults(err,data){

  if (err){
    console.log(err);
  } else {
    console.log("results:" + JSON.stringify(data));
  }

}
