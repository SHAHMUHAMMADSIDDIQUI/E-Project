/*[[[[[    Visitior Count   ]]]]]]]]*/
// Retrieve visitor count from localStorage or initialize it to 0
let visitorCount = localStorage.getItem('visitorCount');
visitorCount = visitorCount ? parseInt(visitorCount) : 0;

// Update visitor count display
document.getElementById('visitor-count').textContent = visitorCount;

// Increment visitor count when page is loaded
visitorCount++;
// Save updated visitor count to localStorage
localStorage.setItem('visitorCount', visitorCount.toString());
// Call the function to initialize the ticker and visitor count
updateTickerAndVisitorCount();

// Update ticker and visitor count every second
setInterval(updateTickerAndVisitorCount, 1000);



/*[[[[[[[    Date And Time   ]]]]]]]]*/
// Define a function to update the ticker and visitor count
function updateTickerAndVisitorCount() {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  document.getElementById('ticker').textContent = `Date: ${date} | Time: ${time}`;
}
function toggleclass() {
  let a = document.getElementById("MobilehomeSection");
  a.classList.toggle("showMenu");
}


// Function to handle scroll events for desktop screens
function desktopScrollHandler() {
  let cardone = document.getElementById("Cardone");
  let cardtwo = document.getElementById("Cardtwo");
  let cardthree = document.getElementById("Cardthree");
  let cardfour = document.getElementById("Cardfour");
  if (window.scrollY > 2200) {

    /* For CardOne */
    cardone.style.webkitAnimation = "cardslideup 1s forwards";
    cardone.style.animation = "cardslideup 1s forwards";
    cardone.style.webkitAnimationDuration = "var(--animate-duration)";
    cardone.style.animationDuration = "var(--animate-duration)";
    cardone.style.webkitAnimationFillMode = "both";
    cardone.style.animationFillMode = "both";
    cardone.style.opacity = "1";
    cardone.style.transition = "2s"

    /* For CardTwo */
    cardtwo.style.webkitAnimation = "cardslidedown 1s forwards";
    cardtwo.style.animation = "cardslidedown 1s forwards";
    cardtwo.style.webkitAnimationDuration = "var(--animate-duration)";
    cardtwo.style.animationDuration = "var(--animate-duration)";
    cardtwo.style.webkitAnimationFillMode = "both";
    cardtwo.style.animationFillMode = "both";
    cardtwo.style.opacity = "1";
    cardtwo.style.transition = "2s"

    /*For CardThree  */
    cardthree.style.webkitAnimation = "cardslideup 1s forwards";
    cardthree.style.animation = "cardslideup 1s forwards";
    cardthree.style.webkitAnimationDuration = "var(--animate-duration)";
    cardthree.style.animationDuration = "var(--animate-duration)";
    cardthree.style.webkitAnimationFillMode = "both";
    cardthree.style.animationFillMode = "both";
    cardthree.style.opacity = "1 ";
    cardthree.style.transition = "2s"

    /* For CardFour */
    cardfour.style.webkitAnimation = "cardslidedown 1s forwards";
    cardfour.style.animation = "cardslidedown 1s forwards";
    cardfour.style.webkitAnimationDuration = "var(--animate-duration)";
    cardfour.style.animationDuration = "var(--animate-duration)";
    cardfour.style.webkitAnimationFillMode = "both";
    cardfour.style.animationFillMode = "both";
    cardfour.style.opacity = "1";
    cardfour.style.transition = "2s"

  }
}

// Function to handle scroll events for mobile screens
function mobileScrollHandler() {
  let cardone = document.getElementById("Cardone");
  let cardtwo = document.getElementById("Cardtwo");
  let cardthree = document.getElementById("Cardthree");
  let cardfour = document.getElementById("Cardfour");
  if (window.scrollY > 1300) {
    /* For CardOne */
    cardone.style.webkitAnimation = "cardslideup 1s forwards";
    cardone.style.animation = "cardslideup 1s forwards";
    cardone.style.webkitAnimationDuration = "var(--animate-duration)";
    cardone.style.animationDuration = "var(--animate-duration)";
    cardone.style.webkitAnimationFillMode = "both";
    cardone.style.animationFillMode = "both";
    cardone.style.opacity = "1";
    cardone.style.transition = "2s"

    /* For CardTwo */
    cardtwo.style.webkitAnimation = "cardslidedown 1s forwards";
    cardtwo.style.animation = "cardslidedown 1s forwards";
    cardtwo.style.webkitAnimationDuration = "var(--animate-duration)";
    cardtwo.style.animationDuration = "var(--animate-duration)";
    cardtwo.style.webkitAnimationFillMode = "both";
    cardtwo.style.animationFillMode = "both";
    cardtwo.style.opacity = "1";
    cardtwo.style.transition = "2s"

    /*For CardThree  */
    cardthree.style.webkitAnimation = "cardslideup 1s forwards";
    cardthree.style.animation = "cardslideup 1s forwards";
    cardthree.style.webkitAnimationDuration = "var(--animate-duration)";
    cardthree.style.animationDuration = "var(--animate-duration)";
    cardthree.style.webkitAnimationFillMode = "both";
    cardthree.style.animationFillMode = "both";
    cardthree.style.opacity = "1 ";
    cardthree.style.transition = "2s"

    /* For CardFour */
    cardfour.style.webkitAnimation = "cardslidedown 1s forwards";
    cardfour.style.animation = "cardslidedown 1s forwards";
    cardfour.style.webkitAnimationDuration = "var(--animate-duration)";
    cardfour.style.animationDuration = "var(--animate-duration)";
    cardfour.style.webkitAnimationFillMode = "both";
    cardfour.style.animationFillMode = "both";
    cardfour.style.opacity = "1";
    cardfour.style.transition = "2s"

  }
}

// Check if the screen is mobile or desktop and attach the appropriate scroll event listener
function attachScrollHandler() {
  if (window.innerWidth > 768) { // Adjust the breakpoint as needed
    window.addEventListener("scroll", desktopScrollHandler);
  } else {
    window.addEventListener("scroll", mobileScrollHandler);
  }
}

// Call the function initially to attach the appropriate scroll event listener
attachScrollHandler();

// Reattach scroll event listener on window resize to handle screen size changes
window.addEventListener("resize", attachScrollHandler);






