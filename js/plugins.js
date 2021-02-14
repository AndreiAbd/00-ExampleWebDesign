/* global $,  jquery, alert */
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