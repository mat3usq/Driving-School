document.addEventListener("DOMContentLoaded", function () {
	const nav = document.querySelector(".navbar")
	const navLinks = document.querySelectorAll(".nav-link")
	const navBar = document.querySelector(".navbar-collapse")

	function addShadow() {
		if (window.scrollY >= 20) nav.classList.add("shadow-bg")
		else nav.classList.remove("shadow-bg")
	}

	navLinks.forEach((link) => link.addEventListener("click", () => navBar.classList.remove("show")))

	window.addEventListener("scroll", addShadow)
})
