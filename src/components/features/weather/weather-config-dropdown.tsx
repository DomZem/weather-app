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
import { weatherSettingsStore } from '@/stores/weather-settings-store';
import { useAtom } from 'jotai';
import { ChevronDown, Settings } from 'lucide-react';
import { useState } from 'react';

export const WeatherConfigDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [settings, setSettings] = useAtom(weatherSettingsStore);

  const handleSwitchMetrics = () => {
    if (settings.metrics === 'metric') {
      setSettings((prev) => ({
        ...prev,
        metrics: 'imperial',
        temperatureUnit: 'fahrenheit',
        windSpeedUnit: 'mph',
        precipitationUnit: 'inch',
      }));
      return;
    }

    setSettings((prev) => ({
      ...prev,
      metrics: 'metric',
      temperatureUnit: 'celsius',
      windSpeedUnit: 'kmh',
      precipitationUnit: 'mm',
    }));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="gap-2.5" variant="muted" size="sm">
          <Settings size={16} />
          Untis
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="end" sideOffset={10}>
        <DropdownMenuItem
          onSelect={(e) => e.preventDefault()}
          onClick={handleSwitchMetrics}
        >
          Switch to {settings.metrics === 'metric' ? 'Imperial' : 'Metric'}
        </DropdownMenuItem>

        <DropdownMenuLabel className="mt-1">Temperature</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuCheckboxItem
            onSelect={(e) => e.preventDefault()}
            checked={settings.temperatureUnit === 'celsius'}
            onCheckedChange={() =>
              setSettings((prev) => ({
                ...prev,
                temperatureUnit: 'celsius',
              }))
            }
          >
            Celsius (°C)
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            onSelect={(e) => e.preventDefault()}
            checked={settings.temperatureUnit === 'fahrenheit'}
            onCheckedChange={() =>
              setSettings((prev) => ({
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
            checked={settings.windSpeedUnit === 'kmh'}
            onCheckedChange={() =>
              setSettings((prev) => ({
                ...prev,
                windSpeedUnit: 'kmh',
              }))
            }
          >
            km/h
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            onSelect={(e) => e.preventDefault()}
            checked={settings.windSpeedUnit === 'mph'}
            onCheckedChange={() =>
              setSettings((prev) => ({
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
            checked={settings.precipitationUnit === 'mm'}
            onCheckedChange={() =>
              setSettings((prev) => ({
                ...prev,
                precipitationUnit: 'mm',
              }))
            }
          >
            Millimeters (mm)
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            onSelect={(e) => e.preventDefault()}
            checked={settings.precipitationUnit === 'inch'}
            onCheckedChange={() =>
              setSettings((prev) => ({
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
