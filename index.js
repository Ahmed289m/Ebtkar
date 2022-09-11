let one  = document.getElementById("one");
let Ttwo = document.getElementById("Ttwo");
let Tthree = document.getElementById("Tthree");
let Tfour = document.getElementById("Tfour");
let Tfive = document.getElementById("Tfive");
let Tsix = document.getElementById("Tsix");
let partone = document.querySelector(".partone");
let Ptwo = document.getElementById("Ptwo");
let Pthree = document.getElementById("Pthree");
let Pfour = document.getElementById("Pfour");
let Pfive = document.getElementById("Pfive");
let Psix = document.getElementById("Psix");
let parttwo =document.querySelector(".parttwo");
let two =document.getElementById("two");
let container = document.getElementById("container");
let loading = document.querySelector(".loading");

window.addEventListener("load",function(){
    one.style = "transform: translateX(0px);opacity: 1;transform: translateY(50px);";
    two.style = "transform: translateX(0px);opacity: 1;transform: translateY(50px);";
    costumers.style = "transform: translateX(0px);opacity: 1;transform: translateY(50px);";


    
})


window.addEventListener("load",function(){

    loading.style.display = "none";


    
})

window.addEventListener("load",function(){
    partone.style.opacity = "1";

})


window.addEventListener("scroll",function(){

    
        if(window.scrollY >= Ptwo.offsetTop)
        {
            Ptwo.style.opacity = "1";
            Ttwo.style.opacity = "1";

        }
        if(window.scrollY >= Pthree.offsetTop)
        {
            Pthree.style.opacity = "1";
            Tthree.style.opacity = "1";

        }
        if(window.scrollY >= Pfour.offsetTop)
        {
            Pfour.style.opacity = "1";
            Tfour.style.opacity = "1";

        }
        if(window.scrollY >= Pfive.offsetTop)
        {
            Pfive.style.opacity = "1";
            Tfive.style.opacity = "1";

        }
        if(window.scrollY >= Psix.offsetTop)
        {
            Psix.style.opacity = "1";
            Tsix.style.opacity = "1";

        }

        if(window.scrollY >= parttwo.offsetTop)
        {
            parttwo.style.opacity = "1";

        }

        
})



window.addEventListener("scroll",function(){


    if(window.scrollY >= parttwo.offsetTop)
    {
        parttwo.style.opacity = "1";

    }

    if(window.scrollY >= 400)
        up.style.display = "block";
        else
        up.style.display = "none";

    
})

window.addEventListener("scroll",function(){


   

    if(window.scrollY >= 400)
        up.style.display = "block";
        else
        up.style.display = "none";

    
})

window.addEventListener("load",function(){
    container.style = "  transform: translateX(0px);opacity: 1;"
})

let partthree =document.querySelector(".partthree");
let costumers =document.querySelector(".costumers");

function service(){
    window.scrollTo({
        top: partthree.offsetTop,
        behavior: "smooth"
    });
}

function contact(){
    window.open("./contact.html","_self");
}

function home(){
    window.open("./index.html","_self");

}

function about(){
    window.open("./about.html","_self");

}


let navmobile = document.querySelector(".navmobile");
    function openMnav(){
        navmobile.style.right = "-50px"
    }

    function closeMnav(){
        navmobile.style.right = "-250px"
    }


    up.addEventListener("click",function(){
        window.scrollTo(0,0)
    })

 