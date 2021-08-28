var input = document.getElementById("input_text")
var main = document.getElementById("name")
var temp = document.getElementById("temp")
var desc = document.getElementById("desc")
var button = document.getElementById("submit")

button.addEventListener('click',function(name){
    fetch('api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=180a25c87884f08581d1bf406b41530d')
    .then(response => response.json())
    .then(data => {
        var tempValue = data['main']['temp']
        var nameValue = data['name']
        var descValue = data['weather'][0]['description']
    })

    var tempInCelsius = Math.floor(tempValue - 273.15)

    main.innerHTML = nameValue
    desc.innerHTML = "Description - "+ descValue
    temp.innerHTML = "Temperature -"+tempInCelsius+"°C"
    input.value = ""
})