import { CurrentWeather } from '@/components/features/weather/current-weather/current-weather';
import { WeatherDailyForecast } from '@/components/features/weather/daily-forecast/weather-daily-forecast';
import { WeatherHourlyForecast } from '@/components/features/weather/hourly-forecast/weather-hourly-forecast';
import { SearchCity } from '@/components/features/weather/search-city';

export default function Home() {
  return (
    <>
      <h1 className="text-preset-2 font-bricolage text-center">
        How&apos;s the sky looking today?
      </h1>

      <SearchCity />

      <main className="grid gap-8 lg:grid-cols-9">
        <div className="space-y-8 overflow-hidden lg:col-span-6 lg:space-y-12">
          <CurrentWeather />
          <WeatherDailyForecast />
        </div>

        <div className="lg:col-span-3">
          <WeatherHourlyForecast />
        </div>
      </main>
    </>
  );
}
