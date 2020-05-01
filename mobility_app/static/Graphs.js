// Read in data
d3.json('/fetch').then(function(data) {

  // Graph ONE //

  // this brings up the list of countries and transportation
  var x = document.getElementById("selDataset");
  var y = document.getElementById("selDataset2");
  
  var x2 = document.getElementById("selDataset3");
  var y2 = document.getElementById("selDataset4");
  var x3 = document.getElementById("selDataset5");
  var y3 = document.getElementById("selDataset6");

  for (let i = 0; i < data.length-1; i++) {
    // loop through country data
    if (data[i].region != data[i+1].region) {
      var option = document.createElement("option");
      option.text = data[i].region;
      x.add(option);
      x2.add(option);
      x3.add(option);
    }
  }

  /*
  for (let i = 0; i < data.length-1; i++) {
    // Eliminate duplicates
    if (data[i].transportation_type != data[i+1].transportation_type) {
      var option2 = document.createElement("option");
      option2.text = data[i].transportation_type;
      y.add(option2);con
    }
  }*/

  
  var modes = {};
  var transportation_types = data.map( e => e.transportation_type );
  transportation_types.sort();

  // prevents duplicates for transportation mode

  transportation_types.forEach( e => {
    if (!(e in modes)) modes[e] = 0;
  })

  // loop through transportation type
  Object.keys(modes).forEach(mode => {
    var option2 = document.createElement("option");
    option2.text = mode;
    y.add(option2);
    y2.add(option2);
    y3.add(option2);
  });

  // listing to user input for transportation
  var inputField = d3.select("#selDataset2");
  inputField.on("change", function () {
    var user_pick_value = d3.event.target.value;
    // user input for region
    var select_id = document.getElementById("selDataset");
    let city__pick = select_id.options[select_id.selectedIndex].value;

  
    // filtering functions

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

  // CODE FOR TRACE 2 AND 3

  } )
  var inputField2 = d3.select("#selDataset4");
  inputField2.on("change", function () {
    var user_pick_value = d3.event.target.value
    var select_id = document.getElementById("selDataset3");
    let city__pick = select_id.options[select_id.selectedIndex].value;

    console.log(data);
    let country = data.filter(city => city.region == city__pick && city.transportation_type == user_pick_value);
   console.log(country);
    let country_date = country.map(city_date => city_date.date);
    console.log(country_date);
    let country_score = country.map(city_date => city_date.score);
    console.log(country_score);

    
    var trace2 = {
        x: country_date,
        y: country_score,
        type: "line"
      }

      // make sure to delete one of the layouts

      var layout2 = {
        title: "Country Mobility",
        margin: {
          l: 100,
          r: 100,
          t: 100,
          b: 100
        }
      }

  })

  var inputField3 = d3.select("#selDataset6");
  inputField3.on("change", function () {
    var user_pick_value = d3.event.target.value
    var select_id = document.getElementById("selDataset5");
    let city__pick = select_id.options[select_id.selectedIndex].value;

    console.log(data);
    let country = data.filter(city => city.region == city__pick && city.transportation_type == user_pick_value);
   console.log(country);
    let country_date = country.map(city_date => city_date.date);
    console.log(country_date);
    let country_score = country.map(city_date => city_date.score);
    console.log(country_score);

    
    var trace3 = {
        x: country_date,
        y: country_score,
        type: "line"
      }

      var layout2 = {
        title: "Country Mobility",
        margin: {
          l: 100,
          r: 100,
          t: 100,
          b: 100
        }
      }

      // // Render the plot to the div tag with id "plot"
      Plotly.newPlot("plot", [trace2], [trace3], layout2);

    })

  })
