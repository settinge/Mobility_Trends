// Read in data
d3.csv("/Output/cleaneddata.csv").then(function(data) {
    for (let i = 0; i < data.length; i++) {

        if (data[i].region != data[i+1].region ){
            $('#selDataset').append(`<option value=${data[i].region}>${data[i].region} </option>`);
        }
 
    }
// Need onclick event
// let user_pick = d3.select("#selDataset");

// let user_pick_val = d3.event.target.value;

    // $() for user unput
    console.log(data);
    let Belgium = data.filter(city => city.region == "Belgium" && city.transportation_type == "driving")
   console.log(Belgium)
    let belgium_date = Belgium.map(city_date => city_date.date);
    console.log(belgium_date)
    let belgium_score = Belgium.map(city_date => city_date.score);
    console.log(belgium_score)

    
    var trace1 = {
        x: belgium_date,
        y: belgium_score,
        type: "line"
      }

      var layout = {
        title: "Belgium",
        margin: {
          l: 100,
          r: 100,
          t: 100,
          b: 100
        }
      }

       // // Render the plot to the div tag with id "plot"
     Plotly.newPlot("plot", [trace1], layout);

   // let dateDriving = Belgium.map(driving => driving.transportation.)
   // console.log(dateDriving)

});



// var Belgium = data.region == "Belgium"
// console.log(Belgium)
 
//  // // Render the plot to the div tag with id "plot"
//   Plotly.newPlot("plot", [trace1], layout);