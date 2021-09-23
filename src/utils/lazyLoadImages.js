const lazyloadImages = (imageElements) => {

	let options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.15
	}

	const callback = (entries, observer) => {
		entries.forEach(entry => {

			if (entry.isIntersecting === true) {

				if (entry.target.classList.contains("lazy-load")) {
					entry.target.classList.remove("lazy-load");
				}
			}
		});
	};

	let observer = new IntersectionObserver(callback, options);

	if (imageElements) {
		Array.prototype.forEach.call(imageElements, (element) => {
			observer.observe(element);
		});
	}
}

export default lazyloadImages;