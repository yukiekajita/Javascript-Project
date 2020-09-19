// from data.js
var tableData = data;
console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Step 1: Loop Through `data` and console.log each ufo data object
data.forEach(function(ufoData) {
  console.log(ufoData);
  // Step 2:  Use d3 to append one table row `tr` for each ufo data object
  var row = tbody.append("tr");
  // Step 3:  Use `Object.entries` to console.log each ufo data value
  Object.entries(ufoData).forEach(function([key, value]) {
    console.log(key, value);
    // Step 4: Append a cell to the row for each value
    // in the ufo data object
    var cell = row.append("td");
    // Step 5: Use d3 to update each cell's text with
    cell.text(value);
  });
}); 

// Select the button and Filter the selected date data
var button = d3.select("#filter-btn");
// Create event handlers 
button.on("click", function(){

    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Clearing the previous table data
    tbody.html("");

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);
  
    // Filter data with datatime equal to input value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);

  // Display filtered data to website
  filteredData.forEach(function(selectedData){
    console.log(selectedData);
    // Use d3 to append one table row `tr` for each ufo data object
    var row = tbody.append("tr");
    // Use `Object.entries` to console.log each ufo data value
    Object.entries(selectedData).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the ufo data object
      var cell = row.append("td");
      // Use d3 to update each cell's text with
      cell.text(value);
    });
  }); 
});
