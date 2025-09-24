import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
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

export const CurrentWeatherSkeleton = ({ location }: { location: string }) => {
  return (
    <CurrentWeatherContainer>
      <CurrentWeatherHero>
        <CurrentWeatherHeroBackground />

        <CurrentWeatherHeroContent>
          <CurrentWeatherLocation location={location} />

          <div className="flex items-center gap-5">
            <Skeleton className="bg-primary h-[7.5rem] w-72" />
          </div>
        </CurrentWeatherHeroContent>
      </CurrentWeatherHero>

      <CurrentWeatherCards>
        <Card>
          <CurrentWeatherCardTitle>Feels Like</CurrentWeatherCardTitle>
          <CurrentWeatherCardContent>
            <Skeleton className="h-8 w-20" />
          </CurrentWeatherCardContent>
        </Card>

        <Card>
          <CurrentWeatherCardTitle>Humidity</CurrentWeatherCardTitle>
          <CurrentWeatherCardContent>
            <Skeleton className="h-8 w-20" />
          </CurrentWeatherCardContent>
        </Card>

        <Card>
          <CurrentWeatherCardTitle>Wind</CurrentWeatherCardTitle>
          <CurrentWeatherCardContent>
            <Skeleton className="h-8 w-20" />
          </CurrentWeatherCardContent>
        </Card>

        <Card>
          <CurrentWeatherCardTitle>Precipitation</CurrentWeatherCardTitle>
          <CurrentWeatherCardContent>
            <Skeleton className="h-8 w-20" />
          </CurrentWeatherCardContent>
        </Card>
      </CurrentWeatherCards>
    </CurrentWeatherContainer>
  );
};
