var Canvas = document.getElementById("MyCanvas");
ctx = Canvas.getContext("2d");

var Car1_W = 120;
var Car1_H = 70;
var Car1_I = "https://i.postimg.cc/YqdnnNX1/car1.png";
var Car1_X = 10;
var Car1_Y = 10;

var Car2_W = 120;
var Car2_H = 70;
var Car2_I = "https://i.postimg.cc/YqdnnNX1/car1.png";
var Car2_X = 10;
var Car2_Y = 100;

var Bag_I = "https://i.postimg.cc/bv5d35nK/racing.jpg";

function Add(){
    Bag_IT = new Image();
    Bag_IT.onload = UpBag;
    Bag_IT.src = Bag_I;

    C1_IT = new Image();
    C1_IT.onload = UpC1;
    C1_IT.src = Car1_I;

    C2_IT = new Image();
    C2_IT.onload = UpC2;
    C2_IT.src = Car2_I;
}

function UpBag(){
    ctx.drawImage(Bag_IT, 0, 0, Canvas.width, Canvas.height);
}

function UpC1(){
    ctx.drawImage(C1_IT, Car1_X, Car1_Y, Car1_W, Car1_H);
}

function UpC2(){
    ctx.drawImage(C2_IT, Car2_X, Car2_Y, Car2_W, Car2_H);
}

window.addEventListener("keydown", Keys1);

function Keys1(e){
    keypressed = e.keyCode;
    if(keypressed==38){
        Up1();
    }
    if(keypressed==39){
        Right1();
    }
    if(keypressed==40){
        Down1();
    }
    if(keypressed==37){
        Left1();
    }
}

window.addEventListener("keydown", Keys2);

function Keys2(){
    keypressed = e.keyCode;
    if(keypressed==87){
        Up2();
    }
    if(keypressed==39){
        Right2();
    }
    if(keypressed==40){
        Down2();
    }
    if(keypressed==37){
        Left2();
    }
}

function Down1(){
   if(Car1_Y <=500){
       Car1_Y = Car1_Y + 10;
       UpBag();
       UpC1();
       UpC2();
   }
}

function Down2(){
    if(Car2_Y <=500){
        Car2_Y = Car2_Y + 10;
        UpBag();
        UpC1();
        UpC2();
    }
}

function Right1 () {
    if (Car1_X <= 500){
        Car1_X = Car1_X + 10;
        console.log("X and Y coordinates are: " + "X= " +Car1_X + " Y= " + RovY);
        UpBag();
        UpC1();
        UpC2();
    }
}

function Right2() {
    if (Car2_X <= 500){
        Car2_X = Car2_X + 10;
        console.log("X and Y coordinates are: " + "X= " +Car2_X + " Y= " + Car2_Y);
        UpBag();
        UpC1();
        UpC2();
    }
}

function Up1() {
    if(Car1_Y >=0){
        Car1_Y = Car1_Y - 10;
        UpBag();
        UpC1();
        UpC2();
    }
}

function Up2() {
    if(Car2_Y >=0){
        Car2_Y = Car2_Y - 10;
        UpBag();
        UpC1();
        UpC2();
    }
}

function Left1() {
    if(Car1_X >= 500){
        Car1_X = Car1_X - 10;
        UpBag();
        UpC1();
        UpC2();
    }
}

function Left2() {
    if(Car2_X >= 500){
        Car2_X = Car2_X - 10;
        UpBag();
        UpC1();
        UpC2();
    }
}