// Event Bubbling adalah dari Child akan beranjak ke Parent
// ini biasa terjadi jika kita memiliki 2 event pada 1 Block HTML
// maka event Child akan dijalankan selanjutnya event Parent akan dijalankan
// maka kita harus mencegah ini terjadi dengan cara prevent Event Bubbling nya
// element.stopPropagation(); <- cara menyetopnya

const cards = document.querySelectorAll(".card");
const closes = document.querySelectorAll(".close");

// closes.forEach(function(x){
//     x.addEventListener("click", function(e){
//         e.target.parentElement.style.display = "none";
//         e.preventDefault();
//         e.stopPropagation(); // ini adalah fungsi yang akan menyetop Event Bubbling
//     });
// });

// cards.forEach(function(x){
//     x.addEventListener("click", function(y){
//         alert("ok");
//     });
// });



// Cara dibawah ini adalah cara terbaik & efektif. dengan cara
// menyeleksi Container dan memberikan Event sesuai dengan ClassName
// yang telah ditentukan.

const container = document.querySelector(".container");

container.addEventListener("click", function(z){
    if (z.target.className == "close"){
        console.log(z);
        z.target.parentElement.style.display = "none";
        z.preventDefault();
    }
});