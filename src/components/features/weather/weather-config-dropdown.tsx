'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { weatherSearchStore } from '@/stores/weather-search-store';
import { useAtom } from 'jotai';
import { ChevronDown, Settings } from 'lucide-react';
import { useState } from 'react';

export const WeatherConfigDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [weatherSearch, setWeatherSearch] = useAtom(weatherSearchStore);

  const handleSwitchMetrics = () => {
    if (weatherSearch.metrics === 'metric') {
      setWeatherSearch((prev) => ({
        ...prev,
        metrics: 'imperial',
        temperatureUnit: 'fahrenheit',
        windSpeedUnit: 'mph',
        precipitationUnit: 'inch',
      }));
      return;
    }

    setWeatherSearch((prev) => ({
      ...prev,
      metrics: 'metric',
      temperatureUnit: 'celsius',
      windSpeedUnit: 'kmh',
      precipitationUnit: 'mm',
    }));
  };

  return (
    <DropdownMenu onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button className="gap-2.5" variant="muted" size="sm">
          <Settings size={16} />
          Units
          <ChevronDown
            className={cn(
              'transition-transform',
              isOpen ? 'rotate-180' : 'rotate-0',
            )}
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="end" sideOffset={10}>
        <DropdownMenuItem
          onSelect={(e) => e.preventDefault()}
          onClick={handleSwitchMetrics}
        >
          Switch to {weatherSearch.metrics === 'metric' ? 'Imperial' : 'Metric'}
        </DropdownMenuItem>

        <DropdownMenuLabel className="mt-1">Temperature</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuCheckboxItem
            onSelect={(e) => e.preventDefault()}
            checked={weatherSearch.temperatureUnit === 'celsius'}
            onCheckedChange={() =>
              setWeatherSearch((prev) => ({
                ...prev,
                temperatureUnit: 'celsius',
              }))
            }
          >
            Celsius (°C)
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            onSelect={(e) => e.preventDefault()}
            checked={weatherSearch.temperatureUnit === 'fahrenheit'}
            onCheckedChange={() =>
              setWeatherSearch((prev) => ({
                ...prev,
                temperatureUnit: 'fahrenheit',
              }))
            }
          >
            Fahrenheit (°F)
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuLabel>Wind Speed</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuCheckboxItem
            onSelect={(e) => e.preventDefault()}
            checked={weatherSearch.windSpeedUnit === 'kmh'}
            onCheckedChange={() =>
              setWeatherSearch((prev) => ({
                ...prev,
                windSpeedUnit: 'kmh',
              }))
            }
          >
            km/h
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            onSelect={(e) => e.preventDefault()}
            checked={weatherSearch.windSpeedUnit === 'mph'}
            onCheckedChange={() =>
              setWeatherSearch((prev) => ({
                ...prev,
                windSpeedUnit: 'mph',
              }))
            }
          >
            mph
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuLabel>Precipitation</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuCheckboxItem
            onSelect={(e) => e.preventDefault()}
            checked={weatherSearch.precipitationUnit === 'mm'}
            onCheckedChange={() =>
              setWeatherSearch((prev) => ({
                ...prev,
                precipitationUnit: 'mm',
              }))
            }
          >
            Millimeters (mm)
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            onSelect={(e) => e.preventDefault()}
            checked={weatherSearch.precipitationUnit === 'inch'}
            onCheckedChange={() =>
              setWeatherSearch((prev) => ({
                ...prev,
                precipitationUnit: 'inch',
              }))
            }
          >
            Inches (in)
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
