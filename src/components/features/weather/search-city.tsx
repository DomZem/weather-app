'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import ReactCountryFlag from 'react-country-flag';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { OpenMeteoWeatherGeocodingService } from '@/services/open-meteo-geocoding-service';
import { weatherSettingsStore } from '@/stores/weather-settings-store';
import { OpenMeteoGeocodingLocation } from '@/types/open-meteo-geocoding';
import { useMutation } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import { Search } from 'lucide-react';
import { useState } from 'react';

const formSchema = z.object({
  cityName: z.string(),
});

export const SearchCity = () => {
  const [open, setOpen] = useState(false);
  const [locations, setLocations] = useState<OpenMeteoGeocodingLocation[]>([]);

  const setWeatherSettings = useSetAtom(weatherSettingsStore);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cityName: '',
    },
  });

  const getLocation = useMutation({
    mutationFn: async (cityName: string) => {
      const service = new OpenMeteoWeatherGeocodingService();
      return await service.getLocationsByCityName(cityName);
    },
    onSuccess: (res) => {
      if (res.results) {
        setLocations(res.results);
        setOpen(true);
      }
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await getLocation.mutateAsync(values.cityName);
  };

  const selectLocation = (location: OpenMeteoGeocodingLocation) => {
    form.setValue('cityName', location.name);
    setOpen(false);
    setWeatherSettings((prev) => ({
      ...prev,
      latitude: location.latitude,
      longitude: location.longitude,
    }));
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-3 md:flex-row md:gap-4 lg:justify-center"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="cityName"
          render={({ field }) => (
            <FormItem className="relative md:flex-1 lg:max-w-[32.875rem]">
              <FormLabel className="sr-only">City name</FormLabel>
              <Popover defaultOpen open={open} onOpenChange={setOpen}>
                <PopoverTrigger onClick={(e) => e.preventDefault()}>
                  <FormControl>
                    <Input
                      startIcon={Search}
                      placeholder="Search for a place..."
                      {...field}
                    />
                  </FormControl>
                </PopoverTrigger>

                <PopoverContent
                  align="start"
                  className="w-[var(--radix-popover-trigger-width)]"
                  sideOffset={10}
                >
                  <ScrollArea className="h-52">
                    <ul className="space-y-1">
                      {locations.map((location) => (
                        <li
                          className={cn(
                            'hover:border-border hover:bg-muted flex cursor-pointer items-center gap-2 rounded-md border border-transparent px-2 py-2.5 transition-colors duration-200',
                          )}
                          key={location.id}
                          onClick={() => selectLocation(location)}
                        >
                          <ReactCountryFlag
                            className="rounded-sm"
                            svg
                            countryCode={location.country_code}
                            style={{
                              width: '1.5em',
                              height: '1.5em',
                            }}
                          />
                          <span className="text-preset-7">{location.name}</span>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={getLocation.isPending}>
          Search
        </Button>
      </form>
    </Form>
  );
};
