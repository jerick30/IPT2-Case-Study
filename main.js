const links = document.querySelectorAll('.menu-list a');

window.addEventListener('scroll', function() {
  let currentScroll = window.scrollY;

  const navbar = document.getElementById("navbar");
  const menu = document.getElementById("menu-list");
  const currentActive = document.getElementById("current-active");

  let opacity = Math.min(currentScroll / 800, 1);
  if(opacity <= .75){
    navbar.style.backgroundColor = "rgba(44, 44, 44, " + opacity + ")";
  } else {
    navbar.style.backgroundColor = "rgba(44, 44, 44, .75)";
  }

  if(opacity <= .37){
    navbar.style.border = "1px solid rgba(255, 255, 255,"+ opacity + ")";
    menu.style.outline = "1px solid rgba(255, 255, 255,"+ opacity + ")";
  } else {
    navbar.style.border = "1px solid rgba(255, 255, 255, .37)";
    menu.style.outline = "1px solid rgba(255, 255, 255, .37)";
  }

  // bottom line
  document.querySelectorAll('section').forEach(function(section) {
    let sectionTop = section.offsetTop - 200;
    let sectionBottom = sectionTop + section.offsetHeight;

    if (currentScroll >= sectionTop && currentScroll <= sectionBottom) {
      let id = section.getAttribute('id');
      links.forEach(function(link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + id) {
          link.classList.add('active');
          currentActive.innerHTML = id;
        }
      });
    }
  });
});

function removeMenu(){
  const menuBtn = document.getElementById('menu-btn');
  menuBtn.checked = false;
}