import { render, screen } from '@testing-library/react';
import Cards from '../Components/Cards';

const weatherCurrent = {
    base: "stations",
    clouds: {all: 0},
    cod: 200,
    coord: {lon: -84.388, lat: 33.749},
    dt: 1648594881,
    id: 4180439,
    main: {temp: 73, feels_like: 71.83, temp_min: 68.77, temp_max: 75.58, pressure: 1017, humidity: 39},
    name: "Atlanta",
    sys: {type: 2, id: 2006620, country: "US", sunrise: 1648553335, sunset: 1648598124},
    timezone: -14400,
    visibility: 10000,
    weather: [{id: 800, main: "Clear", description: "clear sky", icon: "01d"}],
    wind: {speed: 6.91, deg: 140}
}

const dailyWeather = {
    alerts: [{
        description: "...WIND ADVISORY IN EFFECT FROM 11 AM WEDNESDAY TO 8 AM EDT\nTHURSDAY...\n* WHAT...South winds 15 to 25 mph with gusts up to 45 mph\nexpected.\n* WHERE...Portions of central, north central, northeast,\nnorthwest and west central Georgia.\n* WHEN...From 11 AM Wednesday to 8 AM EDT Thursday.\n* IMPACTS...Gusty winds could blow around unsecured objects.\nTree limbs could be blown down and a few power outages may\nresult.\n* ADDITIONAL DETAILS...Strong winds are expected ahead of an\napproaching line of storms during the day and evening hours\nWednesday. Additionally, strong gusty winds associated with an\napproaching line of storms late Wednesday into early Thursday\nare also possible.",
        end: 1648728000,
        event: "Wind Advisory",
        sender_name: "NWS Atlanta (Northern and Central Georgia)",
        start: 1648652400,
        tags: ["Wind"]
    }],
    current: {
        dt: 1648595317, 
        sunrise: 1648553335, 
        sunset: 1648598124, 
        temp: 72.64, 
        feels_like: 71.44,
        clouds: 0,
        dew_point: 46.29,
        dt: 1648595317,
        feels_like: 71.44,
        humidity: 39,
        pressure: 1018,
        sunrise: 1648553335,
        sunset: 1648598124,
        temp: 72.64,
        uvi: 0.21,
        visibility: 10000,
        weather: [{id: 800, main: "Clear", description: "clear sky", icon: "01d"}],
        wind_deg: 140,
        wind_speed: 8.05
    },
    daily: 
    [{
        clouds: 80,
        dew_point: 35.22,
        dt: 1648573200,
        feels_like: {day: 65.12, night: 64.54, eve: 71.44, morn: 50.47},
        humidity: 30,
        moon_phase: 0.91,
        moonrise: 1648549260,
        moonset: 1648589160,
        pop: 0,
        pressure: 1021,
        sunrise: 1648553335,
        sunset: 1648598124,
        temp: {day: 67.28, min: 51.78, max: 73.18, night: 65.7, eve: 72.64, morn: 53.74},
        uvi: 6.95,
        weather: [{id: 803, main: "Clouds", description: "broken clouds", icon: "04d"}],
        wind_deg: 143,
        wind_gust: 24.56,
        wind_speed: 8.05,
    },{
        clouds: 80,
        dew_point: 35.22,
        dt: 1648573200,
        feels_like: {day: 65.12, night: 64.54, eve: 71.44, morn: 50.47},
        humidity: 30,
        moon_phase: 0.91,
        moonrise: 1648549260,
        moonset: 1648589160,
        pop: 0,
        pressure: 1021,
        sunrise: 1648553335,
        sunset: 1648598124,
        temp: {day: 67.28, min: 51.78, max: 73.18, night: 65.7, eve: 72.64, morn: 53.74},
        uvi: 6.95,
        weather: [{id: 803, main: "Clouds", description: "broken clouds", icon: "04d"}],
        wind_deg: 143,
        wind_gust: 24.56,
        wind_speed: 8.05,
    },{
        clouds: 80,
        dew_point: 35.22,
        dt: 1648573200,
        feels_like: {day: 65.12, night: 64.54, eve: 71.44, morn: 50.47},
        humidity: 30,
        moon_phase: 0.91,
        moonrise: 1648549260,
        moonset: 1648589160,
        pop: 0,
        pressure: 1021,
        sunrise: 1648553335,
        sunset: 1648598124,
        temp: {day: 67.28, min: 51.78, max: 73.18, night: 65.7, eve: 72.64, morn: 53.74},
        uvi: 6.95,
        weather: [{id: 803, main: "Clouds", description: "broken clouds", icon: "04d"}],
        wind_deg: 143,
        wind_gust: 24.56,
        wind_speed: 8.05,
    },{
        clouds: 80,
        dew_point: 35.22,
        dt: 1648573200,
        feels_like: {day: 65.12, night: 64.54, eve: 71.44, morn: 50.47},
        humidity: 30,
        moon_phase: 0.91,
        moonrise: 1648549260,
        moonset: 1648589160,
        pop: 0,
        pressure: 1021,
        sunrise: 1648553335,
        sunset: 1648598124,
        temp: {day: 67.28, min: 51.78, max: 73.18, night: 65.7, eve: 72.64, morn: 53.74},
        uvi: 6.95,
        weather: [{id: 803, main: "Clouds", description: "broken clouds", icon: "04d"}],
        wind_deg: 143,
        wind_gust: 24.56,
        wind_speed: 8.05,
    },{
        clouds: 80,
        dew_point: 35.22,
        dt: 1648573200,
        feels_like: {day: 65.12, night: 64.54, eve: 71.44, morn: 50.47},
        humidity: 30,
        moon_phase: 0.91,
        moonrise: 1648549260,
        moonset: 1648589160,
        pop: 0,
        pressure: 1021,
        sunrise: 1648553335,
        sunset: 1648598124,
        temp: {day: 67.28, min: 51.78, max: 73.18, night: 65.7, eve: 72.64, morn: 53.74},
        uvi: 6.95,
        weather: [{id: 803, main: "Clouds", description: "broken clouds", icon: "04d"}],
        wind_deg: 143,
        wind_gust: 24.56,
        wind_speed: 8.05,
    },{
        clouds: 80,
        dew_point: 35.22,
        dt: 1648573200,
        feels_like: {day: 65.12, night: 64.54, eve: 71.44, morn: 50.47},
        humidity: 30,
        moon_phase: 0.91,
        moonrise: 1648549260,
        moonset: 1648589160,
        pop: 0,
        pressure: 1021,
        sunrise: 1648553335,
        sunset: 1648598124,
        temp: {day: 67.28, min: 51.78, max: 73.18, night: 65.7, eve: 72.64, morn: 53.74},
        uvi: 6.95,
        weather: [{id: 803, main: "Clouds", description: "broken clouds", icon: "04d"}],
        wind_deg: 143,
        wind_gust: 24.56,
        wind_speed: 8.05,
    },{
        clouds: 80,
        dew_point: 35.22,
        dt: 1648573200,
        feels_like: {day: 65.12, night: 64.54, eve: 71.44, morn: 50.47},
        humidity: 30,
        moon_phase: 0.91,
        moonrise: 1648549260,
        moonset: 1648589160,
        pop: 0,
        pressure: 1021,
        sunrise: 1648553335,
        sunset: 1648598124,
        temp: {day: 67.28, min: 51.78, max: 73.18, night: 65.7, eve: 72.64, morn: 53.74},
        uvi: 6.95,
        weather: [{id: 803, main: "Clouds", description: "broken clouds", icon: "04d"}],
        wind_deg: 143,
        wind_gust: 24.56,
        wind_speed: 8.05,
    }],
    hourly: 
    [{
        clouds: 0,
        dew_point: 46.29,
        dt: 1648594800,
        feels_like: 71.44,
        humidity: 39,
        pop: 0,
        pressure: 1018,
        temp: 72.64,
        uvi: 0.21,
        visibility: 10000,
        weather: [{id: 800, main: "Clear", description: "clear sky", icon: "01d"}],
        wind_deg: 155,
        wind_gust: 13.15,
        wind_speed: 7.54
    }],
    lat: 33.749,
    lon: -84.388,
    minutely: [{dt: 1648595340, precipitation: 0}, {dt: 1648595400, precipitation: 0}],
    timezone: "America/New_York",
    timezone_offset: -14400
}


test('should render a card', () => {
  render(<Cards weatherDaily={dailyWeather} />);

});

test('if statement test', () => {
    render(<Cards/>);
  
  });

test('if statement test', () => {
    render(<Cards weatherDaily={weatherCurrent}/>);
  
});


