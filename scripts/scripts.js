function dosearch() {
	var sf = document.searchform;
	var submitto =
		sf.sengines.options[sf.sengines.selectedIndex].value +
		escape(sf.searchterms.value);
	window.open(submitto);
	return false;
}

let sidebar = document.querySelector("#sidebar");
let closeBtn = document.querySelector("#menuBtn");

closeBtn.addEventListener("click", () => {
	sidebar.classList.toggle("open");
	menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
	if (sidebar.classList.contains("open")) {
		closeBtn.innerHTML = '<img src="assets/icons/close.png" alt="❌">'; //replacing the iocns class
	} else {
		closeBtn.innerHTML = '<img src="assets/icons/menu.png" alt="➡️">'; //replacing the iocns class
	}
}

const themeSwitch = document.querySelector("#themeSwitch");
const doc = document.firstElementChild;

themeSwitch.addEventListener("input", (e) => setTheme(e.target.value));

const setTheme = (theme) => doc.setAttribute("color-scheme", theme);
