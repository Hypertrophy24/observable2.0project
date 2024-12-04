# Weather Dashboard with Enhanced Layout

This interactive dashboard arranges multiple charts in a responsive grid layout, providing a better visual experience.

This project is to showcase the abilities of observable 2.0 with some simple yet way more complicated then I'd like to admit to pull off data visuals.

The data being shown is the average temperature, rainfall, atmospheric pressure, and humidity, with some location data for no reason at all for the towns Boston, Los Angeles, Missoula, Seattle, and Tampa.

in this dashboard I wanted to show how each different aspect of weather can affect each other. I used some of the data i had gathered from the last assignment in this showcase.

```js
// MainScript.js

import { loadData } from "./DataLoader.js";
import { createBarChart, updateBarChartHighlight } from "./BarChart.js";
import { createScatterPlot, updateScatterPlotHighlight } from "./ScatterPlot.js";
import {
  createPressureBarChart,
  updatePressureBarChartHighlight,
} from "./PressureBarChart.js";
import {
  createTempHumidityScatterPlot,
  updateTempHumidityScatterPlotHighlight,
} from "./TempHumidityScatterPlot.js";
import {
  createCityLocationPlot,
  updateCityLocationPlotHighlight,
} from "./CityLocationPlot.js";

let data = loadData();
let highlightedCity = null;

// Create a container for the charts
const chartContainer =
  document.getElementById("chart-container") || document.createElement("div");
chartContainer.id = "chart-container";
document.body.appendChild(chartContainer);

// Update the highlighted city and update the charts
function updateHighlight(city) {
  highlightedCity = city; // Update the current highlighted city

  // Update all charts without re-rendering
  updateBarChartHighlight(highlightedCity);
  updateScatterPlotHighlight(highlightedCity);
  updatePressureBarChartHighlight(highlightedCity);
  updateTempHumidityScatterPlotHighlight(highlightedCity);
  updateCityLocationPlotHighlight(highlightedCity);
}

// Render all charts initially
function renderCharts() {
  // Clear the container before rendering
  chartContainer.innerHTML = "";

  // Create an array of chart data
  const chartData = [
    {
      element: createBarChart(data, highlightedCity, updateHighlight),
      title: "Temperature Bar Chart",
    },
    {
      element: createScatterPlot(data, highlightedCity, updateHighlight),
      title: "Rainfall vs. Humidity Scatter Plot",
    },
    {
      element: createPressureBarChart(data, highlightedCity, updateHighlight),
      title: "Pressure Bar Chart",
    },
    {
      element: createTempHumidityScatterPlot(data, highlightedCity, updateHighlight),
      title: "Temperature vs. Humidity Scatter Plot",
    },
    {
      element: createCityLocationPlot(data, highlightedCity, updateHighlight),
      title: "City Location Plot",
    },
  ];

  // Append all charts to the container with titles
  chartData.forEach(({ element, title }) => {
    const chartWrapper = document.createElement("div");
    chartWrapper.className = "chart-wrapper";

    const chartTitle = document.createElement("h3");
    chartTitle.className = "chart-title";
    chartTitle.textContent = title;

    chartWrapper.appendChild(chartTitle);
    chartWrapper.appendChild(element);
    chartContainer.appendChild(chartWrapper);
  });
}

// Initial render
renderCharts();
