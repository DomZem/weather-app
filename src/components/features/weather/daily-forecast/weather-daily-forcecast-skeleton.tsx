import { Skeleton } from '@/components/ui/skeleton';
import {
  WeatherDailyForecastCarousel,
  WeatherDailyForecastCarouselCard,
  WeatherDailyForecastCarouselCardContent,
  WeatherDailyForecastCarouselContent,
  WeatherDailyForecastCarouselHeader,
} from './weather-daily-forecast-carousel';

export const WeatherDailyForecastSkeleton = () => {
  return (
    <WeatherDailyForecastCarousel>
      <WeatherDailyForecastCarouselHeader />

      <WeatherDailyForecastCarouselContent>
        {Array.from({
          length: 14,
        }).map((_, index) => (
          <WeatherDailyForecastCarouselCard key={index}>
            <Skeleton className="h-[21.59px] w-8 rounded-sm" />

            <Skeleton className="size-[3.75rem]" />

            <WeatherDailyForecastCarouselCardContent>
              <Skeleton className="size-5 rounded-sm" />
              <Skeleton className="size-5 rounded-sm" />
            </WeatherDailyForecastCarouselCardContent>
          </WeatherDailyForecastCarouselCard>
        ))}
      </WeatherDailyForecastCarouselContent>
    </WeatherDailyForecastCarousel>
  );
};
