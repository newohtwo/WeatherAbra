//http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=c2E6KBkzu9C7naQIe5bWrFbSwi9S2vDp&q=Tel
export const searchData = [
  {
    Version: 1,
    Key: "215854",
    Type: "City",
    Rank: 31,
    LocalizedName: "Tel Aviv",
    Country: {
      ID: "IL",
      LocalizedName: "Israel",
    },
    AdministrativeArea: {
      ID: "TA",
      LocalizedName: "Tel Aviv",
    },
  },
  {
    Version: 1,
    Key: "3431644",
    Type: "City",
    Rank: 45,
    LocalizedName: "Telanaipura",
    Country: {
      ID: "ID",
      LocalizedName: "Indonesia",
    },
    AdministrativeArea: {
      ID: "JA",
      LocalizedName: "Jambi",
    },
  },
  {
    Version: 1,
    Key: "300558",
    Type: "City",
    Rank: 45,
    LocalizedName: "Telok Blangah New Town",
    Country: {
      ID: "SG",
      LocalizedName: "Singapore",
    },
    AdministrativeArea: {
      ID: "05",
      LocalizedName: "South West",
    },
  },
  {
    Version: 1,
    Key: "325876",
    Type: "City",
    Rank: 51,
    LocalizedName: "Telford",
    Country: {
      ID: "GB",
      LocalizedName: "United Kingdom",
    },
    AdministrativeArea: {
      ID: "TFW",
      LocalizedName: "Telford and Wrekin",
    },
  },
  {
    Version: 1,
    Key: "169072",
    Type: "City",
    Rank: 51,
    LocalizedName: "Telavi",
    Country: {
      ID: "GE",
      LocalizedName: "Georgia",
    },
    AdministrativeArea: {
      ID: "KA",
      LocalizedName: "Kakheti",
    },
  },
  {
    Version: 1,
    Key: "230611",
    Type: "City",
    Rank: 51,
    LocalizedName: "Telsiai",
    Country: {
      ID: "LT",
      LocalizedName: "Lithuania",
    },
    AdministrativeArea: {
      ID: "TE",
      LocalizedName: "Telšiai",
    },
  },
  {
    Version: 1,
    Key: "2723742",
    Type: "City",
    Rank: 55,
    LocalizedName: "Telégrafo",
    Country: {
      ID: "BR",
      LocalizedName: "Brazil",
    },
    AdministrativeArea: {
      ID: "PA",
      LocalizedName: "Pará",
    },
  },
  {
    Version: 1,
    Key: "186933",
    Type: "City",
    Rank: 55,
    LocalizedName: "Tela",
    Country: {
      ID: "HN",
      LocalizedName: "Honduras",
    },
    AdministrativeArea: {
      ID: "AT",
      LocalizedName: "Atlántida",
    },
  },
  {
    Version: 1,
    Key: "3453754",
    Type: "City",
    Rank: 55,
    LocalizedName: "Telaga Asih",
    Country: {
      ID: "ID",
      LocalizedName: "Indonesia",
    },
    AdministrativeArea: {
      ID: "JB",
      LocalizedName: "West Java",
    },
  },
  {
    Version: 1,
    Key: "3453755",
    Type: "City",
    Rank: 55,
    LocalizedName: "Telagamurni",
    Country: {
      ID: "ID",
      LocalizedName: "Indonesia",
    },
    AdministrativeArea: {
      ID: "JB",
      LocalizedName: "West Java",
    },
  },
];
//http://dataservice.accuweather.com/currentconditions/v1/215854?details=true&apikey=guAZ6YEi30wJfGoJ8IBmXCC7WreCZ6LV
export const getWeatherData = [
  {
    LocalObservationDateTime: "2023-12-16T10:22:00+02:00",
    EpochTime: 1702714920,
    WeatherText: "Cloudy",
    WeatherIcon: 7,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: true,
    Temperature: {
      Metric: {
        Value: 18.1,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 65.0,
        Unit: "F",
        UnitType: 18,
      },
    },
    RealFeelTemperature: {
      Metric: {
        Value: 19.5,
        Unit: "C",
        UnitType: 17,
        Phrase: "Pleasant",
      },
      Imperial: {
        Value: 67.0,
        Unit: "F",
        UnitType: 18,
        Phrase: "Pleasant",
      },
    },
    RealFeelTemperatureShade: {
      Metric: {
        Value: 18.2,
        Unit: "C",
        UnitType: 17,
        Phrase: "Pleasant",
      },
      Imperial: {
        Value: 65.0,
        Unit: "F",
        UnitType: 18,
        Phrase: "Pleasant",
      },
    },
    RelativeHumidity: 56,
    IndoorRelativeHumidity: 50,
    DewPoint: {
      Metric: {
        Value: 9.2,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 49.0,
        Unit: "F",
        UnitType: 18,
      },
    },
    Wind: {
      Direction: {
        Degrees: 158,
        Localized: "SSE",
        English: "SSE",
      },
      Speed: {
        Metric: {
          Value: 5.6,
          Unit: "km/h",
          UnitType: 7,
        },
        Imperial: {
          Value: 3.4,
          Unit: "mi/h",
          UnitType: 9,
        },
      },
    },
    WindGust: {
      Speed: {
        Metric: {
          Value: 8.1,
          Unit: "km/h",
          UnitType: 7,
        },
        Imperial: {
          Value: 5.0,
          Unit: "mi/h",
          UnitType: 9,
        },
      },
    },
    UVIndex: 1,
    UVIndexText: "Low",
    Visibility: {
      Metric: {
        Value: 16.1,
        Unit: "km",
        UnitType: 6,
      },
      Imperial: {
        Value: 10.0,
        Unit: "mi",
        UnitType: 2,
      },
    },
    ObstructionsToVisibility: "",
    CloudCover: 98,
    Ceiling: {
      Metric: {
        Value: 7925.0,
        Unit: "m",
        UnitType: 5,
      },
      Imperial: {
        Value: 26000.0,
        Unit: "ft",
        UnitType: 0,
      },
    },
    Pressure: {
      Metric: {
        Value: 1020.7,
        Unit: "mb",
        UnitType: 14,
      },
      Imperial: {
        Value: 30.14,
        Unit: "inHg",
        UnitType: 12,
      },
    },
    PressureTendency: {
      LocalizedText: "Rising",
      Code: "R",
    },
    Past24HourTemperatureDeparture: {
      Metric: {
        Value: -5.2,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: -9.0,
        Unit: "F",
        UnitType: 18,
      },
    },
    ApparentTemperature: {
      Metric: {
        Value: 19.4,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 67.0,
        Unit: "F",
        UnitType: 18,
      },
    },
    WindChillTemperature: {
      Metric: {
        Value: 18.3,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 65.0,
        Unit: "F",
        UnitType: 18,
      },
    },
    WetBulbTemperature: {
      Metric: {
        Value: 13.0,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 55.0,
        Unit: "F",
        UnitType: 18,
      },
    },
    WetBulbGlobeTemperature: {
      Metric: {
        Value: 15.3,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 60.0,
        Unit: "F",
        UnitType: 18,
      },
    },
    Precip1hr: {
      Metric: {
        Value: 0.0,
        Unit: "mm",
        UnitType: 3,
      },
      Imperial: {
        Value: 0.0,
        Unit: "in",
        UnitType: 1,
      },
    },
    PrecipitationSummary: {
      Precipitation: {
        Metric: {
          Value: 0.0,
          Unit: "mm",
          UnitType: 3,
        },
        Imperial: {
          Value: 0.0,
          Unit: "in",
          UnitType: 1,
        },
      },
      PastHour: {
        Metric: {
          Value: 0.0,
          Unit: "mm",
          UnitType: 3,
        },
        Imperial: {
          Value: 0.0,
          Unit: "in",
          UnitType: 1,
        },
      },
      Past3Hours: {
        Metric: {
          Value: 0.0,
          Unit: "mm",
          UnitType: 3,
        },
        Imperial: {
          Value: 0.0,
          Unit: "in",
          UnitType: 1,
        },
      },
      Past6Hours: {
        Metric: {
          Value: 0.0,
          Unit: "mm",
          UnitType: 3,
        },
        Imperial: {
          Value: 0.0,
          Unit: "in",
          UnitType: 1,
        },
      },
      Past9Hours: {
        Metric: {
          Value: 0.0,
          Unit: "mm",
          UnitType: 3,
        },
        Imperial: {
          Value: 0.0,
          Unit: "in",
          UnitType: 1,
        },
      },
      Past12Hours: {
        Metric: {
          Value: 0.0,
          Unit: "mm",
          UnitType: 3,
        },
        Imperial: {
          Value: 0.0,
          Unit: "in",
          UnitType: 1,
        },
      },
      Past18Hours: {
        Metric: {
          Value: 0.0,
          Unit: "mm",
          UnitType: 3,
        },
        Imperial: {
          Value: 0.0,
          Unit: "in",
          UnitType: 1,
        },
      },
      Past24Hours: {
        Metric: {
          Value: 0.0,
          Unit: "mm",
          UnitType: 3,
        },
        Imperial: {
          Value: 0.0,
          Unit: "in",
          UnitType: 1,
        },
      },
    },
    TemperatureSummary: {
      Past6HourRange: {
        Minimum: {
          Metric: {
            Value: 14.7,
            Unit: "C",
            UnitType: 17,
          },
          Imperial: {
            Value: 58.0,
            Unit: "F",
            UnitType: 18,
          },
        },
        Maximum: {
          Metric: {
            Value: 18.1,
            Unit: "C",
            UnitType: 17,
          },
          Imperial: {
            Value: 65.0,
            Unit: "F",
            UnitType: 18,
          },
        },
      },
      Past12HourRange: {
        Minimum: {
          Metric: {
            Value: 14.7,
            Unit: "C",
            UnitType: 17,
          },
          Imperial: {
            Value: 58.0,
            Unit: "F",
            UnitType: 18,
          },
        },
        Maximum: {
          Metric: {
            Value: 18.1,
            Unit: "C",
            UnitType: 17,
          },
          Imperial: {
            Value: 65.0,
            Unit: "F",
            UnitType: 18,
          },
        },
      },
      Past24HourRange: {
        Minimum: {
          Metric: {
            Value: 14.7,
            Unit: "C",
            UnitType: 17,
          },
          Imperial: {
            Value: 58.0,
            Unit: "F",
            UnitType: 18,
          },
        },
        Maximum: {
          Metric: {
            Value: 26.3,
            Unit: "C",
            UnitType: 17,
          },
          Imperial: {
            Value: 79.0,
            Unit: "F",
            UnitType: 18,
          },
        },
      },
    },
    MobileLink:
      "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
    Link: "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
  },
];

//http://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=guAZ6YEi30wJfGoJ8IBmXCC7WreCZ6LV
export const getWeatherForecastFiveDays = {
  Headline: {
    EffectiveDate: "2023-12-17T19:00:00+02:00",
    EffectiveEpochDate: 1702832400,
    Severity: 7,
    Text: "Mild Sunday night",
    Category: "heat",
    EndDate: "2023-12-18T07:00:00+02:00",
    EndEpochDate: 1702875600,
    MobileLink:
      "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us",
    Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us",
  },
  DailyForecasts: [
    {
      Date: "2023-12-16T07:00:00+02:00",
      EpochDate: 1702702800,
      Temperature: {
        Minimum: {
          Value: 56.0,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 74.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 6,
        IconPhrase: "Mostly cloudy",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 36,
        IconPhrase: "Intermittent clouds",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
    },
    {
      Date: "2023-12-17T07:00:00+02:00",
      EpochDate: 1702789200,
      Temperature: {
        Minimum: {
          Value: 59.0,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 72.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 4,
        IconPhrase: "Intermittent clouds",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 36,
        IconPhrase: "Intermittent clouds",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
    },
    {
      Date: "2023-12-18T07:00:00+02:00",
      EpochDate: 1702875600,
      Temperature: {
        Minimum: {
          Value: 57.0,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 71.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 2,
        IconPhrase: "Mostly sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 36,
        IconPhrase: "Intermittent clouds",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
    },
    {
      Date: "2023-12-19T07:00:00+02:00",
      EpochDate: 1702962000,
      Temperature: {
        Minimum: {
          Value: 55.0,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 71.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 1,
        IconPhrase: "Sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 34,
        IconPhrase: "Mostly clear",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
    },
    {
      Date: "2023-12-20T07:00:00+02:00",
      EpochDate: 1703048400,
      Temperature: {
        Minimum: {
          Value: 57.0,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 70.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 6,
        IconPhrase: "Mostly cloudy",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 35,
        IconPhrase: "Partly cloudy",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
      Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
    },
  ],
};
