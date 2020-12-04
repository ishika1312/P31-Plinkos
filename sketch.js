const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//declaring global variables
var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;


function setup() {
	//creating canvas
	createCanvas(480, 800);

	//creating the engine and adding world to it
	engine = Engine.create();
	world = engine.world;

	//creating the ground object
	ground = new Ground(240, 795, width, 10);

	//creating the division objects
	for (var k = 0; k <= width; k = k+80 ){
		divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
	}

	//creating the plinko objects
	//top
	for (var j = 45; j <= width - 10; j = j+50){
		plinkos.push(new Plinko(j, 75, 10));
	}

	//level 2
	for (var j = 15; j <= width - 10; j = j+50){
		plinkos.push(new Plinko(j, 175, 10));
	}

	//level 3
	for (var j = 40; j <= width - 10; j = j+50){
		plinkos.push(new Plinko(j, 275, 10));
	}

	//level 4 
	for (var j = 15; j <= width - 10; j = j+50){
		plinkos.push(new Plinko(j, 375, 10));
	}

	//updating the engine
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  //displaying the ground
  ground.display();

  //displaying the divsions
  for (var k = 0; k < divisions.length; k++){
	  divisions[k].display();
  }

  //displaying the plinkos
  for (var j = 0; j < plinkos.length; j++){
	  plinkos[j].display();
  }

  //creating the particle objects
	if (frameCount % 60 === 0){
		particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
	}
  
  //displaying the particles
  for (var i = 0; i < particles.length; i++){
	  particles[i].display();
  }
  drawSprites();
 
}



