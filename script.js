
// Change the search bar onclick

function switchType() {
    let x = document.getElementById('city');
    let y = document.getElementById('zip');
    let z = document.getElementById('switch');
    if (x.style.display === "none") {
        z.innerHTML = "Switch to zip";
        x.style.display = "block";
        y.style.display = "none";
    } else {
        z.innerHTML = "Switch to city";
        x.style.display = "none";
        y.style.display = "block";
    }
}

// Change the submit button onclick

function switchSearch() {
    let a = document.querySelector('#first');
    let b = document.querySelector('#second');
    if (b.style.display != "block") {
        b.style.display = "block";
        a.style.display = "none";
    } else {
        b.style.display = "none";
        a.style.display = "block";
    }
}




// variables for interacting with openweather api

var cityInput = document.querySelector('#city');
var zipInput = document.querySelector('#zip');
var main = document.querySelector('.area-city');
var temp = document.querySelector('.temp');
var atmos = document.querySelector('.weather');
var feelsLike = document.querySelector('.desc');
var high = document.querySelector('#high');
var low = document.querySelector('#low');
var a = document.querySelector('#first');
var b = document.querySelector('#second');

// Search for a city

a.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityInput.value+',&appid=ed41044a9bd2f30024ce0499e12a4e3e')
 .then(response => response.json())
 .then(data => {
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];
    var lowValue = data['main']['temp_min'];
    var highValue = data['main']['temp_max'];

    
      main.innerHTML = nameValue;
      tempValue = (Math.ceil(tempValue * 1.8 - 459.67));
      lowValue = (Math.ceil(lowValue * 1.8 - 459.67));
      highValue = (Math.ceil(highValue * 1.8 - 459.67));
      temp.innerHTML = tempValue+"°F";
      atmos.innerHTML = descValue;
      low.innerHTML = lowValue+"°F";
      high.innerHTML = highValue+"°F";


    
    
    
      cityInput.value ="";
    
    })
    
    .catch(err => alert("Wrong city name!"));
    })

// Search for a zip

b.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?zip='+zipInput.value+',&appid=ed41044a9bd2f30024ce0499e12a4e3e')
.then(response => response.json())
.then(data => {
    var tempValue = data['main']['temp'];
    var nameValue = data['name'];
    var descValue = data['weather'][0]['description'];
    var lowValue = data['main']['temp_min'];
    var highValue = data['main']['temp_max'];

            
     main.innerHTML = nameValue;
     tempValue = (Math.ceil(tempValue * 1.8 - 459.67));
     lowValue = (Math.ceil(lowValue * 1.8 - 459.67));
     highValue = (Math.ceil(highValue * 1.8 - 459.67));
     temp.innerHTML = tempValue+"°F";
     atmos.innerHTML = descValue;
     low.innerHTML = lowValue+"°F";
     high.innerHTML = highValue+"°F";

    
        
            
            
     zipInput.value ="";
            
    })
            
    .catch(err => alert("Wrong zip name!"));
    })


//get date

var date = document.querySelector('.date');
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, 0);
var yyyy = today.getFullYear();

today = mm + '-' + dd + '-' + yyyy;

date.innerHTML = today;


// When the page loads



var sanFran = 'San Francisco'

 window.onload = function(name){
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+sanFran+',&appid=ed41044a9bd2f30024ce0499e12a4e3e')
         .then(response => response.json())
         .then(data => {
            var tempValue = data['main']['temp'];
            var nameValue = data['name'];
            var descValue = data['weather'][0]['description'];
            var lowValue = data['main']['temp_min'];
            var highValue = data['main']['temp_max'];
        
            
              main.innerHTML = nameValue;
              tempValue = (Math.ceil(tempValue * 1.8 - 459.67));
              lowValue = (Math.ceil(lowValue * 1.8 - 459.67));
              highValue = (Math.ceil(highValue * 1.8 - 459.67));
              temp.innerHTML = tempValue+"°F";
              atmos.innerHTML = descValue;
              low.innerHTML = lowValue+"°F";
              high.innerHTML = highValue+"°F";
        
        
            
            
            
              cityInput.value ="";
            
            })
            
            .catch(err => alert("Wrong city name!"));
            }