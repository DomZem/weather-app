import { OpenMeteoWeatherService } from '@/services/open-meteo-weather-service';
import { WeatherSettings } from '@/stores/weather-settings-store';
import { useQuery } from '@tanstack/react-query';

export const useHourlyDateWeather = ({
  settings,
  date,
}: {
  settings: WeatherSettings;
  date: string;
}) => {
  return useQuery({
    queryKey: [
      'hourly-date-weather',
      settings.latitude,
      settings.longitude,
      settings.temperatureUnit,
      date,
    ],
    queryFn: async () => {
      const service = new OpenMeteoWeatherService();
      return await service.getHourlyWeather({
        latitude: settings.latitude,
        longitude: settings.longitude,
        temperatureUnit: settings.temperatureUnit,
        date,
      });
    },
  });
};
