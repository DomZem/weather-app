import { WeatherConfigDropdown } from '../features/weather/weather-config-dropdown';
import { Logo } from './logo';

export const Header = () => {
  return (
    <header className="flex items-center justify-between pt-4 md:pt-6 xl:pt-12">
      <Logo />
      <WeatherConfigDropdown />
    </header>
  );
};
