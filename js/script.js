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


window.addEventListener("scroll", function () {
  let product = document.getElementById("product");
  if (window.scrollY > 250) {
      product.style.animationName = "slideInLeft";
      product.style.webkitAnimationName = "slideInLeft";
      product.style.opacity = 1;
  }
});

