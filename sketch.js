var bugatti,wall1,lamborgini,wall2,wall3,ferrari,wall4,porsh;


function setup() {
  createCanvas(1200,600);

  //shape of the car and color
  bugatti = createSprite(1100,200, 100, 50);
  bugatti.shapeColor="blue"
 
  lamborgini = createSprite(1100,100,100,50);
  lamborgini.shapeColor="yellow"
 
  ferrari = createSprite(1100,300,100,50);
  ferrari.shapeColor="red"
  
  porsh = createSprite(1100,400,100,50);
  porsh.shapeColor="white" 
 
  //shape of the wall
  wall1 = createSprite(100,200,10,40);
  wall1.shapeColor="pink"

  wall2 = createSprite(100,100,10,40);
  wall2.shapeColor="pink"

  wall3 = createSprite(100,300,10,40);
  wall3.shapeColor="pink"

  wall4 = createSprite(100,400,10,40);
  wall4.shapeColor="pink"

  //velocity of the cars
  bugatti.velocityX = -9;
  lamborgini.velocityX = -10;
  ferrari.velocityX = -7;
  porsh.velocityX = -8;

  }

createSprite();

//car function of color changing 
function draw() {
  background(0);
 
  if(isTouching(bugatti,wall1)){
  bugatti.shapeColor="green"
  wall1.shapeColor="black"
  }else{
    bugatti.shapeColor="blue"
    wall1.shapeColor="pink"
  }

  if(isTouching(lamborgini,wall2)){
    lamborgini.shapeColor="green"
    wall2.shapeColor="black"
    }else{
      lamborgini.shapeColor="yellow"
      wall2.shapeColor="pink"
    }

    if(isTouching(ferrari,wall3)){
      ferrari.shapeColor="yellow"
      wall3.shapeColor="black"
      }else{
        ferrari.shapeColor="red"
        wall3.shapeColor="pink"
      }

      if(isTouching(bugatti,wall1)){
        porsh.shapeColor="red"
        wall4.shapeColor="black"
        }else{
          porsh.shapeColor="white"
          wall4.shapeColor="pink"
        }  
              
  drawSprites();
}

//istouching funtionality
function isTouching(object1,object2){
  if(object1.x-object2.x<(object1.width+object2.width)/2 && object2.x-object1.x<(object1.width+object2.width)/2 && 
  object1.y-object2.y<(object1.height+object2.height)/2 && object2.y-object1.y<(object1.height+object2.height)/2 ){
  return true  
  }else{
    return false

  
  }

}