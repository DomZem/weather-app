'use client';

import { WEATHER_CODE_DICTIONARY } from '@/constants/weather-code';
import { useDailyWeather } from '@/hooks/weather/use-daily-weather';
import { weatherSearchStore } from '@/stores/weather-search-store';
import dayjs from 'dayjs';
import { useAtomValue } from 'jotai';
import Image from 'next/image';
import { WeatherDailyForecastSkeleton } from './weather-daily-forcecast-skeleton';
import {
  WeatherDailyForecastCarousel,
  WeatherDailyForecastCarouselCard,
  WeatherDailyForecastCarouselCardContent,
  WeatherDailyForecastCarouselCardTitle,
  WeatherDailyForecastCarouselContent,
  WeatherDailyForecastCarouselHeader,
} from './weather-daily-forecast-carousel';

export const WeatherDailyForecast = () => {
  const weatherSearch = useAtomValue(weatherSearchStore);

  const {
    isPending,
    error,
    data: dailyWeathers,
  } = useDailyWeather({
    weatherSearch,
  });

  if (isPending) {
    return <WeatherDailyForecastSkeleton />;
  }

  if (error || !dailyWeathers) {
    throw new Error('Failed to load weather data');
  }

  return (
    <WeatherDailyForecastCarousel>
      <WeatherDailyForecastCarouselHeader />

      <WeatherDailyForecastCarouselContent>
        {dailyWeathers.map((weather, index) => (
          <WeatherDailyForecastCarouselCard key={index}>
            <WeatherDailyForecastCarouselCardTitle>
              {dayjs(weather.date).format('ddd')}
            </WeatherDailyForecastCarouselCardTitle>

            <Image
              src={WEATHER_CODE_DICTIONARY[weather.weatherCode].icon}
              width={60}
              height={60}
              alt={WEATHER_CODE_DICTIONARY[weather.weatherCode].description}
            />

            <WeatherDailyForecastCarouselCardContent>
              <p>{weather.maxTemperature.toFixed(0)}&deg;</p>
              <p className="text-muted-foreground">
                {weather.minTemperature.toFixed(0)}&deg;
              </p>
            </WeatherDailyForecastCarouselCardContent>
          </WeatherDailyForecastCarouselCard>
        ))}
      </WeatherDailyForecastCarouselContent>
    </WeatherDailyForecastCarousel>
  );
};
