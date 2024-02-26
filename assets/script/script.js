document.addEventListener('DOMContentLoaded', function () {
  document
    .querySelector('.fa-magnifying-glass')
    .addEventListener('click', async function () {
      const cityName = document.querySelector('#location').value
      const apiKey = '165789c281f126a358566d015715b7db'

      if (cityName) {
        const apiUrl =
          'https://api.openweathermap.org/data/2.5/weather?q=' +
          cityName +
          '&appid=' +
          apiKey +
          '&units=metric' +
          '&lang=fr'

        try {
          const response = await fetch(apiUrl)
          const weatherData = await response.json()
          console.log(weatherData)

          const locationBox = document.querySelector('.location-box')
          locationBox.innerHTML = ''

          // Créer les éléments HTML de façon dynamique

          const cityWeather = document.createElement('h2')
          cityWeather.textContent =
            weatherData.name + ', ' + weatherData.sys.country
          cityWeather.classList.add('city')

          const weatherDescription = document.createElement('p')
          weatherDescription.textContent = weatherData.weather[0].description
          weatherDescription.classList.add('weather-description')

          const iconWeather = document.createElement('img')
          iconWeather.className = `icon-weather, wi-owm-${weatherData.weather[0].icon}, wi-owm`

          // WeatherDetails

          const WeatherDetails = document.querySelector('.weather-details')
          WeatherDetails.innerHTML = ''

          const detailsContainer = document.createElement('div')
          detailsContainer.classList.add('details-container')

          const temperatureWeather = document.createElement('h3')
          temperatureWeather.textContent = `${weatherData.main.temp}°C`
          temperatureWeather.classList.add('temperature')

          const details = document.createElement('div')
          details.classList.add('details-infos')

          const containerWind = document.createElement('div')
          containerWind.classList.add('container-wind')

          const iconDetails = document.createElement('i')
          iconDetails.classList.add('fa-solid', 'fa-wind')

          const detailsWeather = document.createElement('p')
          detailsWeather.textContent = `${weatherData.wind.speed} m/s`
          detailsWeather.classList.add('details-weather')

          const containerDroplet = document.createElement('div')
          containerDroplet.classList.add('container-droplet')

          const iconHumidity = document.createElement('i')
          iconHumidity.classList.add('fa-solid', 'fa-droplet')

          const humidityInfos = document.createElement('p')
          humidityInfos.textContent = `${weatherData.main.humidity} %`
          humidityInfos.classList.add('humidity-info')

          const containerPressure = document.createElement('div')
          containerPressure.classList.add('container-pressure')

          const pressureName = document.createElement('p')
          pressureName.textContent = `PA: ${weatherData.main.pressure}`
          pressureName.classList.add('pressure-name')

          const containerVisibility = document.createElement('div')
          containerVisibility.classList.add('container-visibility')

          const visibility = document.createElement('p')
          visibility.textContent = `Visibilité: ${weatherData.visibility} M`
          visibility.classList.add('visibility')

          // + Ajout des élément a location-box
          locationBox.appendChild(cityWeather)
          locationBox.appendChild(iconWeather)
          locationBox.appendChild(weatherDescription)

          WeatherDetails.appendChild(detailsContainer)
          detailsContainer.appendChild(temperatureWeather)

          WeatherDetails.appendChild(details)

          details.appendChild(containerWind)
          containerWind.appendChild(iconDetails)
          containerWind.appendChild(detailsWeather)

          details.appendChild(containerDroplet)
          containerDroplet.appendChild(iconHumidity)
          containerDroplet.appendChild(humidityInfos)

          details.appendChild(containerPressure)
          containerPressure.appendChild(pressureName)

          details.appendChild(containerVisibility)
          containerVisibility.appendChild(visibility)
        } catch (error) {
          console.error(
            'Erreur lors de la récupération des données météorologiques:',
            error
          )
        }
      } else {
        console.error("Veuillez entrer le nom d'une ville.")
      }
    })
})
