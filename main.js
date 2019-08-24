// Get modal element
var modal = document.getElementById("simpleModal");

// Get open modal button
var modalBtn = document.getElementById("modalBtn");

// Get close button
var closeBtn = document.querySelector(".closeBtn");

// Listen for open click
modalBtn.addEventListener("click", openModal);

// Listen for close click
closeBtn.addEventListener("click", closeModal);

// Listen for outside click
window.addEventListener("click", clickOutside);

// Function to open modal
function openModal() {
  //  we are selecting the CSS 'display' property from the modal class
  // and changing it to 'block'
  modal.style.display = "block";
}

// Function to close modal
function closeModal() {
  modal.style.display = "none";
}

// Function to close modal if we click outside of it
function clickOutside(e) {
  // we are making sure that the click is in fact outside the modal content window
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
