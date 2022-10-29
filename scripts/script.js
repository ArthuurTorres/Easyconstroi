//Navbar contracting/expanding function

let navLink = document.getElementById('nav-links');

//If window size is big, let menu visible
window.addEventListener('resize', function(){
	if (window.innerWidth >= 1023){
    if(window.getComputedStyle(navLink, null).display === 'none'){
      navLink.style.display = 'flex';
    }
  }
});

//If it's not, contract it
function expandOrcontractNavbar() {
  if(window.getComputedStyle(navLink, null).display === 'none'){
    navLink.style.display = 'flex';
  } else {
    navLink.style.display = 'none';
  }
}