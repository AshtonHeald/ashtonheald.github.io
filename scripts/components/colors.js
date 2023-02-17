const colorPicker = document.getElementById("colorPicker");
const root = document.documentElement;

// Check if there is a color in localStorage and update the colorPicker and the CSS variable if there is
const storedColor = localStorage.getItem("color");
if (storedColor) {
	colorPicker.value = storedColor;
	root.style.setProperty("--variable-color", storedColor);
}

// Add an event listener to the colorPicker
colorPicker.addEventListener("input", (event) => {
	const newColor = event.target.value;
	root.style.setProperty("--variable-color", newColor);
	localStorage.setItem("color", newColor); // Store the new color in localStorage
});
