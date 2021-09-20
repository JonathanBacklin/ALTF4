$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky')
        } else{
            $('.navbar').removeClass('sticky')
        }
         if(this.scrollY > 500){
            $('.scroll-up-btn').addClass('show')
        }
        else {
            $('.scroll-up-btn').removeClass('show')
        }
    });



let typed = new Typed(".typing-2", {
    strings: ["ALTF4 FORUMS", "Apply Here"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: false
}) })