//DOM SELECTION
// document.getElementById() -> element

const judul =  document.getElementById('judul');
judul.style.color = 'red';              // CSS properties color
judul.style.backgroundColor = '#ccc';   // CSS properties BG color
judul.innerHTML = 'Aditya Kesuma';      // Merubah Isi Text

// document.getElementsByTagName()
// -> HTMLCollections -> HTMLCollections harus di definisikan dengan array
const p = document.getElementsByTagName('p');

for(let i = 0; i < p.length; i++){              
    p[i].style.backgroundColor = 'lightblue';
}

//select by index
const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = "60px";


//document.getElementsByClassName()
// -> HTMLCollection -> HTMLCollections harus di definisikan dengan array
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = "ini diubah dari javascript";



//************************************************** */

//document.querySelector()
// -> Element

const p4 = document.querySelector('#b p');
p4.style.backgroundColor = "yellowgreen";

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = "orange";

// const pp = document.querySelector('p');
// pp.innerHTML = "ini diubah dari JS";


// document.querySelectorAll()

const pp = document.querySelectorAll('p');
p[2].style.backgroundColor = 'salmon';



// Mengubah Root Node
// Kita harus deklarasi Scope Root node-nya

const sectionB = document.getElementById('b');
const ppp = sectionB.getElementsByTagName('p');

ppp[0].style.backgroundColor = "purple";