import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

const WeatherHourlyForecastCarousel = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      orientation="vertical"
      className="w-full"
    >
      {children}

      <CarouselPrevious className="-top-8" />
      <CarouselNext className="-bottom-6" />
    </Carousel>
  );
};

const WeatherHourlyForecastCarouselContent = ({
  className,
  children,
  ...props
}: ComponentProps<typeof CarouselContent>) => {
  return (
    <CarouselContent className={cn('-mt-1 h-[37rem]', className)} {...props}>
      {children}
    </CarouselContent>
  );
};

const WeatherHourlyForecastCarouselItem = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <CarouselItem className="basis-1/8 pt-1">{children}</CarouselItem>;
};

const WeatherHourlyForecastCard = ({
  className,
  children,
  ...props
}: ComponentProps<'div'>) => {
  return (
    <div
      className={cn(
        'bg-popover flex items-center justify-between rounded-md border px-3 py-2.5',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const WeatherHourlyForecastCardContent = ({
  className,
  children,
  ...props
}: ComponentProps<'div'>) => {
  return (
    <div className={cn('inline-flex items-center gap-2', className)} {...props}>
      {children}
    </div>
  );
};

const WeatherHourlyForecastContainer = ({
  className,
  children,
  ...props
}: ComponentProps<typeof Card>) => {
  return (
    <Card className={cn('p-4 md:p-6', className)} {...props}>
      {children}
    </Card>
  );
};

const WeatherHourlyForecastHeader = ({
  className,
  children,
  ...props
}: ComponentProps<'div'>) => {
  return (
    <div
      className={cn('flex items-center justify-between', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export {
  WeatherHourlyForecastCard,
  WeatherHourlyForecastCardContent,
  WeatherHourlyForecastCarousel,
  WeatherHourlyForecastCarouselContent,
  WeatherHourlyForecastCarouselItem,
  WeatherHourlyForecastContainer,
  WeatherHourlyForecastHeader,
};
