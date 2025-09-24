import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import Autoplay from 'embla-carousel-autoplay';
import { ComponentProps } from 'react';

const WeatherDailyForecastCarousel = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="space-y-5 overflow-hidden"
    >
      {children}
    </Carousel>
  );
};

const WeatherDailyForecastCarouselHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <p className="text-preset-5">Daily forecast</p>

      <div className="inline-flex items-center gap-2">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </div>
  );
};

const WeatherDailyForecastCarouselContent = ({
  className,
  children,
  ...props
}: ComponentProps<typeof CarouselContent>) => {
  return (
    <CarouselContent className={cn('-ml-4', className)} {...props}>
      {children}
    </CarouselContent>
  );
};

const WeatherDailyForecastCarouselCard = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <CarouselItem className="basis-1/3 pl-4 md:basis-2/12">
      <Card className="flex flex-col items-center gap-4 px-2.5 py-4">
        {children}
      </Card>
    </CarouselItem>
  );
};

const WeatherDailyForecastCarouselCardTitle = ({
  className,
  children,
  ...props
}: ComponentProps<'p'>) => {
  return (
    <p className={cn('text-preset-6', className)} {...props}>
      {children}
    </p>
  );
};

const WeatherDailyForecastCarouselCardContent = ({
  className,
  children,
  ...props
}: ComponentProps<'div'>) => {
  return (
    <div
      className={cn(
        'text-preset-7 flex w-full items-center justify-between',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export {
  WeatherDailyForecastCarousel,
  WeatherDailyForecastCarouselCard,
  WeatherDailyForecastCarouselCardContent,
  WeatherDailyForecastCarouselCardTitle,
  WeatherDailyForecastCarouselContent,
  WeatherDailyForecastCarouselHeader,
};
