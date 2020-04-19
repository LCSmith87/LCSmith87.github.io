function toggleMenu () {

	// show/hide the dropdown menu
	var subMenu = document.getElementById("mobile-nav-items");
	var isShown = subMenu.style.display;

	subMenu.style.display = isShown == 'none' || isShown == "" ? 'block' : 'none';

}

function scrollToDiv(div, toggle) {

	//Scroll to the appropriate section on the page and hide the menu if open
	if(toggle) {
		toggleMenu();
	}
	$('html, body').animate({
        scrollTop: $("#" + div).offset().top
    }, 1000);

}

function closeOverlay () {
	// Closes the 'lightbox' and the corresponding modal
	// Not the most elegant function, but it does the job
	document.getElementById("dim-overlay").style.display = 'none';
	document.getElementById("projectCard-tapd").style.display = 'none';
	document.getElementById("projectCard-solonomostudios").style.display = 'none';
	document.getElementById("projectCard-frontendpractice").style.display = 'none';
	document.getElementById("projectCard-adtech").style.display = 'none';
	document.getElementById("projectCard-learning").style.display = 'none';

}

function openModal(hasThumbails, div, docEle) {
	// Get the current scroll position to set the modal to the top
	var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;

	// Opens the corresponding modal and the 'lightbox'
	var mod = document.getElementById(div);
	mod.style.display = 'block';
	var modWrapper = document.getElementsByClassName("projectCardModalWrapper")[docEle];
	modWrapper.style.top = scrollTop + "px"
	document.getElementById("dim-overlay").style.display = 'block';
	if(hasThumbails) {
		var divID = div.toString().substring(div.indexOf("-"), div.length);
		replaceImage("modalMainImg" + divID, document.getElementById("initThumb" + divID));
	}
}

function replaceImage(mainImg, div) {
	var cl = document.getElementsByClassName("thumbIsSelected")[0];
	
	if(cl) {
		cl.removeAttribute("class");
	}
	div.setAttribute("class", "thumbIsSelected");
	document.getElementById(mainImg).setAttribute("src", div.src);

}