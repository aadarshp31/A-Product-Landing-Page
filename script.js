const navSlider = (() => {
    const burger = document.querySelector('#burger');
    const nav = document.querySelector('#nav-bar');
    const navlinks = document.querySelectorAll('#nav-elements li a');

    burger.addEventListener('click', () => {
        //nav pane animation
        nav.classList.toggle('nav-active');
        burger.classList.toggle('burger-active');
        //nav link animation
        navlinks.forEach((link, index) => {
            
            if(link.style.animation){
                link.style.animation = ""
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/9 + 0.2}s`
            }
        });
    });
})();