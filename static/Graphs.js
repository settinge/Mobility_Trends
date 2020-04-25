// Read in data
d3.csv("/Output/cleaneddata.csv").then(function(data) {
    console.log(data[0]);
});
 
 
 
//  // // Render the plot to the div tag with id "plot"
//   Plotly.newPlot("plot", [trace1], layout);