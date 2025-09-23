import { OpenMeteoGeocodingLocation } from '@/types/open-meteo-geocoding';

export class OpenMeteoWeatherGeocodingService {
  private readonly BASE_URL = 'https://geocoding-api.open-meteo.com/v1/search';

  public async getLocationsByCityName(cityName: string) {
    const res = await fetch(
      this.BASE_URL +
        `?name=${encodeURIComponent(cityName)}&count=10&language=en&format=json`,
    );

    if (!res.ok) {
      throw new Error('Failed to fetch location data');
    }

    const data = (await res.json()) as {
      generationtime_ms: number;
      results: OpenMeteoGeocodingLocation[] | null;
    };

    return data;
  }
}
