const menuLinks = document.querySelectorAll(".mainBar a[href^='#']");
const sections = [];

// Obtener las secciones correspondientes
menuLinks.forEach(link => {
    const id = link.getAttribute("href");
    const section = document.querySelector(id);
    if (section) {
        sections.push(section);
    }
    // activar inmediatamente al hacer click
    link.addEventListener("click", () => {
        setActiveLink(id.substring(1));
    });
});


function setActiveLink(id) {
    menuLinks.forEach(link => {
        link.classList.remove("select");
    });
    const active = document.querySelector(`.mainBar a[href="#${id}"]`);
    if (active) {
        active.classList.add("select");
    }
}


// detectar sección visible al hacer scroll
function updateActiveSection() {
    const scrollPosition = window.scrollY + window.innerHeight * 0.35;
    let currentSection = null;
    sections.forEach(section => {
        if (scrollPosition >= section.offsetTop) {
            currentSection = section;
        }
    });
    if (currentSection) {
        setActiveLink(currentSection.id);
    }
}

window.addEventListener("scroll", updateActiveSection);
window.addEventListener("load", updateActiveSection);


//Search input 
const searchInput = document.querySelector('#searchGeneral');
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const allElements = document.querySelectorAll('*');

    allElements.forEach(element => {
        element.style.backgroundColor = "";
        if (element.childElementCount === 0) {
            const text = element.textContent.toLowerCase();
            if (text.includes(query) && query != "") {
                element.style.backgroundColor = "yellow";
                element.scrollIntoView({ behavior: "smooth", block: "center" })
                document.addEventListener('click', () => {
                    element.style.backgroundColor = "";
                    searchInput.value = "";
                })
            }
        }
    })

})






//  Envío de emails con la librería EmailJS

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        const btn = document.querySelector(".buttonSend");
        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_cd9wzcu';
        const form = document.getElementById('form');

        //Selections of the inputs
        const inputName = document.querySelector('#from_name');
        const inputEmail = document.querySelector('#email_sender');
        const inputMessage = document.querySelector('#message');

        emailjs.sendForm(serviceID, templateID, form)
            .then(() => {
                btn.value = 'Send Email';
                alert('Sent!');
                inputName.value = "";
                inputMessage.value = "";
                inputEmail.value = "";
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });


// //Carousel for the proyects viewer
// const carousel = document.querySelector('.viewProyects');
// const items = document.querySelectorAll('.proyect');
// const prevButton = document.getElementById('prev');
// const nextButton = document.getElementById('next');

// let current = 0;

// function updateCarousel(){
//     const width = items[0].offsetWidth;
//     carousel.style.transform = `translateX(-${current * width}px)`;
// }

//     prevButton.addEventListener('click', () => {
//       current = (current > 0 ) ? current - 1 : items.length - 1;
//       updateCarousel();
//       console.log("prev")
//     })

//     nextButton.addEventListener('click', () => {
//         current = (current < items.length - 1 ) ? current + 1 : 0;
//         updateCarousel();
//       console.log("next")

//       })

//       window.addEventListener('resize', updateCarousel)

// updateCarousel()


//Toggle main
const toggle = document.querySelector('.toggle');
const nav = document.querySelector('.nav-bar');

toggle.addEventListener('click', () => {
    nav.classList.toggle('move');
    nav.addEventListener('click', () => {
        if (nav.classList.toggle('move')) {
            nav.classList.toggle('move', false)
        }
    })
})


// Porcentajes de cada habilidad
document.addEventListener('DOMContentLoaded', function () {
    const skills = document.querySelectorAll(".inner-circle")

    skills.forEach(skill => {
        const percentage = skill.dataset.percentage;
        const element = document.querySelector(".inner-circle i");
        skill.style.width = `${element.offsetWidth + 14}px`
        skill.style.height = `${element.offsetWidth + 14}px`
        skill.style.background = `conic-gradient(#4caf50 ${percentage}%, #00000000 ${percentage}% 100%)`
    })
    

})

