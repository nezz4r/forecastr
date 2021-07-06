<div style="font-size:20px">
  <h1>Forecastr</h1>
</div>

# About The Project

## 👀 Preview

The project can be previewed at https://forecastr.raulv.tech

<br/>

## 🌐 Overview

This weather forecast app is made with React, Next.js and styled with styled-components.

It supports geolocalization, city searching autocomplete, and displays lots of relevant info about your current weather.

<br/>

## 🚀 Features

### Geolocalization

When you first enter the app, it asks to know your location, if you accept, it can then show you weather forecast for your current position.

### City searching

The input box for city searching has autocomplete built-in, thanks to [Teleport API](https://developers.teleport.org/api/)

Update: This feature is not working right now as Teleport API is down for mainenance, all errors are handled so the app continues to work with limited functionality, only fetching your weather data from geolocalization.

### Weather Forecast

Weather forecast is very accurate and detailed, thanks to [OpenWeatherMap](https://openweathermap.org/).

It shows thermal sensation, humidity, pressure, wind speed, forecasted temp for the next 6 hours and max-min temperatures for the next 6 days.

### Metric and Imperial units

You can toggle between metric and imperial units via the second button next to the search bar

Note that when you toggle the unit, date and time formats also change from 'DD/MM' to 'MM/DD' and '14:00' to '2 PM'

<br/>

## 📷 Screenshots

![1](https://i.imgur.com/wJGzDZC.png)
![2](https://i.imgur.com/rIUW6tk.png)
<br/>

## Upcoming Features

### LocalStorage Support

LocalStorage is already 95% implemented via the 'useLocalStorage' custom hook, it only needs to be debbuged. To try to use it, you can change any 'useState' to the custom hook 'useLocalStorage' with no changes other than to provide a 'key' for each state as the first argument.

```javascript
const [state, setState] = useLocalStorage('key', 'initial state');
```

### Theming Support

Theming Support is already 80% done, but a way to actually pass in the other theme object needs to be implemented via styled-components 'ThemeContext' .

It will also need a way for the user to toggle between themes.

# Setting Up

### Requirements

- Node 14.4.x or up
- Yarn (recommended) or npm

 <br/>

### Environment variables

As of right now, you only need a OpenWeatherMap API Key, rename your .env to .env.local and put it in there.
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
