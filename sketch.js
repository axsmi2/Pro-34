const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground1.jpg");
}

function setup() {
  createCanvas(1500, 600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(700, 600, 1400, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 700, 70, 70);
  box2 = new Box(600, 630, 70, 70);
  box3 = new Box(900, 700, 70, 70);
  box4 = new Box(900, 630, 70, 70);
  box5 = new Box(600, 560, 70, 70);
  box6 = new Box(600, 490, 70, 70);
  box7 = new Box(900, 560, 70, 70);
  box8 = new Box(900, 490, 70, 70);
  box9 = new Box(600, 350, 70, 70);
  box10 = new Box(600, 280, 70, 70);
  box11= new Box(900, 350, 70, 70);
  box12= new Box(900, 280, 70, 70);
  box13 = new Box(600, 210, 70, 70);
  box14= new Box(900, 140, 70, 70);
  box15= new Box(900, 210, 70, 70);
  box16 = new Box(600, 140, 70, 70);
  box17= new Box(900, 70, 70, 70);
  box18= new Box(900, 0, 70, 70);
  box19 = new Box(600, 70, 70, 70);
  box20= new Box(600, 0, 70, 70);
 
  box21 = new Box(750, 280, 70, 70);
  box22 = new Box(750, 280, 70, 70);
  box23 = new Box(750, 210, 70, 70);
  box24 = new Box(750, 140, 70, 70);
  box25 = new Box(750, 210, 70, 70);
  box26 = new Box(750, 140, 70, 70);
 // box27 = new Box(750, 70, 70, 70);
 // box28 = new Box(750, 0, 70, 70);
 // box29 = new Box(750, 70, 70, 70);
  //box30 = new Box(750, 0, 70, 70);
 // box21= new Box(900, 280, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display(); 
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
 // box27.display();
 // box28.display();
 // box29.display(); 
 // box30.display();

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY});
}


function mouseReleased(){
  rope.fly();
}

function keyPressed(){

  if(keyCode === 32){

  Matter.Body.setPosition(hero.body,{x:400,y:150});
     slingshot.attach(hero.body);
  }
}