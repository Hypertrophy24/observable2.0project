
export function createDropdown(data, selectedCity, onSelect) {
  const dropdown = document.createElement("select");

  // Create default option
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Select a city";
  dropdown.appendChild(defaultOption);

  // Populate dropdown with cities
  data.forEach(d => {
    const option = document.createElement("option");
    option.value = d.city;
    option.textContent = d.city;
    if (d.city === selectedCity) {
      option.selected = true;
    }
    dropdown.appendChild(option);
  });

  // Event listener for selection change
  dropdown.addEventListener("change", () => {
    onSelect(dropdown.value || null);
  });

  return dropdown;
}
