// Preloader hide on page load
window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    preloader.style.display = 'none';
  }
});

// Sidebar toggle for mobile
const mobileToggleBtn = document.querySelector('.mobile-toggle');
const sidebar = document.querySelector('.sidebar');

mobileToggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Smooth scroll for sidebar links
const navLinks = document.querySelectorAll('.sidebar nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
function scrollToProjects() {
  const section = document.querySelector('#projects');
  section.scrollIntoView({ behavior: 'smooth' });
}
function scrollToProjects() {
  window.scrollTo({ top: 0 });  // Upar le jao
  setTimeout(() => {
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
  }, 100); // 100ms delay
}
const roles = [
  "AI Developer",
  "Data Scientist",
  "GenAI Builder",
  "ML Engineer",
  "Prompt Engineer"
];

let i = 0, j = 0, currentRole = "", isDeleting = false;

function typeEffect() {
  const typedText = document.getElementById("typed-text");

  if (i < roles.length) {
    if (!isDeleting && j <= roles[i].length) {
      currentRole = roles[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentRole = roles[i].substring(0, j--);
    }

    typedText.textContent = currentRole;

    if (j === roles[i].length + 1) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }

    if (j === 0 && isDeleting) {
      isDeleting = false;
      i = (i + 1) % roles.length;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);






    // Remove active class from all links
    navLinks.forEach(link => link.classList.remove('active'));

    // Add active class to clicked link
    link.classList.add('active');

    // Scroll to section smoothly
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 20,  // Adjust offset if needed
        behavior: 'smooth',
      });
    }

    // On mobile, hide sidebar after clicking a link
    if (sidebar.classList.contains('active')) {
      sidebar.classList.remove('active');
    }
  });
});

