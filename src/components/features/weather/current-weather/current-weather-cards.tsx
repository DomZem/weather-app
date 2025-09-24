import { CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import dayjs from 'dayjs';
import Image from 'next/image';
import { ComponentProps } from 'react';

const CurrentWeatherContainer = ({
  className,
  children,
  ...props
}: ComponentProps<'div'>) => {
  return (
    <div className={cn('space-y-5 lg:space-y-8', className)} {...props}>
      {children}
    </div>
  );
};

const CurrentWeatherHero = ({
  className,
  children,
  ...props
}: ComponentProps<'div'>) => {
  return (
    <div
      className={cn(
        'relative h-72 overflow-hidden rounded-[1.25rem]',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const CurrentWeatherHeroBackground = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <Image
      className={cn('absolute inset-0 h-full w-full object-cover', className)}
      src="./hero-bg.svg"
      fill
      alt={''}
    />
  );
};

const CurrentWeatherHeroContent = ({
  className,
  children,
  ...props
}: ComponentProps<'div'>) => {
  return (
    <div
      className={cn(
        'relative z-10 flex h-full flex-col items-center gap-4 px-6 py-10 md:flex-row md:justify-between md:px-4 md:py-4',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const CurrentWeatherLocation = ({ location }: { location: string }) => {
  const today = dayjs().format('dddd, MMM D, YYYY');

  return (
    <div className="space-y-4 text-center md:text-left">
      <p className="text-preset-4">{location}</p>
      <p className="text-preset-6 opacity-80">{today}</p>
    </div>
  );
};

const CurrentWeatherCards = ({
  className,
  children,
  ...props
}: ComponentProps<'div'>) => {
  return (
    <div
      className={cn(
        'grid grid-cols-2 grid-rows-2 gap-4 md:grid-cols-4 md:grid-rows-none md:gap-5 lg:gap-6',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const CurrentWeatherCardTitle = ({
  className,
  children,
  ...props
}: ComponentProps<typeof CardTitle>) => {
  return (
    <CardTitle
      className={cn('text-preset-6 text-muted-foreground', className)}
      {...props}
    >
      {children}
    </CardTitle>
  );
};

const CurrentWeatherCardContent = ({
  className,
  children,
  ...props
}: ComponentProps<'div'>) => {
  return (
    <div className={cn('text-preset-3', className)} {...props}>
      {children}
    </div>
  );
};

export {
  CurrentWeatherCardContent,
  CurrentWeatherCards,
  CurrentWeatherCardTitle,
  CurrentWeatherContainer,
  CurrentWeatherHero,
  CurrentWeatherHeroBackground,
  CurrentWeatherHeroContent,
  CurrentWeatherLocation,
};
