const wDefault = document.querySelector(".default");
const wCyan = document.querySelector(".wCyan");
const wMagenta = document.querySelector(".wMagenta");
const wYellow = document.querySelector(".wYellow");
const wBlack = document.querySelector(".wBlack");

const rRandom = document.querySelector(".rDef");
const rColor = document.querySelector(".rColor");

const container = document.querySelector(".container");

wDefault.addEventListener("click", defaultColor);

function defaultColor() {
    container.style.backgroundColor = "white";
    console.log("White");
};

wCyan.addEventListener("click", cyanColor);

function cyanColor() {
    container.style.backgroundColor = "cyan";
    console.log("Cyan");
}

wMagenta.addEventListener("click",magentaColor);

function magentaColor() {
    container.style.backgroundColor = "magenta";
    console.log("magenta");
}

wYellow.addEventListener("click",yellowColor);

function yellowColor() {
    container.style.backgroundColor = "yellowgreen";
    console.log("yellow");
}

wBlack.addEventListener("click",blackColor);

function blackColor(){
    container.style.backgroundColor = "#3333";
    console.log("black");
}

// ----------------------------------

rColor.addEventListener("click",function() {
    container.style.backgroundColor = "rgb(" + (Math.floor(Math.random() * 257)) + ","  + (Math.floor(Math.random() * 257)) + "," + (Math.floor(Math.random() * 257))  + ")"
});

// ------------------------------------

rRandom.addEventListener("click", function() {
    var a = Math.floor(Math.random() * 4);
    console.log(a);
    if(a == 0){
        cyanColor();
    }if(a == 1){
        magentaColor();
    }if(a == 2){
        yellowColor();
    }if(a == 3){
        blackColor();
    }if( a >= 4 || a < 0){
        defaultColor();
    }
});

//-------------------------------

var red = document.getElementById("red").value;
var green =document.getElementById("green").value;
var blue = document.getElementById("blue").value;

var defaultValRed = red.defaultValue;
var r = red.value;