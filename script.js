
// Get elements
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

// For all images with .preview-img class
console.log("Setting up lightbox for preview images...");
document.querySelectorAll(".preview-img").forEach(img => {
	img.addEventListener("click", () => {
		console.log("Image clicked:", img.src);
		lightbox.style.display = "block";
		lightboxImg.src = img.src; // show clicked image
	});
});

// Close when clicking X
closeBtn.addEventListener("click", () => {
	lightbox.style.display = "none";
});

// Close when clicking outside image
lightbox.addEventListener("click", (e) => {
	if (e.target === lightbox) {
		lightbox.style.display = "none";
	}
});
