const navbar = `
<nav id="sidebar">
	<div id="navHeader">
		<div class="navItem" id="logo">
			<a href="">S.A.D</a>
		</div>
		<div class="navItem" id="menuBtnContainer">
			<span class="navBtn" id="menuBtn" title="Open/Close Nav"><i class="fa-duotone fa-bars"></i></span>
		</div>
	</div>
	<ul id="navMenu">
		<li class="navItem">
			<a href="index.html" class="navBtn active" aria-current="page" data-bs-title="Home" data-bs-toggle="tooltip" data-bs-placement="right">
				<span><i class="fa-duotone fa-house"></i></span>
				<span>Home</span>
			</a>
		</li>
		<li class="navItem">
			<a href="news.html" class="navBtn">
				<span><i class="fa-duotone fa-newspaper"></i></span>
				<span>News</span>
			</a>
		</li>
		<li class="navItem">
			<a href="tools.html" class="navBtn">
				<span><i class="fa-duotone fa-screwdriver-wrench"></i></span>
				<span>Tools</span>
			</a>
		</li>
		<li class="navItem">
			<a href="games.html" class="navBtn">
				<span><i class="fa-duotone fa-gamepad-modern"></i></span>
				<span>Games</span>
			</a>
		</li>
		<li class="navItem" id="themeContainer">
			<button class="navBtn" data-modal-target="#settingsModal" id="settingBtn">
				<span><i class="fa-regular fa-gear"></i></span>
				<span>Settings</span>
			</button>
			<div id="settingsModal" class="modal">
				<div class="modal-body">
				<ul>
			<li class="navItem">
				<button class="navBtn">
					<span><i class="fa-regular fa-universal-access"></i></span>
					<span>A11y</span>
				</button>
			</li>
			<li class="navItem">
				<label class="navBtn" for="colorPicker">
					<span><i class="fa-duotone fa-palette"></i></span>
					<span>Colors</span>
				</label>
				<input type="color" name="colorPicker" id="colorPicker"></input>
			</li>
			<li class="navItem">
				<button class="navBtn">
					<span><i class="fa-duotone fa-music"></i></span>
					<span>Music</span>
				</button>
			</li>
			<li class="navItem">
				<button class="navBtn theme-toggle" id="theme-toggle" title="Toggles light & dark" aria-label="auto">
					<span><i class="fa-duotone fa-circle-half-stroke"></i></span>
					<span>Theme</span>
				</button>
			</li>
			</ul>
				</div>
			</div>
		</li>
	</ul>
</nav>
`;
// inserting navbar in beginning of body
document.body.insertAdjacentHTML("afterbegin", navbar);
