// JS for the Portfolio section of the Homepage

// NOTE: When a button (top or bottom) is clicked: pictures change, class of both sets of buttons change to active


// variables for all the things that can be clicked on to change the imgs
var allProjects = document.querySelector(".btn-1");
var mobileProjects = document.querySelector(".btn-2");
var webProjects = document.querySelector(".btn-3");
var botsProjects = document.querySelector(".btn-4");

var allProjectsInd = document.querySelector(".ind-1");
var mobileProjectsInd = document.querySelector(".ind-2");
var webProjectsInd = document.querySelector(".ind-3");
var botsProjectsInd = document.querySelector(".ind-4");

// function to switch all the classes of the html elements
function switchClasses(e){
  // element that was clicked on
  var el = event.srcElement;
  var elClassArr = event.srcElement.classList;
  // console.log(el);
  // console.log(elClassArr);

  // reset class list of all the buttons
  allProjects.classList.remove("btn-active");
  mobileProjects.classList.remove("btn-active");
  webProjects.classList.remove("btn-active");
  botsProjects.classList.remove("btn-active");

  allProjectsInd.classList.remove("btn-active");
  mobileProjectsInd.classList.remove("btn-active");
  webProjectsInd.classList.remove("btn-active");
  botsProjectsInd.classList.remove("btn-active");

  // add active to the element class list
  el.classList.add("btn-active");

  // arrays of all the pictures that can be shown; need 6 for each
  var allProjectsPics = ["http://via.placeholder.com/200x150?text=All_Projects", "http://via.placeholder.com/200x150?text=All_Projects", "http://via.placeholder.com/200x150?text=All_Projects", "http://via.placeholder.com/200x150?text=All_Projects", "http://via.placeholder.com/200x150?text=All_Projects", "http://via.placeholder.com/200x150?text=All_Projects"];
  var mobileProjectsPics = ["http://via.placeholder.com/200x150?text=Mobile_Projects", "http://via.placeholder.com/200x150?text=Mobile_Projects", "http://via.placeholder.com/200x150?text=Mobile_Projects", "http://via.placeholder.com/200x150?text=Mobile_Projects", "http://via.placeholder.com/200x150?text=Mobile_Projects", "http://via.placeholder.com/200x150?text=Mobile_Projects"];
  var webProjectsPics = ["http://via.placeholder.com/200x150?text=Web_Projects",
  "http://via.placeholder.com/200x150?text=Web_Projects",
  "http://via.placeholder.com/200x150?text=Web_Projects",
  "http://via.placeholder.com/200x150?text=Web_Projects",
  "http://via.placeholder.com/200x150?text=Web_Projects",
  "http://via.placeholder.com/200x150?text=Web_Projects"];
  var botsProjectsPics = ["http://via.placeholder.com/200x150?text=Bot_Projects",
  "http://via.placeholder.com/200x150?text=Bot_Projects",
  "http://via.placeholder.com/200x150?text=Bot_Projects",
  "http://via.placeholder.com/200x150?text=Bot_Projects",
  "http://via.placeholder.com/200x150?text=Bot_Projects",
  "http://via.placeholder.com/200x150?text=Bot_Projects"];

  switch (el.className) {
    case 'btn-1 btn-active':
    case 'ind-1 btn-active':
      changePictures(allProjectsPics);
      break;
    case 'btn-2 btn-active':
    case 'ind-2 btn-active':
      changePictures(mobileProjectsPics);
      break;
    case 'btn-3 btn-active':
    case 'ind-3 btn-active':
      changePictures(webProjectsPics);
      break;
    case 'btn-4 btn-active':
    case 'ind-4 btn-active':
      changePictures(botsProjectsPics);
      break;
    default:
      // console.log("Not calling the new function");
  }

  // console.log(event);
}


// function only changes all the pictures that appear on the screen
function changePictures(pictureArray) {
  // change all the pictures on the screen
  var portfolioImgs = document.querySelectorAll(".portfolio-img");
  for (var i = 0; i < portfolioImgs.length; i++) {
    portfolioImgs[i].src = pictureArray[i];
  }
}



// Event Listeners
allProjects.addEventListener("click", function(){
  switchClasses();
  allProjectsInd.classList.add("btn-active");
}, false);
mobileProjects.addEventListener("click", function(){
  switchClasses();
  mobileProjectsInd.classList.add("btn-active");
}, false);
webProjects.addEventListener("click", function(){
  switchClasses();
  webProjectsInd.classList.add("btn-active");
}, false);
botsProjects.addEventListener("click", function(){
  switchClasses();
  botsProjectsInd.classList.add("btn-active");
}, false);
allProjectsInd.addEventListener("click", function(){
  switchClasses();
  allProjects.classList.add("btn-active");
}, false);
mobileProjectsInd.addEventListener("click", function(){
  switchClasses();
  mobileProjects.classList.add("btn-active");
}, false);
webProjectsInd.addEventListener("click", function(){
  switchClasses();
  webProjects.classList.add("btn-active");
}, false);
botsProjectsInd.addEventListener("click", function(){
  switchClasses();
  botsProjects.classList.add("btn-active");
}, false);
document.addEventListener("DOMContentLoaded", function(){
  var allProjectsPics = ["http://via.placeholder.com/200x150?text=All_Projects", "http://via.placeholder.com/200x150?text=All_Projects", "http://via.placeholder.com/200x150?text=All_Projects", "http://via.placeholder.com/200x150?text=All_Projects", "http://via.placeholder.com/200x150?text=All_Projects", "http://via.placeholder.com/200x150?text=All_Projects"];
  changePictures(allProjectsPics);
}, false);
