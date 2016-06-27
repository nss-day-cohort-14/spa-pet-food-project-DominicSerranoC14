// begin js file -------------

//XHR begin request to print dog food to page
//make request
var myRequest = new XMLHttpRequest();

//add event listener for XHR load
myRequest.addEventListener("load", handleDogFoodPrint);

//get request/object
myRequest.open("GET", "food.json");

//send request
myRequest.send();


//XHR begin request to print cat food to page
//make request
var myRequest = new XMLHttpRequest();

//add event listener for XHR load
myRequest.addEventListener("load", handleCatFoodPrint);

//get request/object
myRequest.open("GET", "catFood.json");

//send request
myRequest.send();



//get reference to output div for dog food
var outputDiv = document.getElementById('output-div');

//get reference to output div for dog food
var outputCatDiv = document.getElementById('outputCatDiv');

//refernce to grab catfood brand div
var catBrands = document.getElementById('cat-brands');

//refernce to grab catfood brand div
var catBreeds = document.getElementById('cat-breeds');

//refernce to grab catfood brand div
var catVolumes = document.getElementById('cat-volumes');



//define handleDogFoodPrint function
function handleDogFoodPrint() {
  var data = JSON.parse(event.target.responseText);
  var htmlString = "";

  for ( var i = 0; i < data.dogBrands.length; i++) {
    htmlString += `<div class="row">`;
    htmlString += `<p>${data.dogBrands[i].name}</p>`;
    htmlString += `<p>${data.dogBrands[i].types[0].type}</p>`;
    htmlString += `<p>${data.dogBrands[i].types[0].volumes[0].name}:  `;
    htmlString += `${data.dogBrands[i].types[0].volumes[0].price} |  `;
    htmlString += `${data.dogBrands[i].types[0].volumes[1].name}:  `;
    htmlString += `${data.dogBrands[i].types[0].volumes[1].price}</p>  `;
    htmlString += `</div>`;
    outputDiv.innerHTML = htmlString;

  }// end for loop for dog brand array

}//end handleDogFoodPrint function



//define handleCatFoodPrint function
function handleCatFoodPrint() {
  var data = JSON.parse(event.target.responseText);
  var brandString= "";
  var breedString= "";
  var volString= "";


  for ( var i = 0; i < data.catBrands.length; i++ ) {
    var currentBrand = data.catBrands[i];
    brandString += `${currentBrand.name}<hr>`;

    for ( var j = 0; j < currentBrand.breeds.length; j++ ) {
      breedString += currentBrand.breeds[j] + ' | ';
    }//end second for loop

    for ( var k = 0; k < currentBrand.volumes.length; k++ ) {
      var currentVolume = currentBrand.volumes[k];
      volString += `${currentVolume.name}: `;
      volString += `${currentVolume.size}, `;
      volString += `${currentVolume.price} | `;
    }//end third for loop


  breedString += `<hr><br>`;
  brandString += `<br>`;
  volString += `<hr>`;

  catVolumes.innerHTML = '<div><p>Price and Size</div><hr>' + volString;
  catBreeds.innerHTML = '<div><p>Breeds</div><hr><br>' + breedString;
  catBrands.innerHTML = '<div><p>Brands</div><hr><br>' + brandString;
  }//end of first for loop

}//end of handleCatFoodPrint function
