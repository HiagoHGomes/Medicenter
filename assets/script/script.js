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
