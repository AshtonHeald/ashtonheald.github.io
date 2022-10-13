//==================================================
// Search Scripts
//==================================================
function dosearch() {
  var sf = document.searchform;
  var submitto =
    sf.sengines.options[sf.sengines.selectedIndex].value +
    escape(sf.searchterms.value);
  window.open(submitto);
  return false;
}
//==================================================
// Menu Scripts
//==================================================
let sidebar = document.querySelector("#sidebar");
let closeBtn = document.querySelector("#menuBtn");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
});
// following are the code to change sidebar button(optional)
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.innerHTML = '<i class="fa-duotone fa-circle-xmark"></i>'; //replacing the iocns class
  } else {
    closeBtn.innerHTML = '<i class="fa-duotone fa-bars"></i>'; //replacing the iocns class
  }
}
//==================================================
// Theme Scripts
//==================================================
const storageKey = "theme-preference";

const onClick = () => {
  // flip current value
  theme.value = theme.value === "light" ? "dark" : "light";

  setPreference();
};

const getColorPreference = () => {
  if (localStorage.getItem(storageKey)) return localStorage.getItem(storageKey);
  else
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
};

const setPreference = () => {
  localStorage.setItem(storageKey, theme.value);
  reflectPreference();
};

const reflectPreference = () => {
  document.firstElementChild.setAttribute("data-theme", theme.value);

  document
    .querySelector("#theme-toggle")
    ?.setAttribute("aria-label", theme.value);
};

const theme = {
  value: getColorPreference(),
};

// set early so no page flashes / CSS is made aware
reflectPreference();

window.onload = () => {
  // set on load so screen readers can see latest value on the button
  reflectPreference();

  // now this script can find and listen for clicks on the control
  document.querySelector("#theme-toggle").addEventListener("click", onClick);
};

// sync with system changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    theme.value = isDark ? "dark" : "light";
    setPreference();
  });
//==================================================
// Clock Scripts
//==================================================

let clock = () => {
  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  //let secs = date.getSeconds();
  let period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs >= 12) {
    hrs = hrs - 12;
    period = "PM";
  }
  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  //secs = secs < 10 ? "0" + secs : secs;

  let time = `${hrs}:${mins} ${period}`;
  document.getElementById("clock").innerText = time;
  setTimeout(clock, 1000);
};

clock();
