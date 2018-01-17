// variables for all the things that can be clicked on to change the imgs
var allProjects = document.querySelector(".btn-1");
var mobileProjects = document.querySelector(".btn-2");
var webProjects = document.querySelector(".btn-3");
var botsProjects = document.querySelector(".btn-4");

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

  // add active to the element class list
  el.classList.add("btn-active");

  // arrays of all the pictures that can be shown
  var allProjectsPics = [["events-check-in/", "http://via.placeholder.com/200x150?text=All_Projects", "NYU Events Check-In"], ["iPhone-6/", "http://via.placeholder.com/200x150?text=All_Projects", "iPhone 6"], ["amazon-echo-dot/", "http://via.placeholder.com/200x150?text=All_Projects", "Amazon Echo Dot"], ["occupancy/", "http://via.placeholder.com/200x150?text=All_Projects", "NYU Occupancy"], ["torch-tech/", "http://via.placeholder.com/200x150?text=All_Projects", "NYU Torch Tech"], ["travel-bot/", "http://via.placeholder.com/200x150?text=All_Projects", "NYU Travel Bot"]];

  var mobileProjectsPics = [["events-check-in/", "http://via.placeholder.com/200x150?text=Mobile_Projects", "NYU Events Check-In"], ["iPhone-6/", "http://via.placeholder.com/200x150?text=Mobile_Projects", "iPhone 6"], ["#", "http://via.placeholder.com/200x150?text=Mobile_Projects", "IDK"]];

  var webProjectsPics = [["events-check-in/", "http://via.placeholder.com/200x150?text=Web_Projects", "NYU Events Check-In"],
  ["occupancy/", "http://via.placeholder.com/200x150?text=Web_Projects", "NYU Occupancy"],
  ["#", "http://via.placeholder.com/200x150?text=Web_Projects", "IDK"],
  ["torch-tech/", "http://via.placeholder.com/200x150?text=Web_Projects", "NYU Torch Tech"]];

  var botsProjectsPics = [["travel-bot/", "http://via.placeholder.com/200x150?text=Bot_Projects", "NYU Travel Bot"]];

  switch (el.className) {
    case 'btn-1 btn-active':
      changeImgs(allProjectsPics);
      break;
    case 'btn-2 btn-active':
      changeImgs(mobileProjectsPics);
      break;
    case 'btn-3 btn-active':
      changeImgs(webProjectsPics);
      break;
    case 'btn-4 btn-active':
      changeImgs(botsProjectsPics);
      break;
    default:
  } // end switch
} // end function

// function creates figure tag and adds them to the page
function changeImgs(infoArray) {

  // delete the projects div tag
  document.getElementById('projects').remove();

  // create a new projects div
  var projectDiv = '<div class="projects" id="projects"></div>';
  $(projectDiv).insertAfter($('.portfolio-buttons'));

  // from the array of arrays, create figure tags and add to the dom
  for (var i = 0; i < infoArray.length; i++) {
    var tag = '<figure class="img-container"><img src="' + infoArray[i][1] + '" alt="' + infoArray[i][2] + '" width="533" height="406"><a href="' + infoArray[i][0] + '"><div class="overlay"><p class="text">' + infoArray[i][2] + '</p></div></a></figure>';

    $( tag ).appendTo( $('.projects') );
  }
}


// Event Listeners
allProjects.addEventListener("click", function(){
  switchClasses();
}, false);
mobileProjects.addEventListener("click", function(){
  switchClasses();
}, false);
webProjects.addEventListener("click", function(){
  switchClasses();
}, false);
botsProjects.addEventListener("click", function(){
  switchClasses();
}, false);
document.addEventListener("DOMContentLoaded", function(){
  var allProjectsPics = [["events-check-in/", "http://via.placeholder.com/200x150?text=All_Projects", "NYU Events Check-In"], ["iPhone-6/", "http://via.placeholder.com/200x150?text=All_Projects", "iPhone 6"], ["amazon-echo-dot/", "http://via.placeholder.com/200x150?text=All_Projects", "Amazon Echo Dot"], ["occupancy/", "http://via.placeholder.com/200x150?text=All_Projects", "NYU Occupancy"], ["torch-tech/", "http://via.placeholder.com/200x150?text=All_Projects", "NYU Torch Tech"], ["travel-bot/", "http://via.placeholder.com/200x150?text=All_Projects", "NYU Travel Bot"]];
  changeImgs(allProjectsPics);
}, false);
