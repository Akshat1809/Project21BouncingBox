var music;
var box1 , box2 , box3 , box4 ;
var box;

var rightwall , leftwall , topwall;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(800 , 600);
    
    //surfaces
    box1 = createSprite(680,580,180,10);
    box1.shapeColor = 'blue';

    box2 = createSprite(480,580,180,10)
    box2.shapeColor = 'green';

    box3 = createSprite(280,580,180,10);
    box3.shapeColor = 'red';

    box4 = createSprite(80,580,180,10);
    box4.shapeColor = 'yellow'

    //ball
    box = createSprite(random(20,750) , 180 , 30 , 30);
    box.shapeColor = rgb(random(0,255) , random(0,255) , random(0,255));
    box.velocityX = 5;
    box.velocityY = 5;

    //edges
    rightwall = createSprite(795 , 300 , 10 , 600)
    rightwall.visible = false;

    topwall = createSprite(400 , 5 , 800 , 10)
    topwall.visible = false;

    leftwall = createSprite(5 , 300 , 10 , 600)
    leftwall.visible = false;
}

function draw() {
    background(rgb(169,169,169));

    if (box.isTouching(box1)) {
        box.bounceOff(box1);
        box.shapeColor = 'blue';
        music.play();
    }

    if (box.isTouching(box2)) {
        box.bounceOff(box2);
        box.shapeColor = 'green';
        music.play();
    }

    if (box.isTouching(box3)) {
        box.bounceOff(box3);
        box.shapeColor = 'red';
        box.velocityX = 0;
        box.velocityY = 0;
    }

    if (box.isTouching(box4)) {
        box.bounceOff(box4);
        box.shapeColor = 'yellow';
        music.play();
    }

    //making ball bounce off walls
    if (box.isTouching(rightwall)) {
        box.bounceOff(rightwall)
        music.play();
    }

    if (box.isTouching(topwall)) {
        box.bounceOff(topwall)
        music.play();
    }

    if (box.isTouching(leftwall)) {
        box.bounceOff(leftwall)
        music.play();
    }

    drawSprites();
}