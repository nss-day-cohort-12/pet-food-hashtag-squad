console.log("First line in JS file" );
console.log(Date.now());


var contentEl = document.getElementById("mainContent");



function dogFoodFails() {
	alert("DOG XHR FAILED");
};

function catFoodFails() {
	alert("CAT XHR FAILED");
};


function dogFoodLoaded() {
	var dogData = JSON.parse(this.responseText);

	var dogFoodData = "";
	var currentFood = "";

	for(var i = 0; i < dogData.dog_brands.length; i++) {
		currentFood = dogData.dog_brands[i];
		dogFoodData += `<div class='dogFoodOutput'>`;
		dogFoodData += `<h1 id='dogBrandName'>${currentFood.name}</h1>`;
		// console.log("dog first for", currentFood);


		for (var j = 0; j < dogData.dog_brands[i].types.length; j++) {
			dogFoodData += `<p id='dogFoodProducts'>product type: ${currentFood.types[j].type}</p>`;
			// console.log("dog second for", currentFood);


			for (var k = 0; k < dogData.dog_brands[i].types[j].volumes.length; k++) {
				dogFoodData += `<p id='dogFoodSize'>size: ${currentFood.types[j].volumes[k].name}</p>`;
				dogFoodData += `<p id='dogFoodPrice'>price: ${currentFood.types[j].volumes[k].price}</p>`;
				// console.log("dog third for", currentFood);

				};
			
		};

	};
		contentEl.innerHTML += dogFoodData;
		console.log("dog food", Date.now());
};



function catFoodLoaded() {
	var catData = JSON.parse(this.responseText);

	var catFoodData = "";
	var currentFood = "";

	for(var i = 0; i < catData.cat_brands.length; i++) {
		currentFood = catData.cat_brands[i];
		catFoodData += `<div class='catFoodOutput'>`;
		catFoodData += `<h1 id='catBrandName'>${currentFood.name}</h1>`;
		// console.log("cat first for", currentFood);


		for (var j = 0; j < catData.cat_brands[i].types.length; j++) {
			catFoodData += `<p id='catFoodProducts'>product type: ${currentFood.types[j].type}</p>`;
			// console.log("cat second for", currentFood);


			for (var k = 0; k < catData.cat_brands[i].types[j].volumes.length; k++) {
				catFoodData += `<p id='catFoodSize'>size: ${currentFood.types[j].volumes[k].name}</p>`;
				catFoodData += `<p id='catFoodPrice'>price: ${currentFood.types[j].volumes[k].price}</p>`;
				// console.log("cat third for", currentFood);

				};
			
		};

	};
		contentEl.innerHTML += catFoodData;
		console.log("cat food", Date.now());
};


		

var dogRequest = new XMLHttpRequest();

dogRequest.addEventListener("load", dogFoodLoaded);
dogRequest.addEventListener("error", dogFoodFails);
dogRequest.open("GET", "dogfood.json");
dogRequest.send();


var catRequest = new XMLHttpRequest();

catRequest.addEventListener("load", catFoodLoaded);
catRequest.addEventListener("error", catFoodFails);
catRequest.open("GET", "catfood.json");
catRequest.send();

console.log("Last line in the JavaScript file");
console.log(Date.now());
