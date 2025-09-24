'use client';

import { Card, CardTitle } from '@/components/ui/card';
import { WEATHER_CODE_DICTIONARY } from '@/constants/weather-code';
import { useHourlyDateWeather } from '@/hooks/weather/use-hourly-date-weather';
import { weatherSearchStore } from '@/stores/weather-search-store';
import dayjs from 'dayjs';
import { useAtomValue } from 'jotai';
import Image from 'next/image';
import { useState } from 'react';
import { WeatherDaySelect } from './weather-day-select';

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

  if (isPending) return <div>Loading...</div>;

  if (error || !hourlyWeathers) {
    return <div>asdasda</div>;
  }

  return (
    <Card className="p-4 md:p-6">
      <div className="flex items-center justify-between">
        <CardTitle>Hourly forecast</CardTitle>
        <WeatherDaySelect
          selectedDate={selectedDate}
          onDateChange={(date) => setSelectedDate(date)}
        />
      </div>

      <ul className="space-y-4">
        {hourlyWeathers.map((weather, index) => (
          <li
            className="bg-popover flex items-center justify-between rounded-md border px-3 py-2.5"
            key={index}
          >
            <div className="inline-flex items-center gap-2">
              <Image
                src={WEATHER_CODE_DICTIONARY[weather.weatherCode].icon}
                width={40}
                height={40}
                alt={WEATHER_CODE_DICTIONARY[weather.weatherCode].description}
              />
              <p className="text-preset-5 font-medium uppercase">
                {dayjs(weather.date).format('h A')}
              </p>
            </div>

            <p className="text-preset-7">
              {weather.temperature.toFixed()}&deg;
            </p>
          </li>
        ))}
      </ul>
    </Card>
  );
};
