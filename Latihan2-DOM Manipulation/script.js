/* Manipulasi Element

element.innerHTML = "";     // Merubah dari isi HTML yang kita pilih
element.style.<property> = "";  // Menambahkan Style
element.setAttribute();     // Menambahkan Attribute
element.classList       //

*/

// const judul = document.getElementById("judul");
// judul.innerHTML = "<i>Aditya Kesuma</i>";

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = "<div><p>Paragraf 1</p></div>";


// Element.style.<property> = ""; // Menambahkan Style

const p1 = document.querySelector("section#b ul li:nth-child(1)");
p1.style.color = "salmon";

// Set attribute

const judul1 = document.getElementsByTagName("h1")[0];
judul1.setAttribute("name","aditya")

const a = document.querySelector("section#a a");
a.setAttribute("id","link");
//a.getAttribute("href"); // untuk mengambil isi href
//a.removeAttribute("href"); // untuk menghapus isi attribute


// Class List

/* 
element.classList.add();
element.classList.remove();
element.classList.toggle();
element.classList.item();
element.classList.contains();
element.classList.replace();
*/

const p2 = document.querySelector("div#container section#a p.p2");
p2.classList.add("label");

//