// Tambien se podria poner todo fuera de la funcion autoinvocada, pero
// las variables navButton y navBar pasarian a formar parte del DOM innecesariamente.

// De esta manera creamos una funcion que se invoca sin necesidad
// de llamarla, e aisla las variables que no necesitamos fuera de esta funcion.

(function () {
    let navButton = document.querySelector("#boton-nav");
    let navBar = document.querySelector("#nav-bar");
    document.addEventListener("click",()=>{
        navBar.classList.remove("open") ;
    },);
    navButton.addEventListener("click", evento =>{
        navBar.classList.toggle("open");
        evento.stopPropagation();
    });

}) ()
