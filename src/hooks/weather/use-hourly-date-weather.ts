import { OpenMeteoWeatherService } from '@/services/open-meteo-weather-service';
import { WeatherSearch } from '@/stores/weather-search-store';
import { useQuery } from '@tanstack/react-query';

export const useHourlyDateWeather = ({
  weatherSearch,
  date,
}: {
  weatherSearch: WeatherSearch;
  date: string;
}) => {
  return useQuery({
    queryKey: [
      'hourly-date-weather',
      weatherSearch.latitude,
      weatherSearch.longitude,
      weatherSearch.temperatureUnit,
      date,
    ],
    queryFn: async () => {
      const service = new OpenMeteoWeatherService();
      return await service.getHourlyWeather({
        latitude: weatherSearch.latitude,
        longitude: weatherSearch.longitude,
        temperatureUnit: weatherSearch.temperatureUnit,
        date,
      });
    },
    gcTime: 5 * 60 * 1000, // 5 minutes
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
