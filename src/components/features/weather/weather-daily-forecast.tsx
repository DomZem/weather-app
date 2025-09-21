'use client';

import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { WEATHER_CODE_DICTIONARY } from '@/constants/weather-code';
import { useDailyWeather } from '@/hooks/weather/use-daily-weather';
import { weatherSettingsStore } from '@/stores/weather-settings-store';
import dayjs from 'dayjs';
import Autoplay from 'embla-carousel-autoplay';
import { useAtomValue } from 'jotai';
import Image from 'next/image';

export const WeatherDailyForecast = () => {
  const settings = useAtomValue(weatherSettingsStore);

  const {
    isPending,
    error,
    data: dailyWeathers,
  } = useDailyWeather({
    settings,
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error || !dailyWeathers) {
    return <div>Error loading data</div>;
  }

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="space-y-5 overflow-hidden"
    >
      <div className="flex items-center justify-between">
        <p className="text-preset-5">Daily forecast</p>

        <div className="inline-flex items-center gap-2">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </div>

      <CarouselContent className="-ml-4">
        {dailyWeathers.map((weather, index) => (
          <CarouselItem className="basis-1/3 pl-4 md:basis-2/12" key={index}>
            <Card className="flex flex-col items-center gap-4 px-2.5 py-4">
              <p className="text-preset-6">
                {dayjs(weather.date).format('ddd')}
              </p>

              <Image
                src={WEATHER_CODE_DICTIONARY[weather.weatherCode].icon}
                width={60}
                height={60}
                alt={WEATHER_CODE_DICTIONARY[weather.weatherCode].description}
              />

              <div className="text-preset-7 flex w-full items-center justify-between">
                <p>{weather.maxTemperature.toFixed(0)}&deg;</p>
                <p className="text-muted-foreground">
                  {weather.minTemperature.toFixed(0)}&deg;
                </p>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
