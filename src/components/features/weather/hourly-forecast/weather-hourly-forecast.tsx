'use client';

import { CardTitle } from '@/components/ui/card';
import { WEATHER_CODE_DICTIONARY } from '@/constants/weather-code';
import { useHourlyDateWeather } from '@/hooks/weather/use-hourly-date-weather';
import { weatherSearchStore } from '@/stores/weather-search-store';
import dayjs from 'dayjs';
import { useAtomValue } from 'jotai';
import Image from 'next/image';
import { useState } from 'react';
import { WeatherDaySelect } from './weather-day-select';
import {
  WeatherHourlyForecastCard,
  WeatherHourlyForecastCardContent,
  WeatherHourlyForecastCarousel,
  WeatherHourlyForecastCarouselContent,
  WeatherHourlyForecastCarouselItem,
  WeatherHourlyForecastContainer,
  WeatherHourlyForecastHeader,
} from './weather-hourly-forecast-carousel';
import { WeatherHourlyForecastSkeleton } from './weather-hourly-forecast-skeleton';

export const WeatherHourlyForecast = () => {
  const weatherSearch = useAtomValue(weatherSearchStore);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const formattedDate = dayjs(selectedDate).format('YYYY-MM-DD');

  const {
    isPending,
    error,
    data: hourlyWeathers,
  } = useHourlyDateWeather({
    weatherSearch,
    date: formattedDate,
  });

  if (isPending) return <WeatherHourlyForecastSkeleton />;

  if (error || !hourlyWeathers) {
    return <div>asdasda</div>;
  }

  return (
    <WeatherHourlyForecastContainer>
      <WeatherHourlyForecastHeader>
        <CardTitle>Hourly forecast</CardTitle>
        <WeatherDaySelect
          selectedDate={selectedDate}
          onDateChange={(date) => setSelectedDate(date)}
        />
      </WeatherHourlyForecastHeader>

      <WeatherHourlyForecastCarousel>
        <WeatherHourlyForecastCarouselContent>
          {hourlyWeathers.map((weather, index) => (
            <WeatherHourlyForecastCarouselItem key={index}>
              <WeatherHourlyForecastCard>
                <WeatherHourlyForecastCardContent>
                  <Image
                    src={WEATHER_CODE_DICTIONARY[weather.weatherCode].icon}
                    width={40}
                    height={40}
                    alt={
                      WEATHER_CODE_DICTIONARY[weather.weatherCode].description
                    }
                  />

                  <p className="text-preset-5 font-medium uppercase">
                    {dayjs(weather.date).format('h A')}
                  </p>
                </WeatherHourlyForecastCardContent>

                <p className="text-preset-7">
                  {weather.temperature.toFixed()}&deg;
                </p>
              </WeatherHourlyForecastCard>
            </WeatherHourlyForecastCarouselItem>
          ))}
        </WeatherHourlyForecastCarouselContent>
      </WeatherHourlyForecastCarousel>
    </WeatherHourlyForecastContainer>
  );
};
