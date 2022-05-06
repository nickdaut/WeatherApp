# Weather App

by Nicholas Daut

## API info

The Weather App utilizes a free version API, [Open Weather Map](https://openweathermap.org/).

The specific API used are Current Weather Data and One Call API.

This API gives users access to realtime, future, and historical weather information for anywhere on the globe.

## About the App

The Weather App allows users to search for weather information from any location in the world with data from the Open Weather Map API. A simple search for any city in the world will return the current weather conditions of location and a five-day forecast. It also features a dynamically changing background based on weather conditions passed from the API. If a city is described as raining, the background will change to show a rain feature.

**Technology Stack**

Backend:
  - React
  - JavaScript
  - HTML
  
Frontend:
  - ReactJS
  - Bootstrap
  - Reactstrap
  - JS
  - CSS

E2E Testing:
  - Jest
  - Cypress


## Opening Gitpod

To open gitpod and run the web app you need to type in gitpod.io/# at the very beginning of the URL. I.E. gitpod.io/#https://github.com/nickdaut/WeatherApp/edit/master/


## Run the App

To run the Weather App, you'll need to run the following commands in the terminal:

```console
$ cd /workspace/WeatherApp/react_app
```

then

```console
$ yarn
```

then

```console
$ yarn start
```

## Testing with Jest

To run tests from the test suite using Jest, run this command in the terminal:

```console
$ yarn test
```

## Testing with Cypress

To run tests from the test suite using Cypress, follow these instructions:

First, make sure that the app is running

```console
$ yarn start
```

Next, open a new terminal and cd into the correct directory

```console
$ cd /workspace/WeatherApp/react_app
```

To launch Cypress, enter this command into the terminal

```console
$ npx cypress run
```

If Cypress needs to be reinstalled, run the following command

```console
$ npx cypress install
```
