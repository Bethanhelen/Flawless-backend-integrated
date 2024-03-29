let navigation_bar = document.querySelector(".navbar");
let menus_btn = document.querySelector(".menu-btn");
let close_btn = document.querySelector(".close-btn");

menus_btn.addEventListener('click', function(){
  navigation_bar.classList.add('active2');
})

close_btn.addEventListener('click', function(){
  navigation_bar.classList.remove('active2');
})



// Testimonial
const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper ion-icon");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;

let isDragging = false, startX, startScrollLeft;

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
	btn.addEventListener("click", () => {
		carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
	})
});


const dragStart = (e) => {
	isDragging = true;
	carousel.classList.add("dragging");
	// Records the initial cursor and scroll position of the carousel
	startX = e.pageX;
	startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
	if(!isDragging) return; // if isDragging is false return from here 
	//Updates the scroll position of the carousel based on the cursor movement
	carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
	isDragging = false;
	carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
