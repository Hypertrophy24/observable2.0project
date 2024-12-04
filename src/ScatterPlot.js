// ScatterPlot.js

import * as Plot from "@observablehq/plot";
import * as d3 from "d3";

let scatterPlot; // Variable to store the chart element

export function createScatterPlot(data, highlightedCity, onHover) {
  // Create the chart only once
  if (!scatterPlot) {
    scatterPlot = Plot.plot({
      marks: [
        Plot.dot(data, {
          x: "rainfall",
          y: "humidity",
          fill: "lightgray",
          r: 6,
          opacity: 0.7,
          title: d =>
            `${d.city}: ${d.humidity}% Humidity, ${d.rainfall} inches Rainfall`,
        }),
      ],
      height: 300,
      width: 500,
      x: { label: "Rainfall (inches)" },
      y: { label: "Humidity (%)" },
      style: { cursor: "pointer" },
    });

    // Bind data to circle elements
    const circles = d3.select(scatterPlot)
      .selectAll("circle")
      .data(data);

    // Attach event listeners using D3.js
    circles
      .on("mouseenter", (event, d) => {
        onHover(d.city);
      })
      .on("mouseleave", () => {
        onHover(null);
      });
  }

  return scatterPlot;
}

// Function to update the highlight
export function updateScatterPlotHighlight(highlightedCity) {
  d3.select(scatterPlot)
    .selectAll("circle")
    // Data is already bound, so we can use 'd'
    .attr("fill", d => (d.city === highlightedCity ? "steelblue" : "lightgray"))
    .attr("opacity", d => (d.city === highlightedCity ? 1 : 0.7));
}
