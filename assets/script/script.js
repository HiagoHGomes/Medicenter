window.onload = function () {
    document.querySelector (".menu-mobile").addEventListener("click", function(){
        if (document.querySelector(".menu nav ul").style.display == 'flex') {
            document.querySelector(".menu nav ul").style.display = 'none';
        }else {
            document.querySelector(".menu nav ul").style.display = 'flex';
        }
    });
};

window.onresize=function(){
    if(document.body.clientWidth > 980){
        document.querySelector("nav ul").style.display="flex"
        document.querySelector(".menu-mobile").style.display="none"
        
    }
    else{
        document.querySelector(".menu-mobile").style.display="flex"
        document.querySelector("nav ul").style.display="none"
    }
    
}

function subir() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior:'smooth'
    });
}

function decidir () {
    if(window.scrollY===0) {
        //ocultar o botão
        document.querySelector(".button").style.display = "none";
    } else {
        //mostrar o botão
        document.querySelector(".button").style.display = "block";
    }
}

// setInterval(decidir, 1000)

window.addEventListener('scroll', decidir)
