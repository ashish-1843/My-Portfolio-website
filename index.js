
const navbar = document.getElementById('about-heading');
const about_detail = document.getElementById('about-detail');
const aboutme = document.getElementById('aboutme');
const home = document.getElementById('home');
const skills = document.getElementById('skills');
const project = document.getElementById('projects');
const skill1 = document.getElementById('skill-1');
const skill2 = document.getElementById('skill-2');
const skill3 = document.getElementById('skill-3');
const skill4 = document.getElementById('skill-4');
const skill5 = document.getElementById('skill-5');
const skill6 = document.getElementById('skill-6');
const skill7 = document.getElementById('skill-7');
const skill8 = document.getElementById('skill-8');
const contact = document.getElementById('contactme');
const project1 = document.getElementById('project-1');
const project2 = document.getElementById('project-2');
const project3 = document.getElementById('project-3');
const contactme = document.getElementById('contact');
const homescroll = 0;
const aboutscroll = 500;
const skillanima = 800;
const skillscroll = 1000;
const projectanima = 1600;
const projectscroll = 1700;
const aaboutanimation = 20;
const contactanima = 2600;
const contactscroll = 2700;

window.addEventListener('scroll', () => {

    if (window.scrollY > aaboutanimation) {
        navbar.classList.add('scrolled');
        about_detail.classList.add('scrolled');
    }

    if (window.scrollY > aboutscroll) {
        aboutme.classList.add('scrolled');
        home.classList.add('scrolled');
    }

    else {
        aboutme.classList.remove('scrolled');
        home.classList.remove('scrolled');
    }

    if (window.scrollY > skillscroll) {
        skills.classList.add('scrolled');
        aboutme.classList.remove('scrolled');
    }

    else {
        skills.classList.remove('scrolled');

    }

    if(window.scrollY > skillanima)
    {
        skill1.classList.add('scrolled');
        skill2.classList.add('scrolled');
        skill3.classList.add('scrolled');
        skill4.classList.add('scrolled');
        skill5.classList.add('scrolled');
        skill6.classList.add('scrolled');
        skill7.classList.add('scrolled');
        skill8.classList.add('scrolled');
        
    }

    if (window.scrollY > projectscroll) {
        project.classList.add('scrolled');
        skills.classList.remove('scrolled');
    }
    else {
        project.classList.remove('scrolled');
    }

    if(window.scrollY > projectanima)
    {
        project1.classList.add('scrolled')
        project2.classList.add('scrolled')
        project3.classList.add('scrolled')
    }

    if (window.scrollY > contactscroll) {
        contact.classList.add('scrolled');
        project.classList.remove('scrolled');
    }
    else {
        contact.classList.remove('scrolled');
    }

    if(window.scrollY > contactanima)
    {
        contactme.classList.add('scrolled');
    }
})
