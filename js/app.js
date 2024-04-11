
const menuLinks = document.querySelectorAll('.mainBar a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.mainBar a[href="#${id}"]`);
        if(entry.isIntersecting){
            document.querySelector(".mainBar a.select").classList.remove("select")
            menuLink.classList.add("select")
        }
    })
}, {
    rootMargin: "-30% 0px -70% 0px"
})


menuLinks.forEach(menuLink => {
    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);
    if(target){
        observer.observe(target)
    }
});