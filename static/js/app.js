// Define table data variable from data.js
var tableData = data;

// Define the table
var tbody = d3.select("tbody");

// Define filter button
var filter_button = d3.select("#filter-btn");

 // Update each cell with UFO sighting information (e.g. Date, City, State, Country, Shape, Duration, Comments)
 data.forEach(function(ufoSightings) {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(function([key, value]) {

      // Append cell to the row for each value 
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Filter button function based on date  
filter_button.on("click", function() {

  // Select the date input element 
  var inputDate = d3.select("#datetime");

  // Get the value of the input data
  var inputDateValue = inputDate.property("value");
  var filteredData = data;

  //Filter the table data based on date input
  if(inputDateValue){
    filteredData = filteredData.filter(sighting => sighting.datetime === inputDateValue);    
  }

  console.log(filteredData);

  // select table body and remove all rows
  d3.select("tbody").selectAll("tr").remove();
  
  // Update each cell's text with the filtered data
  filteredData.forEach(function(ufoSighting) {
  var row = tbody.append("tr");
  Object.entries(ufoSighting).forEach(function([key, value]) {
    console.log(key, value);

    // Append cells to the row for each value
    var cell = row.append("td");
    cell.text(value);
  });
});

});
  