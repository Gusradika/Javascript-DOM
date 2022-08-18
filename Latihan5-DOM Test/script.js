
const sectionA = document.getElementById("a");

const defaultButton = sectionA.querySelector(".defaultButton");
const redButton = sectionA.querySelector(".redButton");
const yellowButton = sectionA.querySelector(".yellowButton");
const blueButton = sectionA.querySelector(".blueButton");
const greenButton = sectionA.querySelector(".greenButton");
const acakButton = sectionA.querySelector(".acakButton");

const color = ["white", "red", "Yellow", "Blue", "Green"];

const headerText = sectionA.querySelector("h1");

defaultButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "white";
    headerText.classList.replace("whiteText", "blackText");
    alert("Background changed to " + color[0]);
});

redButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "red";
    headerText.classList.replace("blackText", "whiteText");
    alert("Background changed to " + color[1]);
});

yellowButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "yellowgreen";
    headerText.classList.replace("blackText", "whiteText");
    alert("Background changed to " + color[2]);
});

blueButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightskyblue";
    headerText.classList.replace("blackText", "whiteText");
    alert("Background changed to " + color[3]);
});

greenButton.addEventListener("click", function() {
    document.body.style.backgroundColor = "green";
    headerText.classList.replace("blackText", "whiteText");
    alert("Background changed to " + color[4]);
});

acakButton.addEventListener("click", warnaAcak);


// ---------------------------------------
function red() {
    document.body.style.backgroundColor = "red";
    headerText.classList.replace("blackText", "whiteText");
    alert("Background changed to " + color[1]);
}

function yellow() {
    document.body.style.backgroundColor = "yellowgreen";
    headerText.classList.replace("blackText", "whiteText");
    alert("Background changed to " + color[2]);
}

function blue() {
     document.body.style.backgroundColor = "lightskyblue";
    headerText.classList.replace("blackText", "whiteText");
    alert("Background changed to " + color[3]);
}

function green(){
      document.body.style.backgroundColor = "green";
    headerText.classList.replace("blackText", "whiteText");
    alert("Background changed to " + color[4]);
}


var a = 0;

function warnaAcak() {

    
    a = Math.floor(Math.random() * 4);
    alert(a);
    if(a == 0){
        red();
    }if(a == 1){
        yellow();
    }if(a == 2){
        blue();
    }if(a == 3){
        green();
    }
}






