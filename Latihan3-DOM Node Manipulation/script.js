/*
NODE MANIPULATION

document.createElement();
document.createTextNode();
node.appendChild();
node.insertBefore();
parentNode.removeChild();
parentNode.replaceChild();

1. Bikin tag
2. Bikin isi
3. Masukan isi ke dalam tag

*/


//Buat element Baru
const pBaru = document.createElement("p");
const teksPBaru = document.createTextNode("Paragraf Baru");

//Simpan tulisan ke dalam Element
pBaru.appendChild(teksPBaru);

// Simpan pBaru di akhir section A
// const secAp3 = document.querySelector("section#a .p3"); // Salah harus pilih parent Node
const secA = document.getElementById("a");
secA.appendChild(pBaru);


/************************* */

// Insert Before

const itemBaru = document.createElement("li");
const textItemBaru = document.createTextNode("Item 00");

itemBaru.appendChild(textItemBaru);

const secB = document.getElementById("b");
const ulsecB = secB.querySelector("ul");
const item2 = secB.querySelector("ul li:nth-child(2)");

ulsecB.insertBefore(itemBaru, item2);
// Kita hahrus select parent nya terlebih dahulu dan select akhiran lalu
// masukan kedalam method insert before
// parentNode.insertBefore(Value,Node);


/************************* */

// Remove Child

const link = document.getElementsByTagName('a')[0];
secA.removeChild(link);

// Replace Child

const judulBaru = secB.querySelector("p");
const judul = document.createElement("h2");
const isijudul = document.createTextNode("Judul Section B");

judul.appendChild(isijudul);

secB.replaceChild(judul,judulBaru);


pBaru.style.backgroundColor = "lightgreen";
itemBaru.style.backgroundColor = "lightgreen";
judul.style.backgroundColor = "lightgreen";

//Manipulasi Node (Method baru)

/*
parentNode.append();
parentNode.prepend();
childNode.before();
childNode.after();
childNode.remove();
childNode.replaceWith();
*/