function addActiveClass(link) {
  link.classList.add("active");
};

function removeActiveClass(link) {
  link.classList.remove("active");
};

function addVisibleClass(link) {
  link.classList.add("visible");
  link.classList.remove("hidden");
};

function addHiddenClass(link) {
  link.classList.add("hidden");
  link.classList.remove("visible");
};

// WELCOME VIEW // 

var welcomeLink = document.getElementById("welcomeLink");
var welcomeView = document.getElementById("welcome");

welcomeLink.addEventListener("click", function() {
  addActiveClass(welcomeLink);
  addVisibleClass(welcomeView);
  removeActiveClass(dogFoodLink);
  removeActiveClass(catFoodLink);
  addHiddenClass(dogFoodView);
  addHiddenClass(catFoodView);
});


// // DOG FOOD EVENTS //

var dogFoodLink = document.getElementById("dogFoodLink");
var dogFoodView = document.getElementById("dogContent");



dogFoodLink.addEventListener("click", function() {
  event.preventDefault();
  addActiveClass(dogFoodLink);
  addVisibleClass(dogFoodView);
  removeActiveClass(welcomeLink);
  removeActiveClass(catFoodLink);
  addHiddenClass(welcomeView);
  addHiddenClass(catFoodView);
});

// // CAT FOOD EVENTS // 

var catFoodLink = document.getElementById("catFoodLink");
var catFoodView = document.getElementById("catContent");

catFoodLink.addEventListener("click", function(event) {
  event.preventDefault();
  addActiveClass(catFoodLink);
  addVisibleClass(catFoodView);
  removeActiveClass(welcomeLink);
  removeActiveClass(dogFoodLink);
  addHiddenClass(welcomeView);
  addHiddenClass(dogFoodView);
});