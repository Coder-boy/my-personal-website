window.addEventListener("scroll",function () {
    let MenuArea = document.getElementById('menu-area');

   if (window.pageYOffset >0) {
        MenuArea.classList.add("black");
    } else {
       MenuArea.classList.remove("black");
    }
    
    
    
});