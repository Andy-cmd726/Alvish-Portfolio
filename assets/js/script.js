const Navbar = () => {
    const burger = document.querySelector('#menu');
    const nav = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navlink li');

    burger.addEventListener('click', function () {
        nav.classList.toggle('navbar-active');
        burger.classList.toggle('fa-times');
        navLinks.forEach((index) => {
            index.style.opacity = '1';

        })
    });
}

Navbar();

// Typing script start
var typed = new Typed(".typing-text", {
    strings: ["frontend development", "web designing", "web development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

// Typing script end

// Tilt image script start
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// Tilt image script end



document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Alvish Pipaliya";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });


// email js start
$("#contact-form").submit(function (event) {
    emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");

    emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById("contact-form").reset();
            alert("Form Submitted Successfully");
        }, function (error) {
            console.log('FAILED...', error);
            alert("Form Submission Failed! Try Again");
        });
    event.preventDefault();
});

// Emailjs end



// scroll animation start
window.addEventListener('scroll',function(){
    var scroll = this.document.querySelector('#scroll-top');
    scroll.classList.toggle("active",this.window.scrollY > 500);
})
function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior : 'smooth'
    })
}

// scroll animation end



// content revel animation start

const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .instagram', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 250 });


/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 500 });
srtop.reveal('.contact .container .form-group', { delay: 600 });

// content revel end