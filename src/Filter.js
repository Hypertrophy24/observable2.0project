export function filterData(data, selectedCity) {
  return selectedCity === "All" ? data : data.filter(d => d.city === selectedCity);
}
