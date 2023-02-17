function callAll(jsfiles) {
	var src = document.createElement("script");
	src.setAttribute("type", "text/javascript");
	src.setAttribute("src", jsfiles);
	document.getElementsByTagName("head")[0].appendChild(src);
}
callAll("scripts/components/colors.js");
callAll("scripts/components/theme.js");
//=====
callAll("scripts/components/canvas.js");
callAll("scripts/components/menu.js");
//=====
callAll("scripts/components/clock.js");
callAll("scripts/components/search.js");
callAll("scripts/components/modals.js");
