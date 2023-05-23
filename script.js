// ----------------------------   BG color -------------------------
// Function to set background gradient color
function setBackgroundGradient(element, color1, color2, color3) {
  element.style.background = `linear-gradient(to bottom, ${color1}, ${color2}, ${color3})`;
}

// Get the target div element
const myDiv = document.getElementById("myDiv");

// Set the background gradient color
setBackgroundGradient(myDiv, "#000132", "#232756", "#464a7b");
// -------------------------------------------------------------------------
// Function to adjust the size of the container and content based on the window size
function adjustSize() {
  const container = document.querySelector(".container");
  const content = document.querySelector(".content");

  container.style.height = `${window.innerHeight}px`;
  container.style.width = `${window.innerWidth}px`;

  // Optional: Adjust font size based on container size
  const containerWidth = container.offsetWidth;
  const fontSize = containerWidth / 20; // Adjust the divisor as needed
  content.style.fontSize = `${fontSize}px`;
}

// Initial adjustment on page load
adjustSize();

// Adjust size on window resize
window.addEventListener("resize", adjustSize);

// Function to adjust the font size of text elements
function adjustFontSize() {
  const textElements = document.querySelectorAll(
    "h1, h2, h3, h4, h5, h6, p, span, a, li, td, caption"
  );

  textElements.forEach((element) => {
    const containerWidth = element.clientWidth;
    const desiredFontSize = containerWidth / 20; // Adjust the division factor as needed

    element.style.fontSize = `${desiredFontSize}px`;
  });
}

// Initial adjustment on page load
adjustFontSize();

// Adjust font sizes on window resize
window.addEventListener("resize", adjustFontSize);
