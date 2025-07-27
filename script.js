const searchInput = document.getElementById('search-input')
const searchBtn = document.getElementById('search-btn')
const weatherIcon = document.querySelector('.weather-icon')
const weatherTemp = document.querySelector('.temp')
const cityName = document.querySelector('.city-name')
const humidity = document.querySelector('.humidity')
const windy = document.querySelector('.windy')


searchBtn.addEventListener('click', () => {
    const city = searchInput.value
  if(city !== ''){
     cheackWeather(city)
    console.log(city)
    document.getElementById('search-input').value = ''
  }
})



const cheackWeather = async (city) => {
  const apiKey = '14b1590f9b4ffdcca03b19cca62fe530'
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  try{
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data)
    weatherTemp.innerText = `${data.main.temp} °c`
    cityName.innerText = `${data.name}`
    humidity.innerText=`${data.main.humidity} %`
    windy.innerText = `${data.wind.speed} km/h`
   weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  }
  catch(error){
    console.log(error)
  }
}