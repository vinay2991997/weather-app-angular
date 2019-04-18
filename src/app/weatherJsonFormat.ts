export interface WeatherJsonFormat {
    weather: Array<{
        main: string,
        icon: string
    }>;
    name: string;
}
