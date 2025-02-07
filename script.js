// HTML CSS progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${htmlStartValue * 3.6}deg, #ededed 0deg)`;

  if (htmlStartValue === htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// JavaScript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${javascriptStartValue * 3.6}deg, #ededed 0deg)`;

  if (javascriptStartValue === javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
  phpEndValue = 80,
  phpspeed = 30;

let progressphp = setInterval(() => {
  phpStartValue++;

  phpValue.textContent = `${phpStartValue}%`;
  phpProgress.style.background = `conic-gradient(#20c997 ${phpStartValue * 3.6}deg, #ededed 0deg)`;

  if (phpStartValue === phpEndValue) {
    clearInterval(progressphp);
  }
}, phpspeed);


let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 30,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${reactStartValue * 3.6}deg, #ededed 0deg)`;

  if (reactStartValue === reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);

// Filter projects using JavaScript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value === "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});

// Sticky navbar functionality
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      document.getElementById('navbar-top').classList.add('fixed-top');
      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.getElementById('navbar-top').classList.remove('fixed-top');
      document.body.style.paddingTop = '0';
    }
  });
});

// Back to top button functionality
let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// Toggle Project Details Function
function toggleDetails(projectId) {
  const details = document.getElementById(projectId);

  // Toggle the display of the details section
  if (details) {
    if (details.style.display === "none" || details.style.display === "") {
      details.style.display = "block";  // Show details
    } else {
      details.style.display = "none";   // Hide details
    }
  }
}
document.querySelectorAll('a[href^="#contact"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById('darkModeToggle');
  const body = document.body;

  // Check if dark mode is enabled in localStorage
  if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
  }

  // Toggle dark mode on button click
  toggleButton.addEventListener('click', () => {
    console.log('Dark Mode Button Clicked');
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.removeItem('darkMode');
    }
  });
});

