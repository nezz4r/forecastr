<div style="font-size:20px">
  <h1>Forecastr</h1>
</div>

# About The Project

## Preview

The project can be previewed at https://forecastr.raulv.tech

<br/>

## Overview

This weather forecast app is made with React, Next.js and styled with styled-components.

It supports geolocalization, city searching autocomplete.

<br/>

## Features

### Geolocalization

When you first enter the website, it asks to know your location, if you accept, it can then show you weather forecast for your current position.

### City searching

The input box for city searching has autocomplete built-in, thanks to [Teleport API](https://developers.teleport.org/api/)

### Weather Forecast

Weather forecast is very accurate, thanks to [OpenWeatherMap](https://openweathermap.org/)

<br/>

## Screenshots

<br/>

Upcoming

# Setting Up

### Requirements

- Node 14.4.x or up
- Yarn (or npm)

 <br/>

### Environment variables

As of right now, you only need a OpenWeatherMap API Key, it should be named as "NEXT_PUBLIC_WEATHER_API_KEY" in your .env.local file
</br>

### Installing the dependencies

```
$ yarn install
```

<br/>

## Available Scripts

In the project directory, you can run:

 <br/> 
 
### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

 <br/>

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

 <br/>

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles Next.js in production mode and optimizes the build for the best performance.

 <br/>

### `yarn start`

Serves your app on localhost

<br/>

### `yarn lint`

Runs ESLint checking.

If you want to also fix errors, pass the "--fix" flag to this command.
