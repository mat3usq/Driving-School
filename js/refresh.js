document.querySelectorAll('.content').forEach(link => {
	link.addEventListener('click', function (e) {
		e.preventDefault()
		const destinationSelector = this.getAttribute('href')
		const destinationElement = document.querySelector(destinationSelector)

		if (destinationElement) {
			destinationElement.setAttribute('tabindex', '-1')
			destinationElement.focus()

			destinationElement.scrollIntoView({
				behavior: 'smooth',
			})

			destinationElement.removeAttribute('tabindex')
		}
	})
})
