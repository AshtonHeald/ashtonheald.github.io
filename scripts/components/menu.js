//==================================================
// Menu Scripts
//==================================================
let sidebar = document.querySelector("#sidebar");
let menuBtn = document.querySelector("#menuBtn");

menuBtn.addEventListener("click", () => {
	sidebar.classList.toggle("open");
	menuBtnChange();
});
// following are the code to change sidebar button(optional)
function menuBtnChange() {
	if (sidebar.classList.contains("open")) {
		menuBtn.innerHTML = '<i class="fa-duotone fa-arrow-left-long"></i>';
	} else {
		menuBtn.innerHTML = '<i class="fa-duotone fa-bars"></i>';
	}
}
