// Get the burger button element by its ID
const burgerButton = document.querySelector("#burgerButton");

// Function to toggle the navigation bar class
function hamburgerToggle() {
	// Get the navigation bar element by its ID
	const navBar = document.querySelector("#navBar");
	navBar.classList.toggle("navHamburger");
};

// Add a click event listener to the burger button
burgerButton.addEventListener("click", hamburgerToggle);

export { hamburgerToggle };