// Get elements from the DOM
const navBar = document.querySelector(".nav-bar");
const mobilePopup = document.querySelector(".mobile-popup");
const navClose = document.querySelector(".nav-close");
const mobileNavLinks = document.querySelectorAll(".mobile-popup a"); // Select all links inside mobile-popup

// Open the mobile menu when the nav-bar is clicked
navBar.addEventListener("click", () => {
  mobilePopup.classList.add("active");
  navBar.style.display = "none"; // Hide the nav-bar (hamburger icon)
  navClose.style.display = "block"; // Show the close button
});

// Close the mobile menu when the nav-close icon is clicked
navClose.addEventListener("click", () => {
  mobilePopup.classList.remove("active");
  navBar.style.display = "block"; // Show the nav-bar (hamburger icon)
  navClose.style.display = "none"; // Hide the close button
});

// Close the mobile menu when any navigation link inside the mobile-popup is clicked
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobilePopup.classList.remove("active");
    navBar.style.display = "block"; // Show the nav-bar (hamburger icon)
    navClose.style.display = "none"; // Hide the close button
  });
});

// pagination for projects

document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".single-project");
  const itemsPerPage = 3;
  let currentPage = 1;

  // Function to display items based on the current page
  function displayProjects() {
    projects.forEach((project, index) => {
      project.style.display =
        index >= (currentPage - 1) * itemsPerPage &&
        index < currentPage * itemsPerPage
          ? "grid"
          : "none";
    });
    document.getElementById("page-number").textContent = currentPage;

    // Update button state
    document.getElementById("prev").disabled = currentPage === 1;
    document.getElementById("next").disabled =
      currentPage * itemsPerPage >= projects.length;

    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  }

  // Event listeners for pagination buttons
  document.getElementById("prev").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      displayProjects();
    }
  });

  document.getElementById("next").addEventListener("click", () => {
    if (currentPage * itemsPerPage < projects.length) {
      currentPage++;
      displayProjects();
    }
  });

  // Initial display of projects
  displayProjects();
});

// form input

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents default form submission

    const formData = {
      name: "Md Farhad",
      first_name: document.querySelector('input[name="first_name"]').value,
      last_name: document.querySelector('input[name="last_name"]').value,
      email: document.querySelector('input[name="email"]').value,
      queries: document.querySelector('textarea[name="queries"]').value,
    };

    console.log(formData);

    emailjs.send("contact_farhad", "template_9cldg6h", formData).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Your message has been sent!");

        // Clear the form fields after successful submission
        document.getElementById("contact-form").reset();
      },
      function (error) {
        console.error("FAILED...", error);
        alert("There was an error sending your message.");
      }
    );
  });

// testimonial slider

$(document).ready(function () {
  $(".testimonials").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,

    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
        margin: 30,
      },
      1080: {
        items: 3,
        margin: 48,
      },
    },
  });
});
