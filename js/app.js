
const menuLinks = document.querySelectorAll('.mainBar a[href^="#"]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.mainBar a[href="#${id}"]`);
        if (entry.isIntersecting) {
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
    if (target) {
        observer.observe(target)
    }
});

//Search input 
const searchInput = document.querySelector('#searchGeneral');
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const allElements = document.querySelectorAll('*');

  allElements.forEach(element => {
    element.style.backgroundColor = "";
    if(element.childElementCount === 0){
        const text = element.textContent.toLowerCase();
        if(text.includes(query) && query != ""){
            element.style.backgroundColor = "yellow";
            element.scrollIntoView({ behavior: "smooth", block: "center"})
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

