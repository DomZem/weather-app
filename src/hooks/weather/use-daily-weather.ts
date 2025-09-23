import { OpenMeteoWeatherService } from '@/services/open-meteo-weather-service';
import { WeatherSettings } from '@/stores/weather-settings-store';
import { useQuery } from '@tanstack/react-query';

export const useDailyWeather = ({
  settings,
}: {
  settings: WeatherSettings;
}) => {
  return useQuery({
    queryKey: [
      'daily-weather',
      settings.latitude,
      settings.longitude,
      settings.temperatureUnit,
      settings.windSpeedUnit,
      settings.precipitationUnit,
    ],
    queryFn: async () => {
      const service = new OpenMeteoWeatherService();
      return await service.getDailyWeather({
        latitude: settings.latitude,
        longitude: settings.longitude,
        forecastDays: 14,
        temperatureUnit: settings.temperatureUnit,
        windSpeedUnit: settings.windSpeedUnit,
        precipitationUnit: settings.precipitationUnit,
      });
    },
  });
};
