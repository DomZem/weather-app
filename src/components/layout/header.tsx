import { WeatherConfigDropdown } from '../features/weather/weather-config-dropdown';
import { Logo } from '../icons';

export const Header = () => {
  return (
    <header className="flex items-center justify-between pt-4 md:pt-6 xl:pt-12">
      <Logo className="h-7 w-36 md:h-10 md:w-48" />
      <WeatherConfigDropdown />
    </header>
  );
};
