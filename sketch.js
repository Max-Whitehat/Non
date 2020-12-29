const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var score = 0
var engine, world;
var box1, pig1;
var backgroundImg,platform



//string
/*var name="Max";
console.log(name);

//number
var postalno =10086


//false or true    : Boolean Value

//var sing= false;


//var mobileno = null;

//var drivinglicense;

//var students = ['Max' , 'Pari' , 'Joe']

//var MaxDetais = ['Max', 10086 , false];



//var studentsdetails = [["Max",10086,false],["Pari",41263,true]]


var Joedetails =["Joe",11222,true];

studentsdetails.push(Joedetails)



studentsdetails.pop();

console.log(studentsdetails);
*/

function preload() {
  //  backgroundImg = loadImage("sprites/bg.png");
    getTime();
    

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);



    bird = new Bird(200,50);
    
   

    slingshot1 = new Slingshot(bird.body,{x:200,y:50});
    
    

}

function draw(){


    text("score"+score,1100,100)

    if(backgroundImg){
    background(backgroundImg);
    }

    Engine.update(engine);

    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();


    slingshot1.display();

    bird.display();
    platform.display();
    
    
    
}


function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot1.fly();
}


function keyPressed() {
    if (keyCode === 32) {
      slingshot1.attach(bird.body);
      bird.trajectory = []
    } 
}



async function getTime(){
   var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Shanghai");
    var jsondata = await response.json();

    var datetime = jsondata.datetime;
    var hour = datetime.slice(11,13);

    if(hour>=6 && hour<=19){
        bg = "sprites/bg.png"
    } else{
        bg = "sprites/bg2.png"
    }

        backgroundImg = loadImage(bg)
        
}





