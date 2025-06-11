
/*preload*/

const dots = document.getElementById('dots');
let count = 1;

const dotInterval = setInterval(() => {
  count = (count % 3) + 1; // 1, 2, 3, then loop
  dots.textContent = '.'.repeat(count);
}, 500);

window.addEventListener('load', function () {
  clearInterval(dotInterval);
  document.getElementById('preloader').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
});


/*menu*/

function showMenu() {
  return;
  var items = document.getElementsByClassName("fade-item");
  for (let i = 0; i < items.length; ++i) {
    fadeIn(items[i], i * 500)
  }
  function fadeIn (item, delay) {
    setTimeout(() => {
      item.classList.add('fadein')
    }, delay)
  }
}

var items = document.getElementsByClassName("fade-item");
  for (let i = 0; i < items.length; ++i) {
    fadeIn(items[i], i * 50)
  }
  function fadeIn (item, delay) {
    setTimeout(() => {
      item.classList.add('fadein')
    }, delay)
  }

/*Ham menu javascript*/

/*const hamMenu = document.querySelector('.ham-menu');


  /*BACKGROUND color test*/





function showList() {
  return;
  var items = document.getElementsByClassName("fade2");
  for (let i = 0; i < items.length; ++i) {
    fadeIn(items[i], i * 500)
  }
  function fadeIn (item, delay) {
    setTimeout(() => {
      item.classList.add('fadein')
    }, delay)
  }
}

var items = document.getElementsByClassName("fade2");
  for (let i = 0; i < items.length; ++i) {
    fadeIn(items[i], i * 100)
  }
  function fadeIn (item, delay) {
    setTimeout(() => {
      item.classList.add('fadein')
    }, delay)
  }




//test for ham menu//

function toggleMenu() {
  var menu = document.querySelector('.myUL');
  var overlay = document.querySelector('.off-screen-menu');
  var h1 = document.querySelector('h1'); // Select the h1 element
  var hamburgerIcon = document.querySelector('.hamburger-icon'); // Select the hamburger icon

  menu.classList.toggle('show'); // Toggle the visibility of the menu
  overlay.classList.toggle('show'); // Toggle the overlay background

  // Toggle the h1 color to white when the menu is shown
  var h1s = document.querySelectorAll('.h1-container h1');
  h1s.forEach(h1 => h1.classList.toggle('h1-white'));
  
  // Toggle the hamburger icon color to white when the menu is shown
  hamburgerIcon.classList.toggle('hamburger-icon-white');
}





/* h2 slide in effect */


  window.addEventListener('DOMContentLoaded', () => {
    const h2 = document.querySelector('h2.slidein');
    h2.classList.add('show');
  });


/* typewriter on scroll effect*/


  const bg = document.getElementById('bg');

  function typewriter(el, text, speed = 30) {
    let index = 0;
    const interval = setInterval(() => {
      el.textContent += text.charAt(index);
      index++;
      if (index === text.length) {
        clearInterval(interval);
        el.style.borderRight = 'none'; // remove cursor
      }
    }, speed);
  }
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const fullText = el.getAttribute('data-text');
        el.textContent = ''; // clear existing
        typewriter(el, fullText);
        observer.unobserve(el); // trigger only once
      }
    });
  }, { threshold: 0.6 });
  
  document.querySelectorAll('.overlaybutton-text').forEach(el => {
    const original = el.textContent;
    el.setAttribute('data-text', original);
    observer.observe(el);
  });
  


/* tooltip effect effect*/


document.querySelectorAll('.tooltip-container').forEach(container => {
  const tooltip = container.querySelector('.tooltip-text');

  container.addEventListener('mouseenter', () => {
    tooltip.classList.add('show');
  });

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    tooltip.style.left = `${e.clientX - rect.left + 10}px`;
    tooltip.style.top = `${e.clientY - rect.top + 10}px`;
  });

  container.addEventListener('mouseleave', () => {
    tooltip.classList.remove('show');
  });
});

/*mobile tooltip and rotate effect automatic*/

// Run only on mobile
if (window.innerWidth <= 768) {
  const items = document.querySelectorAll('.rotate-on-hover');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active'); // remove when out of view
      }
    });
  }, {
    threshold: 0.3 // trigger when 30% visible
  });

  items.forEach(item => observer.observe(item));
}



/* slider on the front page */




const images = [
  'img/creative/IMG_7760-min.jpg',
  'img/creative/saintmartin.jpg',
  'img/ikea/ikea1.avif'
];

  const slideshow = document.querySelector('.hero-slideshow');
  let index = 0;

  function changeBackground() {
    // Fade out
    slideshow.style.opacity = 0;

    setTimeout(() => {
      // Change image
      slideshow.style.backgroundImage = `url(${images[index]})`;
      // Fade in
      slideshow.style.opacity = 1;

      // Next image index
      index = (index + 1) % images.length;
    }, 500); // Half of the transition duration
  }

  // Init
  slideshow.style.backgroundImage = `url(${images[0]})`;
  slideshow.style.opacity = 1;

  // Start slideshow
  setInterval(changeBackground, 3000); // Every 5 seconds



  /* the upload on top of case studies */


  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".case-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const url = link.dataset.url;
        fetch(url)
          .then((res) => res.text())
          .then((html) => {
            const loader = document.getElementById("case-study-loader");
            loader.innerHTML = `
              <div class="loaded-case-study">
                <button class="close-loader" onclick="closeLoader()">✕ Close</button>
                ${html}
              </div>`;
            loader.scrollIntoView({ behavior: "smooth" });
          });
      });
    });
  });
  
  function closeLoader() {
    document.getElementById("case-study-loader").innerHTML = "";
  }
  
  /* slide out h1 effect*/

  document.addEventListener('DOMContentLoaded', () => {
    const heading = document.getElementById('myHeading');
    const parallaxImage = document.querySelector('.parallax');
  
    if (!parallaxImage) return; // Safety check
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          heading.classList.add('hidden');
        } else {
          heading.classList.remove('hidden');
        }
      });
    }, { threshold: 0 });
  
    observer.observe(parallaxImage);
  });
  
/*parallax rectangle effect */


const rectangle = document.querySelector('.slow-rectangle');
const wrapper = document.querySelector('.poster-wrapper');

window.addEventListener('scroll', () => {
  const rectTop = wrapper.getBoundingClientRect().top;
  // Move rectangle slower vertically relative to scroll
  rectangle.style.transform = `translateY(${rectTop * 0.4}px)`;
});



/*parallax 2 */
const parallaxSections = document.querySelectorAll('.parallax-container');

window.addEventListener('scroll', () => {
  parallaxSections.forEach(section => {
    const img = section.querySelector('.parallax-img');
    const containerTop = section.getBoundingClientRect().top;

    if (containerTop < window.innerHeight && containerTop > -section.offsetHeight) {
      img.style.transform = `translateY(${containerTop * -0.2}px)`;
    }
  });
});


