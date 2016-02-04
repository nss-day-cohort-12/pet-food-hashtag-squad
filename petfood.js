console.log(Date.now());

function executeThisCodeIfXHRFails() {
	alert("XHR FAILED");
};

function executeThisCodeAfterFileIsLoaded () {
	// parse JSON
	console.log("got json");
	var data = JSON.parse(this.responseText);
	console.log(data);
	// get DOM element for output
	var contentEl = document.getElementById("mainContent");
	// set up variables to hold current item in loop and end output
	var foodData = "";
	if (data.dog_brands) {
		var brands = data.dog_brands;
	} else if (data.cat_brands){
		var brands = data.cat_brands;
	}
	console.log("brand is ", brands);
	console.log('length is: ', brands.length);
	// inital loop of each brand
	for(var i = 0; i < brands.length; i++) {
		var currentFood = brands[i];
		console.log("i is ", i);
		console.log("current food is: ", currentFood);
		foodData += `<div class='petFoodOutput'>`; // opening div tag
		foodData += `<h1>${currentFood.name}</h1>`; // brand name

		// Adding if statement to check if data file is cats json then looping through breeds. 
		if (brands === data.cat_brands) {
			foodData += `<h3>Breeds:</h3><h4>`
			for (var x = 0; x < currentFood.breeds.length; x++) {
				foodData += ` ${currentFood.breeds[x]}`; // cat breed names
			};
			foodData += `</h4>`;
		}

		// secondary loop of each brand's type
		for (var j = 0; j < currentFood.types.length; j++) {
			var currentFoodType = currentFood.types[j];
			console.log("current food type is: ", currentFoodType);
			foodData += `<p>${currentFood.types[j].type}</p>`; // brand type

			// tertiary loop of each types's volumes and corresponding prices
			for (var k = 0; k < currentFoodType.volumes.length; k++) {
				var currentFoodTypeVolume = currentFoodType.volumes[k];
				console.log(currentFoodTypeVolume);
				foodData += `<p>${currentFoodTypeVolume.name} - $${currentFoodTypeVolume.price}</p>`; // volume of type
				foodData += `</div>`;
			};
		};
	}; // End of For Loops 
	// output to DOM
	contentEl.innerHTML += foodData;
}; // End of ExecuteThisCodeAfterFileIsLoaded function 

var myDogRequest = new XMLHttpRequest();

myDogRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
myDogRequest.addEventListener("error", executeThisCodeIfXHRFails);
myDogRequest.open("GET", "dogfood.json");
myDogRequest.send();

var myCatRequest = new XMLHttpRequest();

myCatRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
myCatRequest.addEventListener("error", executeThisCodeIfXHRFails);
myCatRequest.open("GET", "catfood.json");
myCatRequest.send();


console.log("Last line in the JavaScript file");