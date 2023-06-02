const url = 'https://api.openweathermap.org/data/2.5/';
const apikey = 'eeeea95552f70a881a0f06a33cb8ea27';

let weather = document.querySelector('.weather').style.display = 'none';
let weather2 = document.querySelector('.weather2').style.display = 'none';
let weather3 = document.querySelector('.weather3').style.display = 'none';
let weather4 = document.querySelector('.weather4').style.display = 'none';
let weather5 = document.querySelector('.weather5').style.display = 'none';
let weather6 = document.querySelector('.weather6').style.display = 'none';
let error = document.querySelector('.error').style.display = 'none';
let search = document.querySelector('#search').style.visibility = "hidden";




let input = document.querySelector('#weatherSearch');
input.addEventListener("focus", () => {
    search = document.querySelector('#search').style.visibility = "visible";

});




const setQuery = (e) => {
    if (e.keyCode == '13' && input.value != '') {
        error = document.querySelector('.error').style.display = 'none';
        
        getResult(input.value)
        input.value = '';

    }
    else if (e.keyCode == '13' && input.value == '') {
        error = document.querySelector('.error').style.display = 'block';

    }

}




const getResult = (cityname) => {
    let query = `${url}weather?q=${cityname}&appid=${apikey}&units=metric&lang=tr`
    fetch(query)
        .then(weather => {
            return weather.json()
        })
        .then(displayResult)

}


const displayResult = (result) => {



    let city = document.querySelector('.city');
    city.innerText = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector('.temp');
    temp.innerText = `${Math.round(result.main.temp)}°C`

    let desc = document.querySelector('.desc');
    desc.innerText = result.weather[0].description
    
    let minmax = document.querySelector('.minmax');
    minmax.innerText = `min ${Math.round(result.main.temp_min)}°C / max ${Math.round(result.main.temp_max)}°C`;

    if (result.weather[0].description == 'açık') {
        weather2 = document.querySelector('.weather2').style.display = 'none';
        weather = document.querySelector('.weather').style.display = 'block';
        weather3 = document.querySelector('.weather3').style.display = 'none';
        weather4 = document.querySelector('.weather4').style.display = 'none';
        weather5 = document.querySelector('.weather5').style.display = 'none';
        weather6 = document.querySelector('.weather6').style.display = 'none';
    }

    else if (result.weather[0].description == 'parçalı bulutlu' || result.weather[0].description == 'parçalı az bulutlu' || result.weather[0].description == 'az bulutlu') {
        weather2 = document.querySelector('.weather2').style.display = 'block';
        weather = document.querySelector('.weather').style.display = 'none';
        weather3 = document.querySelector('.weather3').style.display = 'none';
        weather4 = document.querySelector('.weather4').style.display = 'none';
        weather5 = document.querySelector('.weather5').style.display = 'none';
        weather6 = document.querySelector('.weather6').style.display = 'none';
    }

    else if (result.weather[0].description == 'kısa süreli yağmur' || result.weather[0].description == 'uzun süreli yağmur' || result.weather[0].description == 'hafif yağmur' || result.weather[0].description == 'kısa süreli hafif yoğunluklu yağmur' || result.weather[0].description == 'sağanak') {
        weather3 = document.querySelector('.weather3').style.display = 'block';
        weather2 = document.querySelector('.weather2').style.display = 'none';
        weather = document.querySelector('.weather').style.display = 'none';
        weather4 = document.querySelector('.weather4').style.display = 'none';
        weather5 = document.querySelector('.weather5').style.display = 'none';
        weather6 = document.querySelector('.weather6').style.display = 'none';
    }
    else if (result.weather[0].description == 'kapalı') {
        weather3 = document.querySelector('.weather3').style.display = 'none';
        weather2 = document.querySelector('.weather2').style.display = 'none';
        weather = document.querySelector('.weather').style.display = 'none';
        weather4 = document.querySelector('.weather4').style.display = 'block';
        weather5 = document.querySelector('.weather5').style.display = 'none';
        weather6 = document.querySelector('.weather6').style.display = 'none';
    }
    else if (result.weather[0].description == 'hafif kar yağışlı' || result.weather[0].description == 'kar yağışlı' || result.weather[0].description == 'kısa süreli hafif yoğunluklu kar') {
        weather3 = document.querySelector('.weather3').style.display = 'none';
        weather2 = document.querySelector('.weather2').style.display = 'none';
        weather = document.querySelector('.weather').style.display = 'none';
        weather4 = document.querySelector('.weather4').style.display = 'none';
        weather5 = document.querySelector('.weather5').style.display = 'block';
        weather6 = document.querySelector('.weather6').style.display = 'none';
    }

    else if (result.weather[0].description == 'sisli') {
        weather3 = document.querySelector('.weather3').style.display = 'none';
        weather2 = document.querySelector('.weather2').style.display = 'none';
        weather = document.querySelector('.weather').style.display = 'none';
        weather4 = document.querySelector('.weather4').style.display = 'none';
        weather5 = document.querySelector('.weather5').style.display = 'none';
        weather6 = document.querySelector('.weather6').style.display = 'block';
    }




    search = document.querySelector('#search').style.visibility = "hidden";

}

input.addEventListener('keypress', setQuery);
