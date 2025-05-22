// Copyright (c) 2025 Ain Jeong All rights reserved
//
// Created by: Ain Jeong
// Created on: May 2025
// This file contains the JS functions for index.html

'use strict'
/**
 * This function gets the weather today
 * The 'async' is there because it will take time for the internet to return the value
 */
async function weatherToday () {
  // the 'try' is here because the internet may not be working
  // it is like an 'if ... else' statement'
  try {
    const resultJSON = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5'
    )
    const jsonData = await resultJSON.json()
    console.log(jsonData)

    // bring the information from API
    const weatherDescription = jsonData.weather[0].description
    const iconURL = jsonData.weather[0].icon
    const tempCelsius = (jsonData.main.temp - 273.15).toFixed(1)
    const location = jsonData.name

    // output
    document.getElementById('weather-today').innerHTML =
      'Weather: ' + weatherDescription + '<br />' +
      'Temperature: ' + tempCelsius + ' °C<br />' +
      'Location: ' + location + '<br />' +
      '<img src="' + iconURL + '" alt="Weather icon image">'
  } catch (error) {
    console.error(error)
  }
}
