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

  var x4=document.getElementById("selDataset7");
  var y4=document.getElementById("selDataset8");

  for (let i = 0; i < data.length-1; i++) {
    // loop through country data
    if (data[i].region != data[i+1].region) {
      var option = document.createElement("option");
      option.text = data[i].region;
      var option1=document.createElement("option");
      option1.text=data[i].region;
      var option2=document.createElement("option");
      option2.text=data[i].region;
      var option3=document.createElement("option");
      option3.text=data[i].region;
      x.add(option);
      x2.add(option1);
      x3.add(option2);
      x4.add(option3);
      // x3.add(option);
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
    var option3=document.createElement("option");
    option3.text =mode;
    var option4=document.createElement("option");
    option4.text=mode;
    var option5=document.createElement("option");
    option5.text=mode
    y.add(option2);
    y2.add(option3);
    y3.add(option4);
    y4.add(option5);
    // y3.add(option2);
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
    })
  

  // CODE FOR TRACE 2 AND 3

 
  var inputField2 = d3.select("#selDataset4");
  inputField2.on("change", function () {
    var user_pick_value_2 = d3.event.target.value
    var select_id_2 = document.getElementById("selDataset3");
    let city__pick_2 = select_id_2.options[select_id_2.selectedIndex].value;

    console.log(data);
    let country = data.filter(city => city.region == city__pick_2 && city.transportation_type == user_pick_value_2);
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
      var layout2 = {
        title: "Country Mobility",
        margin: {
          l: 100,
          r: 100,
          t: 100,
          b: 100
        }}

    Plotly.newPlot("plot2", [trace2], layout2);

  var inputField3 = d3.select("#selDataset6");
  inputField3.on("change", function () {
    var user_pick_value_3 = d3.event.target.value
    var select_id_3 = document.getElementById("selDataset5");
    let city__pick_3 = select_id_3.options[select_id_3.selectedIndex].value;

    console.log(data);
    let country = data.filter(city => city.region == city__pick_3 && city.transportation_type == user_pick_value_3);
   console.log(country);
    let country_date = country.map(city_date => city_date.date);
    console.log(country_date);
    let country_score = country.map(city_date => city_date.score);
    console.log(country_score);





      var trace3 = {
        x3: country_date,
        y3: country_score,
        type: "line"
      }

      // make sure to delete one of the layouts

      var layout3 = {
        title: "Country Mobility",
        margin: {
          l: 100,
          r: 100,
          t: 100,
          b: 100
        }
      }

  // var tracedata = [trace2, trace3];
  Plotly.newPlot("plot2", [trace3], layout3);

  })

  var inputField5 = d3.select("#selDataset8");
  inputField5.on("change", function () {
    var user_pick_value_5 = d3.event.target.value
    var select_id_5 = document.getElementById("selDataset7");
    let city__pick_5 = select_id_5.options[select_id_2.selectedIndex].value;

    console.log(data);
    let country = data.filter(city => city.region == city__pick_5 && city.transportation_type == user_pick_value_5);
   console.log(country);
    let country_date = country.map(city_date => city_date.date);
    cd=country_date.slice(0,5).reverse();
    console.log(cd);
    let country_score = country.map(city_date => city_date.score);
    cs=country_score.slice(0,5).reverse();
    console.log(cs);

    
    var trace4 = {
        labels: cd,
        values: cs,
        type: "pie"
        // orientation: 'h'
      }
      console.log(cd);
     
      console.log(cs);
     
      var layout4 = {
        title: "Country Mobility",
      }

    Plotly.newPlot("myDiv", [trace4], layout4);


    // function buildChart(city_i){
    //   // load the data
    //   d3.json("samples.json").then(function(data) {
    //     var city_d=data.samples;
    //     var result=city_d.filter(city=>city.region==city_i);
    //     console.log(result);

    //     var scor=
    //     // var otu_ids=result.otu_ids;
    //     // var otu_labels=result.otu_labels;
    //     // var sample_values=result.sample_values;
    //     // console.log(sample_values);
    //     var barData={
    //         // y: otu_ids.slice(0, 10).map(otuID=>`OTU ${otuID}`).reverse(), 
    //         y: result.otu_ids.slice(0, 10).map(otuID=>`OTU ${otuID}`).reverse(), 
    //         x: result.sample_values.slice(0, 10).reverse(), 
    //         text: result.otu_labels.slice(0, 10).reverse(),
    //         type: 'bar', 
    //         orientation: 'h'
    //     };
    //     var barLayout={
    //         title: 'Top 10 Bacteria Cultures Found', 
    //         margin: {
    //             t: 30
    //         }
    //     };
    //     Plotly.newPlot('bar', [barData], barLayout);
    //     var bubbleData={
    //         x: result.otu_ids, 
    //         y: result.sample_values, 
    //         text: result.otu_labels, 
    //         mode: 'markers',
    //         marker: {
    //             size: result.sample_values,
    //             color: result.otu_ids, 
    //             colorScale: 'Earth'
    //         }

  // var xValue = ['selDataset', 'selDataset3', 'selDataset5'];
  // var yValue = ['#selDataset7','selDataset8', 'selDataset9'];
  // var trace5 = {
  //   x: country_date,
  //   y: country_score,
  //   type: 'bar',
  //   text: yValue.map('#selDataset7'),
  //   textposition: 'auto',
  //   hoverinfo: 'none',
  //   marker: {
  //     color: 'rgb(158,202,225)',
  //     opacity: 0.6,
  //     line: {
  //       color: 'rgb(8,48,107)',
  //       width: 1.5
  //     }
  //   }
  // };
  // var data7 = [trace5];
  // var layout7 = {
  //   title: 'Mobility',
  //   barmode: 'stack'
  // };
  // Plotly.newPlot('myDiv', data7, layout7);





  // var inputField3 = d3.select("#selDataset6");
  // inputField3.on("change", function () {
  //   var user_pick_value = d3.event.target.value
  //   var select_id = document.getElementById("selDataset5");
  //   let city__pick = select_id.options[select_id.selectedIndex].value;

  //   console.log(data);
  //   let country = data.filter(city => city.region == city__pick && city.transportation_type == user_pick_value);
  //  console.log(country);
  //   let country_date = country.map(city_date => city_date.date);
  //   console.log(country_date);
  //   let country_score = country.map(city_date => city_date.score);
  //   console.log(country_score);

    
  //   var trace3 = {
  //       x: country_date,
  //       y: country_score,
  //       type: "line"
  //     }

  //     var layout2 = {
  //       title: "Country Mobility",
  //       margin: {
  //         l: 100,
  //         r: 100,
  //         t: 100,
  //         b: 100
  //       }
  //     }

  //     // // Render the plot to the div tag with id "plot"
  //     Plotly.newPlot("plot2", [trace2], [trace3], layout2);

  //   })

  })
  
} )
} )

    
