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

// ===== Canvas Begins ===== //

let c = document.getElementById("c");
let ctx = c.getContext("2d");

function setup() {
	c.height = window.innerHeight;
	c.width = window.innerWidth;

	let matrix = "123456780ABCDEFGHIJKLMNOPQRTabcdefghijklmnopqrstuvwxyz";
	matrix = matrix.split("");

	let font_size = 16;
	let columns = c.width / font_size;
	let drops = [];

	for (let x = 0; x < columns; x++) drops[x] = 1;

	function draw() {
		let theme = localStorage.getItem("theme-preference");
		if (theme === "dark") {
			ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
		} else if (theme === "light") {
			ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
		} else {
			theme = "light";
			ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
		}
		ctx.fillRect(0, 0, c.width, c.height);
		ctx.fillStyle = getComputedStyle(root).getPropertyValue("--variable-color");
		const observer = new MutationObserver(() => {
			ctx.fillStyle = getComputedStyle(root).getPropertyValue("--variable-color");
		});
		observer.observe(root, { attributes: true });
		ctx.font = font_size + "px matrix";

		for (let i = 0; i < drops.length; i++) {
			let text = matrix[Math.floor(Math.random() * matrix.length)];
			ctx.fillText(text, i * font_size, drops[i] * font_size);
			if (drops[i] * font_size > c.height && Math.random() > 0.975) drops[i] = 0;
			drops[i]++;
		}
	}

	setInterval(draw, 33);

	window.addEventListener("resize", () => {
		c.height = window.innerHeight;
		c.width = window.innerWidth;
		columns = c.width / font_size;
		drops = [];
		for (let x = 0; x < columns; x++) drops[x] = 1;
		draw();
	});
}

setup();
