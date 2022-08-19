const close = document.querySelectorAll(".close");

for(let i = 0; i < close.length; i++){
    close[i].addEventListener("click", function(){
    close[i].parentElement.style.display = "none";
});
}

// Note :
// Element.parentElement <-
// parentElement adalah fungsi untuk mengambil parent dari suatu Element
// ketika sudah di select maka kita dapat mengaktifkan display = "none"
// agar Pop-Up menu hilang. (Teknik untuk Pop-up menu).