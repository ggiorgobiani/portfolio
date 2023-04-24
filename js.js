// ---------------------------------------- Humb ----------------------------------------

let header = document.querySelector("header")
let humb_icon = document.querySelector(".humb-icon")
let m = '<i class="fa-solid fa-bars"></i>'
let x = '<i class="fa-solid fa-xmark"></i>'


humb_icon.addEventListener("click", function(){
    if(humb_icon.innerHTML == m){
        humb_icon.innerHTML = x
        header.style.left = "0px"
    }
    else{
        humb_icon.innerHTML = m
        header.style.left = "-85px"
    }
})

window.addEventListener("resize", function(){
    if(window.innerWidth >= 550){
        header.style.left = "0px";
    }
    else{
        header.style.left = "-85px";
        humb_icon.innerHTML = m
    }
})


// ---------------------------------------- Active nav a tag ----------------------------------------

let sections = document.querySelectorAll("section")
let navLinks = document.querySelectorAll(".side-nav a")
window.addEventListener("scroll", () => {
    let current = Array.from(sections).findIndex(s => s.offsetTop - 50 <= window.scrollY && 
        s.offsetTop + s.offsetHeight - 50 > window.scrollY)
    navLinks.forEach(a => a.classList.remove("active"))
    
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // User has scrolled to the bottom of the page
        navLinks[navLinks.length - 1].classList.add("active")
    } else {
        navLinks[current].classList.add("active")
    }
})