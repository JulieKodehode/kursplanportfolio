// Get the theme toggle button by its ID
const themeToggle = document.querySelector("#themeToggle");

// Function to toggle the theme
function toggleTheme() {
	// Get the body button by its ID
	const body = document.querySelector("#body");
	themeToggle.classList.toggle("moon");
	body.classList.toggle("dark");
};

// Add a click event listener to the theme toggle button
themeToggle.addEventListener("click", toggleTheme);

export { toggleTheme };