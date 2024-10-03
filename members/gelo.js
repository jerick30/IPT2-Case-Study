/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		const target = document.querySelector(this.getAttribute('href'));

		target.scrollIntoView({
			behavior: 'smooth'
		});
	});
});

// Back to Top button functionality
const backToTopButton = document.getElementById('backToTop');

// Show the button when scrolled down 100px
window.onscroll = function() {
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		backToTopButton.style.display = "block";
	} else {
		backToTopButton.style.display = "none";
	}
};

// Scroll to top when the button is clicked
backToTopButton.addEventListener('click', function() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
});
TweenMax.staggerFrom(".heading", 0.8, {opacity: 0, y: 20, delay: 0.2}, 0.4);