
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

//  Envío de emails con la librería EmailJS

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        const btn = document.querySelector(".buttonSend");
        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_cd9wzcu';

        const message = document.querySelector("#message").value;
        const templateParams = {
            message: message
        };

        emailjs.sendForm(serviceID, templateID, templateParams)
            .then(() => {
                btn.value = 'Send Email';
                alert('Sent!');
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });

