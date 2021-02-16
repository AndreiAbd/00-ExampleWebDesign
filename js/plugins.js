/* global $,  jquery, alert */
// local storage check color item
let mainColors = localStorage.getItem("color_option");
if (mainColors !== null){
	document.documentElement.style.setProperty('--main-color', localStorage.getItem("color_option"));
};
//setting box color: switch color setting
const colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach(li => {
	li.addEventListener("click", (e) =>{
		// set color in Root
		document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
		//set color in local storage
		localStorage.setItem("color_option", e.target.dataset.color);
	});
});
//setting list
document.querySelector(".fa-cog").onclick = function(){
	//Fa-Spin Rotation it self
	this.classList.toggle("fa-spin");
	//Open Setting Manu
	document.querySelector(".setting-box").classList.toggle("open");
}; 

//select landing page
let landingPage = document.querySelector(".landing-page");

//get images from directory
let imgsArrey = ["00.jpg", "01.jpg", "02.jpg", "03.jpg"];

setInterval(() => {
// get random image
let randomNumber = Math.floor(Math.random()*imgsArrey.length);
// get image by url link
landingPage.style.backgroundImage = 'url("img/' + imgsArrey [ randomNumber ] + '")';
}, 10000);