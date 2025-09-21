'use client';

import { Card, CardTitle } from '@/components/ui/card';
import { WEATHER_CODE_DICTIONARY } from '@/constants/weather-code';
import { useCurrentWeather } from '@/hooks/weather/use-current-weather';
import { weatherSettingsStore } from '@/stores/weather-settings-store';
import dayjs from 'dayjs';
import { useAtomValue } from 'jotai';
import Image from 'next/image';

export const CurrentWeather = () => {
  const settings = useAtomValue(weatherSettingsStore);

  const { isPending, error, data } = useCurrentWeather({
    settings,
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>asda</div>;
  }

  const today = dayjs().format('dddd, MMM D, YYYY');

  return (
    <div className="space-y-5 lg:space-y-8">
      <div className="relative h-72 overflow-hidden rounded-[1.25rem]">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src="./hero-bg.svg"
          fill
          alt={''}
        />

        <div className="relative z-10 flex h-full flex-col items-center gap-4 px-6 py-10 md:flex-row md:justify-between md:px-4 md:py-4">
          <div className="space-y-4 text-center md:text-left">
            <p className="text-preset-4">Berlin, Germany</p>
            <p className="text-preset-6 opacity-80">{today}</p>
            <p></p>
          </div>

          <div className="flex items-center gap-5">
            <Image
              src={WEATHER_CODE_DICTIONARY[data.weatherCode].icon}
              width={120}
              height={120}
              alt={WEATHER_CODE_DICTIONARY[data.weatherCode].description}
            />
            <p className="text-preset-1">{data.temperature.toFixed(0)}&deg;</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-4 md:grid-cols-4 md:grid-rows-none md:gap-5 lg:gap-6">
        <Card>
          <CardTitle className="text-preset-6 text-muted-foreground">
            Feels Like
          </CardTitle>
          <p className="text-preset-3">{data.feelsLike.toFixed(0)}&deg;</p>
        </Card>

        <Card>
          <CardTitle className="text-preset-6 text-muted-foreground">
            Humidity
          </CardTitle>
          <p className="text-preset-3">{data.humidity.toFixed(0)}%</p>
        </Card>

        <Card>
          <CardTitle className="text-preset-6 text-muted-foreground">
            Wind
          </CardTitle>
          <p className="text-preset-3">
            {data.windSpeed.toFixed(0)}{' '}
            {settings.windSpeedUnit === 'kmh' ? 'km/h' : 'mph'}
          </p>
        </Card>

        <Card>
          <CardTitle className="text-preset-6 text-muted-foreground">
            Precipitation
          </CardTitle>
          <p className="text-preset-3">
            {data.precipitation.toFixed(0)}{' '}
            {settings.precipitationUnit === 'mm' ? 'mm' : 'in'}
          </p>
        </Card>
      </div>
    </div>
  );
};
