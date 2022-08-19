const close = document.querySelectorAll(".close");

close.forEach(function(x){
    x.addEventListener("click", function(y){
        y.target.parentElement.style.display = "none";
        y.preventDefault();
        console.log(close);
    });
});