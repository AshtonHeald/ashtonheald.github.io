// === === === === ===
// == Loader Script ==
// === === === === ===
const loader = document.querySelector(".loader");
const main = document.querySelector("#container");
function init() {
	setTimeout(() => {
		loader.style.opacity = 0;
		loader.style.display = "none";

		main.style.display = "block";
		setTimeout(() => (main.style.opacity = 1), 50);
	}, 1200);
}
init();
// === === === === ===
// == Slide Scripts ==
// === === === === ===
var slideIndex = 1;
var myTimer;
window.addEventListener("load", function () {
	showSlides(slideIndex);
	myTimer = setInterval(function () {
		plusSlides(1);
	}, 4000);
	// MOUSEENTER PAUSE/RESUME
	let slideshowContainer = document.getElementsByClassName(
		"slideshow-container"
	)[0];
	slideshowContainer.addEventListener("mouseenter", pause);
	slideshowContainer.addEventListener("mouseleave", resume);
	slideshowContainer.addEventListener("focusin", pause);
	slideshowContainer.addEventListener("focusout", resume);
});
// NEXT AND PREVIOUS CONTROL
function plusSlides(n) {
	clearInterval(myTimer);
	if (n < 0) {
		showSlides((slideIndex -= 1));
	} else {
		showSlides((slideIndex += 1));
	}
	// ARROWS PART OF MOUSEENTER PAUSE/RESUME
	if (n === -1) {
		myTimer = setInterval(function () {
			plusSlides(n + 2);
		}, 4000);
	} else {
		myTimer = setInterval(function () {
			plusSlides(n + 1);
		}, 4000);
	}
}
// Controls the current slide and resets interval if needed
function currentSlide(n) {
	clearInterval(myTimer);
	myTimer = setInterval(function () {
		plusSlides(n + 1);
	}, 4000);
	showSlides((slideIndex = n));
}
function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "grid";
}
pause = () => {
	clearInterval(myTimer);
};
resume = () => {
	clearInterval(myTimer);
	myTimer = setInterval(function () {
		plusSlides(slideIndex);
	}, 4000);
};
// === === === === ===
// == Theme Scripts ==
// === === === === ===
var toggle = document.getElementById("theme-toggle");

var storedTheme =
	localStorage.getItem("theme") ||
	(window.matchMedia("(prefers-color-scheme: light)").matches
		? "light"
		: "dark");
if (storedTheme)
	document.documentElement.setAttribute("data-theme", storedTheme);

toggle.onclick = function () {
	var currentTheme = document.documentElement.getAttribute("data-theme");
	var targetTheme = "light";

	if (currentTheme === "light") {
		targetTheme = "dark";
	}

	document.documentElement.setAttribute("data-theme", targetTheme);
	localStorage.setItem("theme", targetTheme);
};
