// Get elements from the DOM
const navBar = document.querySelector('.nav-bar');
const mobilePopup = document.querySelector('.mobile-popup');
const navClose = document.querySelector('.nav-close');

// Open the mobile menu when the nav-bar is clicked
navBar.addEventListener('click', () => {
  mobilePopup.classList.add('active');
  navBar.style.display = 'none';  // Hide the nav-bar (hamburger icon)
  navClose.style.display = 'block';  // Show the close button
});

// Close the mobile menu when the nav-close icon is clicked
navClose.addEventListener('click', () => {
  mobilePopup.classList.remove('active');
  navBar.style.display = 'block';  // Show the nav-bar (hamburger icon)
  navClose.style.display = 'none';  // Hide the close button
});