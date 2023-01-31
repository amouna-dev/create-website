let blog = document.getElementById('sub_menu');
let about = document.getElementById("about");
let menu = document.getElementById('menu');
let links = document.getElementsByClassName('nav_link');

/*about.onmouseover = function (){
    blog.style.display = 'block';
}
blog.onmouseover = function (){
    blog.style.display = 'block';
}
blog.onmouseout = function () {
    blog.style.display = 'none';
}

about.addEventListener('mouseover', function(){
    blog.style.display = 'block';
});

blog.addEventListener('mouseleave', function(){
    blog.style.display = 'none';
});
*/
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