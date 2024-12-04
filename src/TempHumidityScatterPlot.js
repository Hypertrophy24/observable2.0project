// TempHumidityScatterPlot.js

import * as Plot from "@observablehq/plot";
import * as d3 from "d3";

let tempHumidityScatterPlot;

export function createTempHumidityScatterPlot(data, highlightedCity, onHover) {
  if (!tempHumidityScatterPlot) {
    tempHumidityScatterPlot = Plot.plot({
      marks: [
        Plot.dot(data, {
          x: "temp",
          y: "humidity",
          fill: "lightgray",
          r: 6,
          opacity: 0.7,
          title: (d) => `${d.city}: Temp ${d.temp}°F, Humidity ${d.humidity}%`,
        }),
      ],
      height: 300,
      width: 500,
      x: { label: "Average Temperature (°F)" },
      y: { label: "Average Humidity (%)" },
      style: { cursor: "pointer" },
    });

    // Bind data to circle elements
    const circles = d3
      .select(tempHumidityScatterPlot)
      .selectAll("circle")
      .data(data);

    // Attach event listeners
    circles
      .on("mouseenter", (event, d) => {
        onHover(d.city);
      })
      .on("mouseleave", () => {
        onHover(null);
      });
  }

  return tempHumidityScatterPlot;
}

export function updateTempHumidityScatterPlotHighlight(highlightedCity) {
  d3.select(tempHumidityScatterPlot)
    .selectAll("circle")
    .attr("fill", (d) =>
      d.city === highlightedCity ? "steelblue" : "lightgray"
    )
    .attr("opacity", (d) => (d.city === highlightedCity ? 1 : 0.7));
}
