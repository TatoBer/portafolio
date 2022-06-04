//  isFixed es usado para que el codigo se corra solo cuando
//  pasa de un estado a otro, y no se actualizen las clases
//  cada vez que scrolleamos


(function () {

    let navBar = document.querySelector("#nav-bar");
    let main = document.querySelector("main");
    let navBarHeight = navBar.getBoundingClientRect().height;
    let breakpoint = main.offsetTop - navBarHeight;
    let isFixed = false;

    function onScroll() {

        if(window.scrollY >= breakpoint && !isFixed) {
            isFixed = true;
            navBar.classList.remove("open");
            navBar.classList.add("top-0");
            navBar.classList.add("position-fixed");
            main.style.cssText = "margin-top: " + navBarHeight + "px;";
        } else if (window.scrollY < breakpoint && isFixed) {
            isFixed = false;
            navBar.classList.remove("position-fixed");
            main.style.cssText = "margin-top: " + 0;
        }
    }

    document.addEventListener("scroll", onScroll);

})()

