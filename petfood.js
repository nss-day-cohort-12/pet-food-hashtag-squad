console.log(Date.now());

function executeThisCodeIfXHRFails() {
	alert("XHR FAILED");
};

function executeThisCodeAfterFileIsLoaded () {
	// parse JSON
	console.log("got json");
	var data = JSON.parse(this.responseText); // parsing makes the file a regular javascript object 
	console.log(data);
	// get DOM element for output
	var dogEl = document.getElementById("dogContent");
	var catEl = document.getElementById("catContent");

	var foodData = ""; // initialize output string that will hold entire output. 
	if (data.dog_brands) {
		var brands = data.dog_brands;
	} else if (data.cat_brands){
		var brands = data.cat_brands;  // checking to see if what data we are using to determine how we handle it. 
	}
	
	// inital loop of each brand
	for(var i = 0; i < brands.length; i++) {
		var currentFood = brands[i];
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
			};
		};
		foodData += `</div>`;
	}; // End of For Loops 
	// output to DOM

	if (data.dog_brands) {			// testing to see what the data is and outputting it to corresponding variable. 
		dogEl.innerHTML = foodData;
	} else if (data.cat_brands){
		catEl.innerHTML = foodData;
	}

}; // End of ExecuteThisCodeAfterFileIsLoaded function 

var myDogRequest = new XMLHttpRequest(); // creates new xml http request object 

myDogRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
myDogRequest.addEventListener("error", executeThisCodeIfXHRFails);
myDogRequest.open("GET", "dogfood.json"); // gets data from file path. could be url 
myDogRequest.send(); // sends the created request 

var myCatRequest = new XMLHttpRequest();

myCatRequest.addEventListener("load", executeThisCodeAfterFileIsLoaded);
myCatRequest.addEventListener("error", executeThisCodeIfXHRFails);
myCatRequest.open("GET", "catfood.json");
myCatRequest.send();


console.log("Last line in the JavaScript file");