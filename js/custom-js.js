//The first thing that we are gonna do is check to make sure that all the HTML is loaded.
//We do this to avoid any render blocking JavaScript.
document.addEventListener('DOMContentLoaded',(loaded)=>{
    //This will only be able to be seen in the console log. To check this inspect element in the browser and select the console tab.
    console.log('Document is ready!!!');
});
//now let's try some jQuery! Lets start with the jQuery version of waiting until the document has loaded
$(document).ready(function(){
    //let's start by calling in our header.html meta.html & our footer.html
    $(function(){
        $("#head").load("meta.html");
        $("#header").load("header.html");
        $("#footer").load("footer.html");
    });
    //change the menu on scroll
    $(function(){
        $(window).on("scroll",function(){
            if($(window).scrollTop() > 75){
                $(".menu-row").addClass("scrolled-menu");
            }
            else{
                $(".menu-row").removeClass("scrolled-menu");
            }
        })
    });
});

