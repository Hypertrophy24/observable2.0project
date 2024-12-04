// CityLocationPlot.js

import * as Plot from "@observablehq/plot";
import * as d3 from "d3";

let cityLocationPlot;

export function createCityLocationPlot(data, highlightedCity, onHover) {
  if (!cityLocationPlot) {
    cityLocationPlot = Plot.plot({
      marks: [
        Plot.dot(data, {
          x: "longitude",
          y: "latitude",
          fill: "lightgray",
          r: 8,
          opacity: 0.7,
          title: (d) => `${d.city}: (${d.latitude}, ${d.longitude})`,
        }),
      ],
      height: 300,
      width: 500,
      x: { label: "Longitude" },
      y: { label: "Latitude" },
      style: { cursor: "pointer" },
    });

    // Bind data to circle elements
    const circles = d3
      .select(cityLocationPlot)
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

  return cityLocationPlot;
}

export function updateCityLocationPlotHighlight(highlightedCity) {
  d3.select(cityLocationPlot)
    .selectAll("circle")
    .attr("fill", (d) =>
      d.city === highlightedCity ? "steelblue" : "lightgray"
    )
    .attr("opacity", (d) => (d.city === highlightedCity ? 1 : 0.7));
}
