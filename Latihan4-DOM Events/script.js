/*
CARA "MENDENGARKAN" EVENT

- Event Handler
    - Inline HTML attribute
    - Element Method

- addEventListener();

CSS pseudo class = class:active
JS event = on<event name> 
// Contoh onclick = "function()";
*/

const p3 = document.querySelector(".p3");

//Inline HTML attribute
function ubahWarnaP3() {
    p3.style.backgroundColor = "lightblue";
}   

function ubahWarnaP2() {
    p2.style.backgroundColor = "salmon";
}   

// Method
const p2 =document.querySelector(".p2");
p2.onclick = ubahWarnaP2;

/***************** */

// class to paragraf 4

const secB = document.getElementById("b");
const p41 = secB.querySelector("p");

p41.classList.add("p4");


/************************************************************************************************
*/

// addEventListener(); Cara Baru.




// Jika di masukan ke dalam Function maka akan menambah secara otomatis setiap klik
const p4 = document.querySelector(".p4");
p4.addEventListener("click", function() {
    alert("ok");
    const ulSecB = secB.getElementsByTagName("ul")[0];
    const item3 = secB.querySelector("ul li:nth-child(3)");
    const itemBaru = document.createElement("li");
    const namaItemBaru = document.createTextNode("Item 00");
    itemBaru.appendChild(namaItemBaru);
    ulSecB.appendChild(itemBaru, item3);
}); //2 parameter


// Contoh Implementasi Lain

var boolP1 = false;

const p1 = document.querySelector(".p1");
// p1.onclick = function() {
//     if (!boolP1) {
//         p1.style.backgroundColor = "salmon";
//         boolP1 = true;
//     }else {
//         p1.style.backgroundColor = "lightblue";
//         boolP1 = false;
//     }
// };


// EVENT HANDLER (OLD METHOD)

// p1.onclick = function() {
//     p1.style.backgroundColor = "salmon";
// };

// p1.onclick = function() {
//     p1.style.color = "white";
// };

/* ***************
 Perbedaan Event Handler Dan Event Listener Adalah
 event handler akan hanya menjalankan 1 function ketika di click (melakukan event)
 maka tidak akurat. sebaliknya event listener menjalankan kedua fungsi ketika di click.
 maka didapati Event Listener lebih Bagus digunakan ketimbang Event handler.
&&&&&&&&&&&&&&&&& */


// EVENT LISTENER (NEW METHOD)

p1.addEventListener("click", function() {
    p1.style.backgroundColor = "yellowgreen";
});

p1.addEventListener("click", function() {
    p1.style.color = "white";
});


/*
    EVENT LIST : https://www.w3schools.com/jsref/obj_events.asp

    - Mouse Event 
        - click
        - dblclick
        - mouseover
        - mouseenter
        - mouseup
        - wheel
        - ...
    - Keyboard Event
    - Resources event
    - focus event
    - View event
    - form event
    - CSS animation & transition Event
    - Drag & drop event
    - Dll
*/