var car, wall;
var speed, weight;
var deformation



function setup() {
  createCanvas(800,400);
  
  
  car = createSprite(50,200,50,50);
  car.velocityX = speed;
  wall = createSprite(1500,200,60,height/2);

  speed = random(55,90);
  weight = random(1500,400); 

  
}

function draw() {
  background(255,255,255);

  if(wall.x - car.x < (car.width + wall.width)/2) {
    car.velocityX = 0;
    deformation = 0.5 * weight * speed * speed/22500;
    if(deformation > 180) {
      car.shapeColor = 'red'
    }
    if(deformation < 180 && deformation > 100) {
      car.shapeColor = 'yellow'
    }
    if(deformation < 100) {
      car.shapeColor = 'green'
    }
  }

drawSprites();
}