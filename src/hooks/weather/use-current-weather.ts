import { OpenMeteoWeatherService } from '@/services/open-meteo-weather-service';
import { WeatherSettings } from '@/stores/weather-settings-store';
import { useQuery } from '@tanstack/react-query';

export const useCurrentWeather = ({
  settings,
}: {
  settings: WeatherSettings;
}) => {
  return useQuery({
    queryKey: [
      'current-weather',
      settings.latitude,
      settings.longitude,
      settings.temperatureUnit,
      settings.windSpeedUnit,
      settings.precipitationUnit,
    ],
    queryFn: async () => {
      const service = new OpenMeteoWeatherService();
      return await service.getCurrentWeather({
        latitude: settings.latitude,
        longitude: settings.longitude,
        temperatureUnit: settings.temperatureUnit,
        windSpeedUnit: settings.windSpeedUnit,
        precipitationUnit: settings.precipitationUnit,
      });
    },
  });
};
