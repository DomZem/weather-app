import { CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import {
  WeatherHourlyForecastCard,
  WeatherHourlyForecastCardContent,
  WeatherHourlyForecastCarousel,
  WeatherHourlyForecastCarouselContent,
  WeatherHourlyForecastCarouselItem,
  WeatherHourlyForecastContainer,
  WeatherHourlyForecastHeader,
} from './weather-hourly-forecast-carousel';

export const WeatherHourlyForecastSkeleton = () => {
  return (
    <WeatherHourlyForecastContainer>
      <WeatherHourlyForecastHeader className="flex items-center justify-between">
        <CardTitle>Hourly forecast</CardTitle>
        <Skeleton className="h-9 w-40" />
      </WeatherHourlyForecastHeader>

      <WeatherHourlyForecastCarousel>
        <WeatherHourlyForecastCarouselContent>
          {Array.from({ length: 24 }).map((_, index) => (
            <WeatherHourlyForecastCarouselItem key={index}>
              <WeatherHourlyForecastCard>
                <WeatherHourlyForecastCardContent>
                  <Skeleton className="size-10" />
                  <Skeleton className="h-6 w-12" />
                </WeatherHourlyForecastCardContent>

                <Skeleton className="size-5" />
              </WeatherHourlyForecastCard>
            </WeatherHourlyForecastCarouselItem>
          ))}
        </WeatherHourlyForecastCarouselContent>
      </WeatherHourlyForecastCarousel>
    </WeatherHourlyForecastContainer>
  );
};
