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

// MOUSE TRAIL
let x1 = 0, y1 = 0;
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0),
    dist_to_draw = 50,
    delay = 1000,
    fsize = ['1.1rem', '1.4rem', '.8rem', '1.7rem'],
    colors = ['#E23636', '#F9F3EE', '#E1F8DC', '#B8AFE6', '#AEE1CD', '#5EB0E5'],
    rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
    selRand = (o) => o[rand(0, o.length - 1)],
    distanceTo = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)),
    shouldDraw = (x, y) => (distanceTo(x1, y1, x, y) >= dist_to_draw),
    addStr = (x, y) => {
        const str = document.createElement("div");
        str.innerHTML = '&#10022;';
        str.className = 'star';
        const scrollY = window.scrollY || window.pageYOffset;
        str.style.top = `${y + rand(-20, 20) + scrollY}px`;
        str.style.left = `${x}px`;
        str.style.color = selRand(colors);
        str.style.fontSize = selRand(fsize);
        str.style.zIndex = '1000'; // Ensure stars are visible
        document.body.appendChild(str);

        const fs = 10 + 5 * parseFloat(getComputedStyle(str).fontSize);
        str.animate({
            translate: `0 ${(y + fs) > vh ? vh - y : fs}px`,
            opacity: 0,
            transform: `rotateX(${rand(1, 500)}deg) rotateY(${rand(1, 500)}deg)`
        }, {
            duration: delay,
            fill: 'forwards'
        });

        setTimeout(() => str.remove(), delay);
    };

addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    console.log(`Mouse moved: (${clientX}, ${clientY})`); // Debugging mouse event
    if (shouldDraw(clientX, clientY)) {
        addStr(clientX, clientY);
        x1 = clientX;
        y1 = clientY;
    }
});
// MOUSE TRAIL

// MUTE/UNMUTE BUTTON
document.addEventListener('DOMContentLoaded', function() {
	var audio = document.getElementById('bgAudio');
	var muteButton = document.getElementById('muteButton');
	// DEFAULT VOLUME  
	audio.volume = 0.3;

	function toggleMute() {
		if (audio.volume === 0) {
			// Unmute
			audio.volume = 0.3; // Set the volume to your desired level
		} else {
			// Mute
			audio.volume = 0;
		}
		muteButton.classList.toggle('fade');
	}

	muteButton.onclick = toggleMute;
});