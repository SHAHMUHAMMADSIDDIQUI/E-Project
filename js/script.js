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




  let Productone = document.getElementById("productone");
  let Producttwo = document.getElementById("producttwo");
  let Productthree = document.getElementById("productthree");
  let Productfour = document.getElementById("productfour");
  let Productfive = document.getElementById("productfive");
  let Productsix = document.getElementById("productsix");
  let Productseven = document.getElementById("productseven");
  let Producteight = document.getElementById("producteight");
  let topsellingheading = document.getElementById("Topsellhead");


  if (window.scrollY > 120) {
    /* Heading Para */
    topsellingheading.style.margin.top = "3rem"
    topsellingheading.style.textAlign = "center";
    topsellingheading.style.opacity = "1";
    topsellingheading.style.webkitAnimation = "fadeinner 5s forwards";
    topsellingheading.style.animation = "fadeinner 5s forwards";

    /* Production One */
    Productone.style.border = "1px solid #ccc";
    Productone.style.borderRadius = "5px";
    Productone.style.padding = "20px";
    Productone.style.webkitAnimation = "slideleft 1s forwards";
    Productone.style.animation = "slideleft 1s forwards";
    Productone.style.webkitAnimationDuration = "var(--animate-duration)";
    Productone.style.animationDuration = "var(--animate-duration)";
    Productone.style.webkitAnimationFillMode = "both";
    Productone.style.animationFillMode = "both";
    Productone.style.opacity = "1";


    /* Product Two */
    Productone.style.border = "1px solid #ccc";
    Producttwo.style.borderRadius = "5px";
    Producttwo.style.padding = "20px";
    Producttwo.style.webkitAnimation = "slideleft 1s forwards";
    Producttwo.style.animation = "slideleft 1s forwards";
    Producttwo.style.webkitAnimationDuration = "var(--animate-duration)";
    Producttwo.style.animationDuration = "var(--animate-duration)";
    Producttwo.style.webkitAnimationFillMode = "both";
    Producttwo.style.animationFillMode = "both";
    Producttwo.style.opacity = "1";

/* Product Three */Productone.style.border = "1px solid #ccc";
    Productthree.style.borderRadius = "5px";
    Productthree.style.padding = "20px";
    Productthree.style.webkitAnimation = "slideRight 1s forwards";
    Productthree.style.animation = "slideRight 1s forwards";
    Productthree.style.webkitAnimationDuration = "var(--animate-duration)";
    Productthree.style.animationDuration = "var(--animate-duration)";
    Productthree.style.webkitAnimationFillMode = "both";
    Productthree.style.animationFillMode = "both";
    Productthree.style.opacity = "1";

    /* Product Four */Productone.style.border = "1px solid #ccc";
    Productfour.style.borderRadius = "5px";
    Productfour.style.padding = "20px";
    Productfour.style.webkitAnimation = "slideRight 1s forwards";
    Productfour.style.animation = "slideRight 1s forwards";
    Productfour.style.webkitAnimationDuration = "var(--animate-duration)";
    Productfour.style.animationDuration = "var(--animate-duration)";
    Productfour.style.webkitAnimationFillMode = "both";
    Productfour.style.animationFillMode = "both";
    Productfour.style.opacity = "1";

    /* Production Five */
    Productfive.style.border = "1px solid #ccc";
    Productfive.style.borderRadius = "5px";
    Productfive.style.padding = "20px";
    Productfive.style.webkitAnimation = "slideleft 1s forwards";
    Productfive.style.animation = "slideleft 1s forwards";
    Productfive.style.webkitAnimationDuration = "var(--animate-duration)";
    Productfive.style.animationDuration = "var(--animate-duration)";
    Productfive.style.webkitAnimationFillMode = "both";
    Productfive.style.animationFillMode = "both";
    Productfive.style.opacity = "1";

    /* Production Six */
    Productsix.style.border = "1px solid #ccc";
    Productsix.style.borderRadius = "5px";
    Productsix.style.padding = "20px";
    Productsix.style.webkitAnimation = "slideleft 1s forwards";
    Productsix.style.animation = "slideleft 1s forwards";
    Productsix.style.webkitAnimationDuration = "var(--animate-duration)";
    Productsix.style.animationDuration = "var(--animate-duration)";
    Productsix.style.webkitAnimationFillMode = "both";
    Productsix.style.animationFillMode = "both";
    Productsix.style.opacity = "1";

    /* Product Seven */
    Productone.style.border = "1px solid #ccc";
    Productseven.style.borderRadius = "5px";
    Productseven.style.padding = "20px";
    Productseven.style.webkitAnimation = "slideRight 1s forwards";
    Productseven.style.animation = "slideRight 1s forwards";
    Productseven.style.webkitAnimationDuration = "var(--animate-duration)";
    Productseven.style.animationDuration = "var(--animate-duration)";
    Productseven.style.webkitAnimationFillMode = "both";
    Productseven.style.animationFillMode = "both";
    Productseven.style.opacity = "1";

    /* Product Seven */
    Productone.style.border = "1px solid #ccc";
    Producteight.style.borderRadius = "5px";
    Producteight.style.padding = "20px";
    Producteight.style.webkitAnimation = "slideRight 1s forwards";
    Producteight.style.animation = "slideRight 1s forwards";
    Producteight.style.webkitAnimationDuration = "var(--animate-duration)";
    Producteight.style.animationDuration = "var(--animate-duration)";
    Producteight.style.webkitAnimationFillMode = "both";
    Producteight.style.animationFillMode = "both";
    Producteight.style.opacity = "1";

  }



  let cardone = document.getElementById("Cardone");
  let cardtwo = document.getElementById("Cardtwo");
  let cardthree = document.getElementById("Cardthree");
  let cardfour = document.getElementById("Cardfour");
  if (window.scrollY > 1000) {

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




  let Productone = document.getElementById("productone");
  let Producttwo = document.getElementById("producttwo");
  let Productthree = document.getElementById("productthree");
  let Productfour = document.getElementById("productfour");
  let Productfive = document.getElementById("productfive");
  let Productsix = document.getElementById("productsix");
  let Productseven = document.getElementById("productseven");
  let Producteight = document.getElementById("producteight");
  let topsellingheading = document.getElementById("Topsellhead");


  if (window.scrollY > 200) {
    /* Heading Para */
    topsellingheading.style.margin.top = "3rem"
    topsellingheading.style.textAlign = "center";
    topsellingheading.style.opacity = "1";
    topsellingheading.style.webkitAnimation = "fadeinner 5s forwards";
    topsellingheading.style.animation = "fadeinner 5s forwards";

    /* Production One */
    Productone.style.border = "1px solid #ccc";
    Productone.style.padding = "20px";
    Productone.style.webkitAnimation = "slideleft 1s forwards";
    Productone.style.animation = "slideleft 1s forwards";
    Productone.style.webkitAnimationDuration = "var(--animate-duration)";
    Productone.style.animationDuration = "var(--animate-duration)";
    Productone.style.webkitAnimationFillMode = "both";
    Productone.style.animationFillMode = "both";
    Productone.style.opacity = "1";


    /* Product Two */
    Productone.style.border = "1px solid #ccc";
    Producttwo.style.padding = "20px";
    Producttwo.style.webkitAnimation = "slideleft 1s forwards";
    Producttwo.style.animation = "slideleft 1s forwards";
    Producttwo.style.webkitAnimationDuration = "var(--animate-duration)";
    Producttwo.style.animationDuration = "var(--animate-duration)";
    Producttwo.style.webkitAnimationFillMode = "both";
    Producttwo.style.animationFillMode = "both";
    Producttwo.style.opacity = "1";

/* Product Three */Productone.style.border = "1px solid #ccc";
    Productthree.style.padding = "20px";
    Productthree.style.webkitAnimation = "slideRight 1s forwards";
    Productthree.style.animation = "slideRight 1s forwards";
    Productthree.style.webkitAnimationDuration = "var(--animate-duration)";
    Productthree.style.animationDuration = "var(--animate-duration)";
    Productthree.style.webkitAnimationFillMode = "both";
    Productthree.style.animationFillMode = "both";
    Productthree.style.opacity = "1";

    /* Product Four */Productone.style.border = "1px solid #ccc";
    Productfour.style.padding = "20px";
    Productfour.style.webkitAnimation = "slideRight 1s forwards";
    Productfour.style.animation = "slideRight 1s forwards";
    Productfour.style.webkitAnimationDuration = "var(--animate-duration)";
    Productfour.style.animationDuration = "var(--animate-duration)";
    Productfour.style.webkitAnimationFillMode = "both";
    Productfour.style.animationFillMode = "both";
    Productfour.style.opacity = "1";

    /* Production Five */
    Productfive.style.border = "1px solid #ccc";
    Productfive.style.padding = "20px";
    Productfive.style.webkitAnimation = "slideleft 1s forwards";
    Productfive.style.animation = "slideleft 1s forwards";
    Productfive.style.webkitAnimationDuration = "var(--animate-duration)";
    Productfive.style.animationDuration = "var(--animate-duration)";
    Productfive.style.webkitAnimationFillMode = "both";
    Productfive.style.animationFillMode = "both";
    Productfive.style.opacity = "1";

    /* Production Six */
    Productsix.style.border = "1px solid #ccc";
    Productsix.style.padding = "20px";
    Productsix.style.webkitAnimation = "slideleft 1s forwards";
    Productsix.style.animation = "slideleft 1s forwards";
    Productsix.style.webkitAnimationDuration = "var(--animate-duration)";
    Productsix.style.animationDuration = "var(--animate-duration)";
    Productsix.style.webkitAnimationFillMode = "both";
    Productsix.style.animationFillMode = "both";
    Productsix.style.opacity = "1";

    /* Product Seven */
    Productone.style.border = "1px solid #ccc";
    Productseven.style.padding = "20px";
    Productseven.style.webkitAnimation = "slideRight 1s forwards";
    Productseven.style.animation = "slideRight 1s forwards";
    Productseven.style.webkitAnimationDuration = "var(--animate-duration)";
    Productseven.style.animationDuration = "var(--animate-duration)";
    Productseven.style.webkitAnimationFillMode = "both";
    Productseven.style.animationFillMode = "both";
    Productseven.style.opacity = "1";

    /* Product Seven */
    Productone.style.border = "1px solid #ccc";
    Producteight.style.padding = "20px";
    Producteight.style.webkitAnimation = "slideRight 1s forwards";
    Producteight.style.animation = "slideRight 1s forwards";
    Producteight.style.webkitAnimationDuration = "var(--animate-duration)";
    Producteight.style.animationDuration = "var(--animate-duration)";
    Producteight.style.webkitAnimationFillMode = "both";
    Producteight.style.animationFillMode = "both";
    Producteight.style.opacity = "1";

  }

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
