import * as Plot from "@observablehq/plot";
import * as d3 from "d3";

let barChart; // Variable to store the chart element

export function createBarChart(data, highlightedCity, onHover) {
  // Create the chart only once
  if (!barChart) {
    barChart = Plot.plot({
      marks: [
        Plot.barY(data, {
          x: "city",
          y: "temp",
          fill: "lightgray",
          opacity: 0.7,
          title: d => `${d.city}: ${d.temp}°F`,
        }),
      ],
      height: 300,
      width: 500,
      y: { label: "Temperature (°F)" },
      x: { label: "City" },
      style: { cursor: "pointer" },
    });

    // Bind data to rect elements
    const rects = d3.select(barChart)
      .selectAll("rect")
      .data(data);

    // Attach event listeners using D3.js
    rects.on("mouseenter", (event, d) => {
      onHover(d.city);
    })
    .on("mouseleave", () => {
      onHover(null);
    });
  }

  return barChart;
}

// Function to update the highlight
export function updateBarChartHighlight(highlightedCity) {
  d3.select(barChart)
    .selectAll("rect")
    // Data is already bound, so we can use 'd'
    .attr("fill", d => (d.city === highlightedCity ? "steelblue" : "lightgray"))
    .attr("opacity", d => (d.city === highlightedCity ? 1 : 0.7));
}
