//  NAVIGATION ACTIVE
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

function updateActiveLink() {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active')

        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
  }
window.addEventListener('scroll', updateActiveLink);
updateActiveLink();






// ABOUT ME
document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector("#about");

    const observerOptions = {
        root: null, 
        rootMargin: "0px",
        threshold: 0.15
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("appear");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (aboutSection) {
        observer.observe(aboutSection);
    }
});








// PROJECT
document.addEventListener("DOMContentLoaded", function () {
  const projectSection = document.querySelector("#project");

  const observerOptions = {
    root: null,
    threshold: 0.15 // Triggers when 15% of the section is visible on screen
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        projectSection.classList.add("visible");
        observer.unobserve(entry.target); // Runs only once when scrolled into view
      }
    });
  }, observerOptions);

  if (projectSection) {
    observer.observe(projectSection);
  }
});




// PROGRESS BAR
const bar1 = document.getElementById('bar1');
const text1 = document.getElementById('text1');
const target1 = 80;

const bar2 = document.getElementById('bar2');
const text2 = document.getElementById('text2');
const target2 = 75;

const bar3 = document.getElementById('bar3');
const text3 = document.getElementById('text3');
const target3 = 30;

let animated = false;

function animateBar(bar, text, target) {
  bar.style.width = target + '%';

  let current = 0;
  const duration = 2000;
  const stepTime = 30;
  const steps = duration / stepTime;
  const increment = target / steps;

  const counter = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(counter);
    }
    text.textContent = Math.round(current) + '%';
  }, stepTime);
}

const skillsSection = document.getElementById('skills'); // 

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !animated) {
      animated = true;
      animateBar(bar1, text1, target1);
      animateBar(bar2, text2, target2);
      animateBar(bar3, text3, target3);
    }
  });
}, {
  threshold: 0.3
});
observer.observe(skillsSection);








// CONTACT
document.addEventListener("DOMContentLoaded", function () {
  const contactSection = document.querySelector(".contact");

  const observerOptions = {
    root: null,
    threshold: 0.15 // Triggers when 15% of the contact section is in view
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        contactSection.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  if (contactSection) {
    observer.observe(contactSection);
  }
});




// POP UP MESSAGE
document.querySelector('.contact-tab3').addEventListener('submit', function(e) {
    e.preventDefault();

    const notification = document.getElementById('notification');

    notification.classList.remove('show', 'hide');

    void notification.offsetWidth;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
        notification.classList.add('hide');
    }, 3000);

    this.reset();
});

