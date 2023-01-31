let blog = document.getElementById('sub_menu');
let about = document.getElementById("about");
let menu = document.getElementById('menu');
let openBtn = document.getElementById('responsive_menu');
let closeBtn = document.getElementById('closed');
let links = document.getElementsByClassName('nav_link');
let sideNav = document.getElementById('site_mobile');



for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
    
        if(this.classList.contains('about1')){
            current[0].className = "nav_link";
            about.className += " active";
        }else{
            if(about.classList.contains('active'))  about.className.replace(" active", "");
            current[0].className = "nav_link";
            this.className += " active";
        }
    
    });
}

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav(){
    sideNav.classList.add("actived");
}

function closeNav(){
    sideNav.className = "site_mobile";
}