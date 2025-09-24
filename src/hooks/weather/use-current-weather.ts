import { OpenMeteoWeatherService } from '@/services/open-meteo-weather-service';
import { WeatherSearch } from '@/stores/weather-search-store';
import { useQuery } from '@tanstack/react-query';

export const useCurrentWeather = ({
  weatherSearch,
}: {
  weatherSearch: WeatherSearch;
}) => {
  return useQuery({
    queryKey: [
      'current-weather',
      weatherSearch.latitude,
      weatherSearch.longitude,
      weatherSearch.temperatureUnit,
      weatherSearch.windSpeedUnit,
      weatherSearch.precipitationUnit,
    ],
    queryFn: async () => {
      const service = new OpenMeteoWeatherService();
      return await service.getCurrentWeather({
        latitude: weatherSearch.latitude,
        longitude: weatherSearch.longitude,
        temperatureUnit: weatherSearch.temperatureUnit,
        windSpeedUnit: weatherSearch.windSpeedUnit,
        precipitationUnit: weatherSearch.precipitationUnit,
      });
    },
    gcTime: 5 * 60 * 1000, // 5 minutes
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
