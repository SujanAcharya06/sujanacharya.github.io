// assets/.tmp/script-temp.js

const videos = [
	"./assets/.tmp/vid1.mp4",
	"./assets/.tmp/vid2.mp4",
];



const titles = document.querySelectorAll(".project-title");
const hoverVideo = document.getElementById("hover-video");

titles.forEach(title => {
	title.addEventListener("mouseenter", () => {
		const randomVideo = videos[Math.floor(Math.random() * videos.length)];
		hoverVideo.src = randomVideo;

		hoverVideo.muted = true;
		hoverVideo.style.display = "block";
		hoverVideo.currentTime = 0;

		hoverVideo.play().catch(err => {
			console.warn("Autoplay blocked:", err);
		});
	});

	title.addEventListener("mousemove", (e) => {
		hoverVideo.style.left = e.pageX + 20 + "px";
		hoverVideo.style.top = e.pageY + 20 + "px";
	});

	title.addEventListener("mouseleave", () => {
		hoverVideo.pause();
		hoverVideo.style.display = "none";
	});

	title.addEventListener("click", () => {
		hoverVideo.muted = false;
		hoverVideo.play().catch(err => {
			console.warn("Play with sound failed:", err);
		});
	});
});

