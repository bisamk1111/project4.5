let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n)
}
function showSlides(n) {
	let slides = document.getElementsByClassName("slides");
	if (n > slides.length) { slideIndex = 1}
	if (n<1) { slideIndex = slides.length}
	for (let i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
}
function initMap(){
	const myLocation = { lat: 29.9792, lng: 31.1342 }; //not my location
	
	const map = new google.maps.Map(document.getElementById("map"), {
		center: myLocation,
		zoom: 12,
	});
		
	const marker = new google.maps.Marker({
		position: myLocation,
		map: map,
		title: "My Location",
	});
	const infoWindow = new google.maps.InfoWindow({
		content: "<h2> Don't look at my location</h2><p> Custom Marker,</p>",
	});
	marker.addListener("click", () => {
		infoWindow.open(map,marker);
	});
}
function greetUser() {
	console.log("hello world");
}

function coloursToggle(){
	const headings = document.querySelectorAll("h1,h2");
	headings.forEach(h=> {
		h.style.color = h.style.color === "green" ? "" : "green";
	});
}
document.addEventListener("DOMContentLoaded", () => {
	greetUser();
	const toggleBtn = document.createElement("button");
	toggleBtn.textContent = "Toggle Headings Color";
	toggleBtn.onclick = coloursToggle;
	document.body.insertBefore(toggleBtn, document.body.firstChild);
});
window.initMap = initMap;