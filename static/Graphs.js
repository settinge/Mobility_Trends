// Read in data
d3.json('/fetch').then(function(data) {

  // Graph ONE //

  var x = document.getElementById("selDataset");
  var y = document.getElementById("selDataset2");
  for (let i = 0; i < data.length-1; i++) {
    // Eliminate duplicates
    if (data[i].region != data[i+1].region) {
      var option = document.createElement("option");
      option.text = data[i].region;
      x.add(option);
    }
  }

  /*
  for (let i = 0; i < data.length-1; i++) {
    // Eliminate duplicates
    if (data[i].transportation_type != data[i+1].transportation_type) {
      var option2 = document.createElement("option");
      option2.text = data[i].transportation_type;
      y.add(option2);
    }
  }*/

  var modes = {};
  var transportation_types = data.map( e => e.transportation_type );
  transportation_types.sort();

  transportation_types.forEach( e => {
    if (!(e in modes)) modes[e] = 0;
  })

  Object.keys(modes).forEach(mode => {
    var option2 = document.createElement("option");
    option2.text = mode;
    y.add(option2);
  });

  var inputField = d3.select("#selDataset2");
  inputField.on("change", function () {
    var user_pick_value = d3.event.target.value;
    var select_id = document.getElementById("selDataset");
    let city__pick = select_id.options[select_id.selectedIndex].value;

    // Make sure to change variables below

    console.log(data);
    let country = data.filter(city => city.region == city__pick && city.transportation_type == user_pick_value);
   console.log(country);
    let country_date = country.map(city_date => city_date.date);
    console.log(country_date);
    let country_score = country.map(city_date => city_date.score);
    console.log(country_score);

    
    var trace1 = {
        x: country_date,
        y: country_score,
        type: "line"
      }

      var layout = {
        title: "Country Mobility",
        margin: {
          l: 100,
          r: 100,
          t: 100,
          b: 100
        }
      }
      // // Render the plot to the div tag with id "plot"
  Plotly.newPlot("plot", [trace1], layout);
  } ) }
)