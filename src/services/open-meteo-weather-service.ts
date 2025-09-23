import {
  WeatherPrecipitationUnit,
  WeatherTemperatureUnit,
  WeatherWindSpeedUnit,
} from '@/types/weather';
import { fetchWeatherApi } from 'openmeteo';

export class OpenMeteoWeatherService {
  private readonly BASE_URL = 'https://api.open-meteo.com/v1/forecast';

  public async getCurrentWeather({
    latitude,
    longitude,
    temperatureUnit = 'celsius',
    windSpeedUnit = 'kmh',
    precipitationUnit = 'mm',
  }: {
    latitude: number;
    longitude: number;
    temperatureUnit?: WeatherTemperatureUnit;
    windSpeedUnit?: WeatherWindSpeedUnit;
    precipitationUnit?: WeatherPrecipitationUnit;
  }) {
    const params = {
      latitude,
      longitude,
      current: [
        'temperature_2m',
        'relative_humidity_2m',
        'apparent_temperature',
        'wind_speed_10m',
        'precipitation',
        'weather_code',
      ],
      forecast_days: 1,
      temperature_unit: temperatureUnit,
      wind_speed_unit: windSpeedUnit,
      precipitation_unit: precipitationUnit,
    };

    const responses = await fetchWeatherApi(this.BASE_URL, params);
    const response = responses[0];

    const current = response.current()!;

    const data = {
      temperature: current.variables(0)!.value(),
      humidity: current.variables(1)!.value(),
      feelsLike: current.variables(2)!.value(),
      windSpeed: current.variables(3)!.value(),
      precipitation: current.variables(4)!.value(),
      weatherCode: current.variables(5)!.value(),
    };

    return data;
  }

  public async getHourlyWeather({
    latitude,
    longitude,
    date,
    temperatureUnit = 'celsius',
  }: {
    latitude: number;
    longitude: number;
    date: string;
    temperatureUnit?: WeatherTemperatureUnit;
  }) {
    const params = {
      latitude,
      longitude,
      hourly: ['weather_code', 'temperature_2m'],
      start_date: date,
      end_date: date,
      temperature_unit: temperatureUnit,
    };

    const responses = await fetchWeatherApi(this.BASE_URL, params);
    const response = responses[0];

    const utcOffsetSeconds = response.utcOffsetSeconds();
    const hourly = response.hourly()!;

    const times = [
      ...Array(
        (Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval(),
      ),
    ].map(
      (_, i) =>
        new Date(
          (Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) *
            1000,
        ),
    );

    const weatherCodes = hourly.variables(0)!.valuesArray()!;
    const temperatures = hourly.variables(1)!.valuesArray()!;

    const data = times.map((date, i) => ({
      date,
      temperature: temperatures[i],
      weatherCode: weatherCodes[i],
    }));

    return data;
  }

  public async getDailyWeather({
    latitude,
    longitude,
    forecastDays = 7,
    temperatureUnit = 'celsius',
    windSpeedUnit = 'kmh',
    precipitationUnit = 'mm',
  }: {
    latitude: number;
    longitude: number;
    forecastDays?: 1 | 3 | 7 | 14 | 16;
    temperatureUnit?: WeatherTemperatureUnit;
    windSpeedUnit?: WeatherWindSpeedUnit;
    precipitationUnit?: WeatherPrecipitationUnit;
  }) {
    const params = {
      latitude,
      longitude,
      daily: ['weather_code', 'temperature_2m_max', 'temperature_2m_min'],
      forecast_days: forecastDays,
      temperature_unit: temperatureUnit,
      wind_speed_unit: windSpeedUnit,
      precipitation_unit: precipitationUnit,
    };

    const responses = await fetchWeatherApi(this.BASE_URL, params);

    const response = responses[0];
    const daily = response.daily()!;
    const utcOffsetSeconds = response.utcOffsetSeconds();

    const times = [
      ...Array(
        (Number(daily.timeEnd()) - Number(daily.time())) / daily.interval(),
      ),
    ].map(
      (_, i) =>
        new Date(
          (Number(daily.time()) + i * daily.interval() + utcOffsetSeconds) *
            1000,
        ),
    );

    const weatherCodes = daily.variables(0)!.valuesArray()!;
    const maxTemps = daily.variables(1)!.valuesArray()!;
    const minTemps = daily.variables(2)!.valuesArray()!;

    const result = times.map((date, i) => ({
      date,
      minTemperature: minTemps[i],
      maxTemperature: maxTemps[i],
      weatherCode: weatherCodes[i],
    }));

    return result;
  }
}
