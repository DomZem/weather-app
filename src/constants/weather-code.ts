export const WEATHER_CODE_DICTIONARY: Record<
  number,
  {
    description: string;
    icon: string;
  }
> = {
  0: {
    description: 'clear',
    icon: '/assets/icons/weathers/sunny.svg',
  },
  1: {
    description: 'mostly clear',
    icon: '/assets/icons/weathers/sunny.svg',
  },
  2: {
    description: 'partly cloudy',
    icon: '/assets/icons/weathers/partly-cloudy.svg',
  },
  3: {
    description: 'overcast',
    icon: '/assets/icons/weathers/overcast.svg',
  },
  45: {
    description: 'fog',
    icon: '/assets/icons/weathers/fog.svg',
  },
  48: {
    description: 'depositing rime fog',
    icon: '/assets/icons/weathers/fog.svg',
  },
  51: {
    description: 'light drizzle',
    icon: '/assets/icons/weathers/drizzle.svg',
  },
  53: {
    description: 'moderate drizzle',
    icon: '/assets/icons/weathers/drizzle.svg',
  },
  55: {
    description: 'dense drizzle',
    icon: '/assets/icons/weathers/drizzle.svg',
  },
  61: {
    description: 'light rain',
    icon: '/assets/icons/weathers/rain.svg',
  },
  63: {
    description: 'moderate rain',
    icon: '/assets/icons/weathers/rain.svg',
  },
  65: {
    description: 'heavy rain',
    icon: '/assets/icons/weathers/rain.svg',
  },
  77: {
    description: 'snow grains',
    icon: '/assets/icons/weathers/snow.svg',
  },
  85: {
    description: 'light snow showers',
    icon: '/assets/icons/weathers/snow.svg',
  },
  86: {
    description: 'snow showers',
    icon: '/assets/icons/weathers/snow.svg',
  },
  71: {
    description: 'light snow',
    icon: '/assets/icons/weathers/snow.svg',
  },
  73: {
    description: 'moderate snow',
    icon: '/assets/icons/weathers/snow.svg',
  },
  75: {
    description: 'heavy snow',
    icon: '/assets/icons/weathers/snow.svg',
  },
  95: {
    description: 'thunderstorm',
    icon: '/assets/icons/weathers/thunderstorms.svg',
  },
  96: {
    description: 'thunderstorm with slight hail',
    icon: '/assets/icons/weathers/thunderstorms.svg',
  },
  99: {
    description: 'thunderstorm with heavy hail',
    icon: '/assets/icons/weathers/thunderstorms.svg',
  },
};
