const colorPicker = document.getElementById("colorPicker");
const root = document.documentElement;

const storedColor = localStorage.getItem("color");
if (storedColor) {
	colorPicker.value = storedColor;
	root.style.setProperty("--variable-color", storedColor);
}

colorPicker.addEventListener("input", (event) => {
	const newColor = event.target.value;
	root.style.setProperty("--variable-color", newColor);
	localStorage.setItem("color", newColor);
});
