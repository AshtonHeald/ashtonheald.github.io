const header = `
<header>
	<div id="marqueContainer">
		<marquee behavior="" direction="" scrollamount="4" hspace="5">
			<span>Information Coming Soon</span>
		</marquee>
	</div>
	<div id="time">
	    <span id="clock"></span>
		</div>
</header>
`;
// inserting navbar in beginning of body
document.body.insertAdjacentHTML("afterbegin", header);
