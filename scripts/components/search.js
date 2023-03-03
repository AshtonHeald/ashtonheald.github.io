const selectDiv = document.querySelector("#searchEngineSelect");
const searchEngines = document.querySelector("#searchEngines");
const options = Array.from(searchEngines.options);

selectDiv.innerHTML = searchEngines.options[searchEngines.selectedIndex].text;

selectDiv.addEventListener("click", () => {
	let existingOptionsList = document.querySelector(".options-list");
	if (existingOptionsList) {
		existingOptionsList.remove();
		return;
	}

	let optionsList = document.createElement("ul");
	optionsList.classList.add("options-list");

	options.forEach((option) => {
		let optionItem = document.createElement("li");
		optionItem.classList.add("option-item");
		optionItem.innerHTML = option.text;
		optionItem.value = option.value;
		optionItem.setAttribute("tabindex", "0");

		if (option.selected) {
			optionItem.innerHTML = `<span style="color: var(--variable-color)">${option.text}</span>`;
		}

		optionItem.addEventListener("click", () => {
			searchEngines.value = option.value;
			selectDiv.innerHTML = option.text;
			optionsList.remove();
		});

		optionsList.appendChild(optionItem);
	});

	selectDiv.parentNode.appendChild(optionsList);
});

function doSearch() {
	let sf = document.searchform;
	let submitTo = sf.sengines.value + encodeURIComponent(sf.searchterms.value);
	window.open(submitTo);
	clearSearch();
	return false;
}

let getValue = document.getElementById("searchBar");
let clearBtn = document.getElementById("clearBtn");

function clearSearch() {
	if (getValue.value != "") {
		getValue.value = "";
	}
	clearBtn.style.visibility = "hidden";
}

getValue.addEventListener("input", function () {
	clearBtn.hidden = !this.value;
	clearBtn.style.visibility = "visible";
});

function resetSearch() {
	document.searchform.reset();
	document.querySelector("#searchEngineSelect").innerHTML = document.querySelector("#searchEngines").options[2].text;
}
