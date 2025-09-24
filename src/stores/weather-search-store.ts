import {
  WeatherMetrics,
  WeatherPrecipitationUnit,
  WeatherTemperatureUnit,
  WeatherWindSpeedUnit,
} from '@/types/weather';
import { atom } from 'jotai';

export type WeatherSearch = {
  latitude: number;
  longitude: number;
  temperatureUnit: WeatherTemperatureUnit;
  windSpeedUnit: WeatherWindSpeedUnit;
  precipitationUnit: WeatherPrecipitationUnit;
  metrics: WeatherMetrics;
  cityName: string;
  countryName: string;
};

export const weatherSearchStore = atom<WeatherSearch>({
  latitude: 52.52437,
  longitude: 13.41053,
  temperatureUnit: 'celsius',
  windSpeedUnit: 'kmh',
  precipitationUnit: 'mm',
  metrics: 'metric',
  cityName: 'Berlin',
  countryName: 'Germany',
});
