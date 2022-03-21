new ClipboardJS(".btn");

function change() {
	document.getElementById("copy").innerHTML = "Copied!";
	setTimeout(function () {
		document.getElementById("copy").innerHTML = "Copy Email";
	}, 2000);
}
