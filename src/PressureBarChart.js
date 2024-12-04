// PressureBarChart.js

import * as Plot from "@observablehq/plot";
import * as d3 from "d3";

let pressureBarChart;

export function createPressureBarChart(data, highlightedCity, onHover) {
  if (!pressureBarChart) {
    pressureBarChart = Plot.plot({
      marks: [
        Plot.barY(data, {
          x: "city",
          y: "pressure",
          fill: "lightgray",
          opacity: 0.7,
          title: (d) => `${d.city}: ${d.pressure} hPa`,
        }),
      ],
      height: 300,
      width: 500,
      y: { label: "Average Atmospheric Pressure (hPa)" },
      x: { label: "City" },
      style: { cursor: "pointer" },
    });

    // Bind data to rect elements
    const rects = d3
      .select(pressureBarChart)
      .selectAll("rect")
      .data(data);

    // Attach event listeners
    rects
      .on("mouseenter", (event, d) => {
        onHover(d.city);
      })
      .on("mouseleave", () => {
        onHover(null);
      });
  }

  return pressureBarChart;
}

export function updatePressureBarChartHighlight(highlightedCity) {
  d3.select(pressureBarChart)
    .selectAll("rect")
    .attr("fill", (d) =>
      d.city === highlightedCity ? "steelblue" : "lightgray"
    )
    .attr("opacity", (d) => (d.city === highlightedCity ? 1 : 0.7));
}
