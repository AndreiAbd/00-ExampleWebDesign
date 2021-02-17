/* global $,  jquery, alert */


// local storage check color item
let mainColors = localStorage.getItem("color_option");
if (mainColors !== null){
	document.documentElement.style.setProperty('--main-color', localStorage.getItem("color_option"));
};

//Set Interval Random Background
let backgroundInterval;
//Random Background Option
let backgroundOption = true;

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


//setting Randome Background Imges
const randomBackEl = document.querySelectorAll(".select-option span");
// Loop on all spans
randomBackEl.forEach(span =>{

	span.addEventListener("click", (e) =>{
	
		e.target.parentElement.querySelectorAll(".active").forEach(element =>{
			element.classList.remove("active");
		});
		
		e.target.classList.add("active");
		
		if(e.target.dataset.background === 'yes'){
			backgroundOption = true;
			randomizImgs();
		} else {
			backgroundOption = false;
			clearInterval(backgroundInterval);
		}		
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

//Function of Randomize imgs
function randomizImgs(){
	if(backgroundOption === true){
		setInterval(() => {
		// get random image
		let randomNumber = Math.floor(Math.random()*imgsArrey.length);
		// get image by url link
		landingPage.style.backgroundImage = 'url("img/' + imgsArrey [ randomNumber ] + '")';
		}, 2000);
	}
}