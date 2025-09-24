'use client';

import { Card } from '@/components/ui/card';
import { WEATHER_CODE_DICTIONARY } from '@/constants/weather-code';
import { useCurrentWeather } from '@/hooks/weather/use-current-weather';
import { weatherSearchStore } from '@/stores/weather-search-store';
import { useAtomValue } from 'jotai';
import Image from 'next/image';
import {
  CurrentWeatherCardContent,
  CurrentWeatherCards,
  CurrentWeatherCardTitle,
  CurrentWeatherContainer,
  CurrentWeatherHero,
  CurrentWeatherHeroBackground,
  CurrentWeatherHeroContent,
  CurrentWeatherLocation,
} from './current-weather-cards';
import { CurrentWeatherSkeleton } from './current-weather-skeleton';

export const CurrentWeather = () => {
  const weatherSearch = useAtomValue(weatherSearchStore);

  const {
    data: weather,
    isPending,
    error,
  } = useCurrentWeather({
    weatherSearch,
  });

  const location = `${weatherSearch.cityName}, ${weatherSearch.countryName}`;

  if (isPending) {
    return <CurrentWeatherSkeleton location={location} />;
  }

  if (error || !weather) {
    return <div>asda</div>;
  }

  return (
    <CurrentWeatherContainer>
      <CurrentWeatherHero>
        <CurrentWeatherHeroBackground />

        <CurrentWeatherHeroContent>
          <CurrentWeatherLocation location={location} />

          <div className="flex items-center gap-5">
            <Image
              src={WEATHER_CODE_DICTIONARY[weather.weatherCode].icon}
              width={120}
              height={120}
              alt={WEATHER_CODE_DICTIONARY[weather.weatherCode].description}
            />
            <p className="text-preset-1">
              {weather.temperature.toFixed(0)}&deg;
            </p>
          </div>
        </CurrentWeatherHeroContent>
      </CurrentWeatherHero>

      <CurrentWeatherCards>
        <Card>
          <CurrentWeatherCardTitle>Feels Like</CurrentWeatherCardTitle>
          <CurrentWeatherCardContent>
            {weather.feelsLike.toFixed(0)}&deg;
          </CurrentWeatherCardContent>
        </Card>

        <Card>
          <CurrentWeatherCardTitle>Humidity</CurrentWeatherCardTitle>
          <CurrentWeatherCardContent>
            {weather.humidity.toFixed(0)}%
          </CurrentWeatherCardContent>
        </Card>

        <Card>
          <CurrentWeatherCardTitle>Wind</CurrentWeatherCardTitle>
          <CurrentWeatherCardContent>
            {weather.windSpeed.toFixed(0)}{' '}
            {weatherSearch.windSpeedUnit === 'kmh' ? 'km/h' : 'mph'}
          </CurrentWeatherCardContent>
        </Card>

        <Card>
          <CurrentWeatherCardTitle>Precipitation</CurrentWeatherCardTitle>
          <CurrentWeatherCardContent>
            {weather.precipitation.toFixed(0)}{' '}
            {weatherSearch.precipitationUnit === 'mm' ? 'mm' : 'in'}
          </CurrentWeatherCardContent>
        </Card>
      </CurrentWeatherCards>
    </CurrentWeatherContainer>
  );
};
