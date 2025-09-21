import {
  WeatherMetrics,
  WeatherPrecipitationUnit,
  WeatherTemperatureUnit,
  WeatherWindSpeedUnit,
} from '@/types/weather';
import { atom } from 'jotai';

export type WeatherSettings = {
  latitude: number;
  longitude: number;
  temperatureUnit: WeatherTemperatureUnit;
  windSpeedUnit: WeatherWindSpeedUnit;
  precipitationUnit: WeatherPrecipitationUnit;
  metrics: WeatherMetrics;
};

export const weatherSettingsStore = atom<WeatherSettings>({
  latitude: 49.88928,
  longitude: 19.4904064,
  temperatureUnit: 'celsius',
  windSpeedUnit: 'kmh',
  precipitationUnit: 'mm',
  metrics: 'metric',
});
