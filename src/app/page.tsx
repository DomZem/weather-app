import { CurrentWeather } from '@/components/features/weather/current-weather';
import { SearchPlaceWeatherForm } from '@/components/features/weather/search-place-weather-form';
import { WeatherDailyForecast } from '@/components/features/weather/weather-daily-forecast';
import { WeatherHourlyForecast } from '@/components/features/weather/weather-hourly-forecast';
import { Header } from '@/components/layout/header';

export default function Home() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[79rem] space-y-12 px-4 pb-4 md:px-6 md:pb-6 lg:space-y-16">
      <Header />

      <h1 className="text-preset-2 font-bricolage text-center">
        How&apos;s the sky looking today?
      </h1>

      <SearchPlaceWeatherForm />

      <main className="grid gap-8 lg:grid-cols-9">
        <div className="space-y-8 overflow-hidden lg:col-span-6 lg:space-y-12">
          <CurrentWeather />
          <WeatherDailyForecast />
        </div>

        <div className="lg:col-span-3">
          <WeatherHourlyForecast />
        </div>
      </main>
    </div>
  );
}
