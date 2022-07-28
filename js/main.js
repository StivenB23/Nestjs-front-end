window.addEventListener("scroll", ()=>{
    let header = document.getElementById('navBar');
    header.classList.toggle("bottomNav", window.scrollY>300);
});