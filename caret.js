var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
  });
}

/*preloader
window.onload = function() {
  var preloader = document.getElementById("preloader");
  preloader.style.display = "none"; // Or preloader.parentNode.removeChild(preloader);
};
*/
const preloader = document.querySelector('.preload');
  setTimeout(() => {
    preloader.style.display = 'none'; // Hide preloader after 1 second
  }, 1000);

/*const nestedAbout = document.querySelector("h1");
const backgroundTest = document.querySelector('.backgroundtest');

nestedAbout.addEventListener('click', () => {
  backgroundTest.classList.toggle('active');
})
/*TEST*/




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

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
})*/

  /*BACKGROUND color test*/




/* Front page slideshow 

  let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
 
  slides[slideIndex-1].style.display = "block";
}
  */





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



  /*test for the src buttons*/
  window.onload = function() {
    const bannerImages = document.querySelector('.banner-images');
    const images = document.querySelectorAll('.image-container');
    const buttons = document.querySelectorAll('.file-path-btn');
    const totalImages = images.length;
    let currentIndex = 0;

    // Function to update the file path button text
    function updateFilePath() {
        buttons.forEach((button, index) => {
            if (index === currentIndex) {
                button.textContent = images[index].querySelector('img').src; // Set the file path as button text
            } else {
                button.textContent = ''; // Clear other buttons
            }
        });
    }

    // Function to scroll to the next image
    function moveToNextImage() {
        currentIndex++;
        if (currentIndex >= totalImages) {
            currentIndex = 0; // Loop back to the first image
        }
        updateFilePath();
        bannerImages.style.transform = `translateX(-${100 * currentIndex}%)`;
    }

    // Function to scroll to the previous image
    function moveToPreviousImage() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalImages - 1; // Go to the last image
        }
        updateFilePath();
        bannerImages.style.transform = `translateX(-${100 * currentIndex}%)`;
    }

    // Auto-scroll every 4 seconds
    setInterval(moveToNextImage, 4000);

    // Event listeners for the next/previous buttons
    document.querySelector('.next-btn').addEventListener('click', moveToNextImage);
    document.querySelector('.prev-btn').addEventListener('click', moveToPreviousImage);

    // Initially update file path for the first image
    updateFilePath();
};

//test for ham menu//

function toggleMenu() {
  var menu = document.querySelector('.myUL');
  var overlay = document.querySelector('.off-screen-menu');
  var h1 = document.querySelector('h1'); // Select the h1 element
  var hamburgerIcon = document.querySelector('.hamburger-icon'); // Select the hamburger icon

  menu.classList.toggle('show'); // Toggle the visibility of the menu
  overlay.classList.toggle('show'); // Toggle the overlay background

  // Toggle the h1 color to white when the menu is shown
  h1.classList.toggle('h1-white');

  // Toggle the hamburger icon color to white when the menu is shown
  hamburgerIcon.classList.toggle('hamburger-icon-white');
}

/*function toggleMenu() {
  var menu = document.querySelector('.myUL');
  var overlay = document.querySelector('.off-screen-menu');
  menu.classList.toggle('show'); // Toggle the visibility of the menu
  overlay.classList.toggle('show'); // Toggle the overlay background

}*/

/*const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');


hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
})*/
