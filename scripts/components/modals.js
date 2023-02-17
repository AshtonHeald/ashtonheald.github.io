const openModalButtons = document.querySelectorAll("[data-modal-target]");

openModalButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const modal = document.querySelector(button.dataset.modalTarget);
		if (modal.classList.contains("active")) {
			closeModal(modal);
		} else {
			openModal(modal);
		}
	});
});

function openModal(modal) {
	if (modal == null) return;
	modal.classList.add("active");
}

function closeModal(modal) {
	if (modal == null) return;
	modal.classList.remove("active");
}
