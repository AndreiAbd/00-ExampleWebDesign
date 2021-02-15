/* global $,  jquery, alert */
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