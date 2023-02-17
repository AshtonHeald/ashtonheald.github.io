let message = "Right-click disabled";
function clickIE() {
	if (document.all) {
		message;
		return false;
	}
}
function clickNS(e) {
	if (document.layers || (document.getElementById && !document.all)) {
		if (e.which == 2 || e.which == 3) {
			message;
			return false;
		}
	}
}
if (document.layers) {
	document.captureEvents(Event.MOUSEDOWN);
	document.onmousedown = clickNS;
} else {
	document.onmouseup = clickNS;
	document.oncontextmenu = clickIE;
}
document.oncontextmenu = new Function("return false");

let c = document.getElementById("c");
let ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//matrix characters - taken from the unicode charset
let matrix = "123456780ABCDEFGHIJKLMNOPQRTabcdefghijklmnopqrstuvwxyz";
//converting the string into an array of single characters
matrix = matrix.split("");

let font_size = 16;
let columns = c.width / font_size; //number of columns for the rain
//an array of drops - one per column
let drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for (let x = 0; x < columns; x++) drops[x] = 1;

//drawing the characters
function draw() {
	//Black BG for the canvas
	//translucent BG to show trail
	// ===================================================================
	//Make these changable varibles
	let theme = localStorage.getItem("theme-preference");
	if (theme === "dark") {
		ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
	} else if (theme === "light") {
		ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
	} else {
		theme = "light"; // set default theme to light
		ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
	}
	// ===================================
	ctx.fillRect(0, 0, c.width, c.height);
	// ===================================
	//ctx.fillStyle = "#0F0"; //green text
	//ctx.fillStyle = "#FE019A"; //pink text
	ctx.fillStyle = getComputedStyle(root).getPropertyValue("--variable-color");
	const observer = new MutationObserver(() => {
		ctx.fillStyle = getComputedStyle(root).getPropertyValue("--variable-color");
	});
	observer.observe(root, { attributes: true });
	// ===================================================================
	ctx.font = font_size + "px matrix";
	//looping over drops
	for (let i = 0; i < drops.length; i++) {
		//a random matrix character to print
		let text = matrix[Math.floor(Math.random() * matrix.length)];
		//x = i*font_size, y = value of drops[i]*font_size
		ctx.fillText(text, i * font_size, drops[i] * font_size);

		//sending the drop back to the top randomly after it has crossed the screen
		//adding a randomness to the reset to make the drops scattered on the Y axis
		if (drops[i] * font_size > c.height && Math.random() > 0.975) drops[i] = 0;

		//incrementing Y coordinate
		drops[i]++;
	}
}

setInterval(draw, 33);
