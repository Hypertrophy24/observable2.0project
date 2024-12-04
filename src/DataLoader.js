export function loadData() {
  const rawData = [
    {
      Year: 2018,
      City: "Tampa",
      Latitude: 27.9506,
      Longitude: -82.4572,
      "Average Temperature (°F)": 50.575978,
      "Average Rainfall (inches)": 16.673891,
      "Average Atmospheric Pressure (hPa)": 1015.059165,
      "Average Humidity (%)": 62.965314
    },
    {
      Year: 2018,
      City: "Seattle",
      Latitude: 47.6062,
      Longitude: -122.3321,
      "Average Temperature (°F)": 53.074043,
      "Average Rainfall (inches)": 34.26963,
      "Average Atmospheric Pressure (hPa)": 1013.389949,
      "Average Humidity (%)": 64.83298
    },
    {
      Year: 2018,
      City: "Los Angeles",
      Latitude: 34.0522,
      Longitude: -118.2437,
      "Average Temperature (°F)": 55.753611,
      "Average Rainfall (inches)": 30.317857,
      "Average Atmospheric Pressure (hPa)": 1015.158847,
      "Average Humidity (%)": 80.184627
    },
    {
      Year: 2018,
      City: "Missoula",
      Latitude: 46.8721,
      Longitude: -113.994,
      "Average Temperature (°F)": 68.835768,
      "Average Rainfall (inches)": 50.02741,
      "Average Atmospheric Pressure (hPa)": 1015.5367,
      "Average Humidity (%)": 66.530867
    },
    {
      Year: 2018,
      City: "Boston",
      Latitude: 42.3601,
      Longitude: -71.0589,
      "Average Temperature (°F)": 68.8252,
      "Average Rainfall (inches)": 17.450049,
      "Average Atmospheric Pressure (hPa)": 1015.140942,
      "Average Humidity (%)": 63.06186
    }
  ];

  // Process the data into a usable format
  return rawData.map(d => ({
    year: d.Year,
    city: d.City,
    latitude: +d.Latitude,
    longitude: +d.Longitude,
    temp: +d["Average Temperature (°F)"],
    rainfall: +d["Average Rainfall (inches)"],
    pressure: +d["Average Atmospheric Pressure (hPa)"],
    humidity: +d["Average Humidity (%)"]
  }));
}
