
const sectionA = document.getElementById("a");

const defaultButton = sectionA.querySelector(".defaultButton");
const redButton = sectionA.querySelector(".redButton");
const yellowButton = sectionA.querySelector(".yellowButton");
const blueButton = sectionA.querySelector(".blueButton");
const greenButton = sectionA.querySelector(".greenButton");

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
