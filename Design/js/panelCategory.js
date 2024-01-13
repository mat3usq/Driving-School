document.addEventListener('DOMContentLoaded', function () {
	const menuBars = document.querySelector('.menu-bars')
	const navLinks = document.querySelectorAll('.navbar-left .nav-link')
	const navBar = document.querySelector('.navbar-left')
	let isMenuOpen = false // Dodano flagę do śledzenia stanu menu

	function animateLinks(animationName) {
		let delayTime = 0
		navLinks.forEach(item => {
			item.classList.remove('animation', 'animationReverse')
			item.style.animationDelay = delayTime + 's'
			delayTime += 0.1
			// Odpóźnienie dodawania klasy animacji, aby uniknąć uruchomienia przy zmianie rozmiaru okna
			setTimeout(() => item.classList.add(animationName), 10)
		})
	}

	menuBars.addEventListener('click', () => {
		isMenuOpen = !isMenuOpen // Aktualizacja flagi stanu menu
		if (isMenuOpen) {
			navBar.classList.add('show')
			animateLinks('animation')
		} else {
			animateLinks('animationReverse')
			const lastLink = navLinks[navLinks.length - 1]
			lastLink.addEventListener(
				'animationend',
				() => {
					if (!isMenuOpen) {
						// Sprawdzenie stanu menu przed usunięciem klasy 'show'
						navBar.classList.remove('show')
					}
				},
				{ once: true }
			)
		}
	})

	navLinks.forEach(link =>
		link.addEventListener('click', () => {
			isMenuOpen = false // Ustawienie flagi na zamknięte
			animateLinks('animationReverse')
			const lastLink = navLinks[navLinks.length - 1]
			lastLink.addEventListener(
				'animationend',
				() => {
					navBar.classList.remove('show')
				},
				{ once: true }
			)
		})
	)

	// Odblokowanie animacji, gdy zmienia się rozmiar okna
	window.addEventListener('resize', () => {
		if (!isMenuOpen) {
			navLinks.forEach(item => {
				item.classList.remove('animation', 'animationReverse')
				item.style.animationDelay = '0s'
			})
		}
	})
})
