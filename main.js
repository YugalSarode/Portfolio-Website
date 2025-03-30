var style = window.getComputedStyle(document.body);
let changeBg = style.getPropertyValue('--changeBg');
let changeColor = style.getPropertyValue('--changeColor');
let navBg = style.getPropertyValue('--navBg');
let navColor = style.getPropertyValue('--navColor');
let change = "#f0f0f0";
let ctn = document.querySelectorAll(".ctn");

let hide = document.querySelectorAll(".hide");
let color = document.querySelector(".color");
let toggle = document.querySelector(".toggle");
let colors = document.querySelectorAll(".colors");
let primary = style.getPropertyValue('--primary');
let a = color.clientWidth;
let b;

let mobileToggle = document.querySelector(".mobileToggle");
let mobileNavWrap = document.querySelector(".mobileNavWrap");
let close = document.querySelectorAll(".close");


mobileToggle.addEventListener("click", () => {
  if (mobileNavWrap.offsetHeight == 50) {
    mobileNavWrap.style.height = "auto";
  } else {
    mobileNavWrap.style.height = "50px";
  }
});


close.forEach(function(element, index) {
  close[index].addEventListener("click", () => {
    mobileNavWrap.style.height = "50px";
  });
});

colors.forEach(function(element, index) {
  colors[index].addEventListener("click", () => {
    b = window.getComputedStyle(colors[index]);
    document.documentElement.style.setProperty('--primary', b.getPropertyValue("background-color"));
    color.style.left = "-100%";
    toggle.style.left = "0";
  });
});


toggle.addEventListener("click", () => {
  if (color.offsetLeft < 0) {
    toggle.style.left = a + 'px';
    color.style.left = "0";
  } else {
    toggle.style.left = "0";
    color.style.left = "-100%";
  }
});

let navWrap = document.querySelector(".navWrap");
let body = document.querySelector("body");

// Scroll Function for Navbar
function run() {
  if (window.pageYOffset > 0) {
    navWrap.style.background = '#333333';
    navWrap.style.color = '#fff';
    ctn[0].style.background = "#f0f0f0";
    ctn[0].style.color = "#1b1b1b";
    ctn[1].style.background = "#f0f0f0";
    ctn[1].style.color = "#1b1b1b";
  } else {
    navWrap.style.background = 'transparent';
    navWrap.style.color = 'var(--changeColor)';
    ctn[0].style.background = "#1b1b1b";
    ctn[0].style.color = "#f0f0f0";
    ctn[1].style.background = "#1b1b1b";
    ctn[1].style.color = "#f0f0f0";
  }
  

  const animateElements = document.querySelectorAll('.animate-scroll');
  animateElements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (elementPosition < screenPosition) {
      element.classList.add('animated');
    }
  });
}


ctn.forEach(function(element, index) {
  ctn[index].addEventListener("click", () => {
    mobileNavWrap.style.height = "50px";
    if (change == "#f0f0f0") {
      change = "#1b1b1b";
      hide[0].style.display = "block";
      hide[1].style.display = "none";
      ctn[index].style.background = "#f0f0f0";
      ctn[index].style.color = "#1b1b1b";
      document.documentElement.style.setProperty('--changeBg', '#1b1b1b');
      document.documentElement.style.setProperty('--changeColor', '#f0f0f0');

      if (typeof pJSDom !== 'undefined' && pJSDom.length > 0) {
        pJSDom[0].pJS.particles.line_linked.color = '#ffffff';
        pJSDom[0].pJS.fn.particlesRefresh();
      }
    } else {
      change = "#f0f0f0";
      hide[0].style.display = "none";
      hide[1].style.display = "block";
      ctn[index].style.background = "#1b1b1b";
      ctn[index].style.color = "#f0f0f0";
      document.documentElement.style.setProperty('--changeBg', '#f0f0f0');
      document.documentElement.style.setProperty('--changeColor', '#1b1b1b');

      if (typeof pJSDom !== 'undefined' && pJSDom.length > 0) {
        pJSDom[0].pJS.particles.line_linked.color = '#1b1b1b';
        pJSDom[0].pJS.fn.particlesRefresh();
      }
    }
  });
});

document.querySelectorAll('.skill-progress').forEach(item => {
  const percent = item.getAttribute('data-percent');
  const fill = item.querySelector('.progress-circle-fill');
  const dashoffset = 251 - (251 * percent / 100);
  fill.style.setProperty('--percent', percent);
  fill.style.strokeDashoffset = dashoffset;
  item.querySelector('.skill-percent').textContent = `${percent}%`;
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: '#f0f0f0' },
    shape: {
      type: "circle",
      stroke: { width: 0, color: changeBg },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.4,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#1b1b1b",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});


document.addEventListener('DOMContentLoaded', () => {
  run(); 
});

function createBackgroundElements() {
      const background = document.querySelector('.background-elements');
      const colors = ['rgba(255, 32, 78, 0.03)', 'rgba(255, 32, 78, 0.05)', 'rgba(255, 32, 78, 0.02)'];
      const animations = ['float', 'float-up', 'float-diagonal', 'rotate'];
      
      // Create 10 random elements
      for (let i = 0; i < 10; i++) {
        const element = document.createElement('div');
        const size = Math.random() * 200 + 50;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const duration = Math.random() * 30 + 15;
        const animation = animations[Math.floor(Math.random() * animations.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Randomly choose shape type
        const shapeType = Math.floor(Math.random() * 3);
        let shapeClass = '';
        
        if (shapeType === 0) {
          shapeClass = 'bg-circle';
          element.style.borderRadius = '50%';
        } else if (shapeType === 1) {
          shapeClass = 'bg-square';
          element.style.borderRadius = '5px';
        } else {
          shapeClass = 'bg-triangle';
          element.style.width = '0';
          element.style.height = '0';
          element.style.borderStyle = 'solid';
          element.style.borderColor = 'transparent';
          element.style.borderBottomColor = color;
          element.style.borderWidth = `0 ${size/2}px ${size}px ${size/2}px`;
          element.style.background = 'transparent';
        }
        
        element.className = shapeClass;
        element.style.width = shapeType !== 2 ? `${size}px` : '0';
        element.style.height = shapeType !== 2 ? `${size}px` : '0';
        element.style.top = `${top}%`;
        element.style.left = `${left}%`;
        element.style.background = shapeType !== 2 ? color : 'transparent';
        element.style.animation = `${animation} ${duration}s infinite linear`;
        element.style.opacity = Math.random() * 0.5 + 0.1;
        
        background.appendChild(element);
      }
    }
    
    // Call the function when DOM is loaded
    document.addEventListener('DOMContentLoaded', createBackgroundElements);