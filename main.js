// username: j0e123
// pass: joepass123


window.onload = function() {
  const myDiv = document.getElementById("myDiv");
  console.log(myDiv);

//
  // var trace1 = {
  //     x:['2020-10-04', '2021-11-04', '2023-12-04'],
  //     y: [90, 40, 60],
  //     type: 'scatter'
  // };

  // var data = [trace1];

  // var layout = {
  //     title: 'Scroll and Zoom by joe',
  //     showlegend: false
  // };

  // Plotly.newPlot('myDiv', data, layout, {scrollZoom: true});
  //


//
// var trace1 = {
//   x: [0, 1, 2, 3, 4],
//   y: [1, 5, 3, 7, 5],
//   mode: 'lines+markers',
//   type: 'scatter'
// };

// var trace2 = {
//   x: [1, 2, 3, 4, 5],
//   y: [4, 0, 4, 6, 8],
//   mode: 'lines+markers',
//   type: 'scatter'
// };

// var data = [trace1, trace2];
// var layout = {title: 'Click Here<br>to Edit Chart Title'};

// Plotly.newPlot('myDiv', data, layout, {editable: true});
//


//
// var trace1 = {
//   x: [0, 1, 2, 3, 4, 5, 6],
//   y: [1, 9, 4, 7, 5, 2, 4],
//   mode: 'markers',
//   marker: {
//       size: [20, 40, 25, 10, 60, 90, 30],
//   }
// };

// var data = [trace1];

// var layout = {
//   title: 'Create a Static Chart',
//   showlegend: false
// };

// Plotly.newPlot('myDiv', data, layout, {staticPlot: true});
//

//
// var trace1 = {
//   x: [0, 1, 2, 3, 4, 5, 6],
//   y: [1, 9, 4, 7, 5, 2, 4],
//   mode: 'text',
//   marker: {
//       size: 10,
//   }
// };

// var data = [trace1];

// var layout = {
//   title: 'Download Chart as SVG instead of PNG',
//   showlegend: false
// };

// var config = {
// toImageButtonOptions: {
//   format: 'svg', // one of png, svg, jpeg, webp
//   filename: 'custom_image',
//   height: 500,
//   width: 700,
//   scale: 1 // Multiply title/legend/axis/canvas sizes by this factor
// }
// };

// Plotly.newPlot('myDiv', data, layout, {scrollZoom: true}, config);
//

// 
// var data = [{
//   y:['Marc', 'Henrietta', 'Jean', 'Claude', 'Jeffrey', 'Jonathan', 'Jennifer', 'Zacharias'], 
//     x: [90, 40, 60, 80, 75, 92, 87, 73],
//     type: 'bar',
//     orientation: 'h',
//     name: 'San Francisco Zoo'
  
//   }]

// var layout = {
//   title: 'Always Display the Modebar',
//   showlegend: false}

// Plotly.newPlot('myDiv', data, layout, {displayModeBar: true})
// 

// 
// var icon1 = {
//   'width': 500,
//   'height': 600,
//   'path': 'M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z'
// }

// var colors = ['green', 'red', 'blue']
// var data = [{
//   mode: 'lines',
//   y: [2, 1, 2],
//   line: {color: colors[1], width: 3, shape: 'spline'}
// }]

// var layout = {
//   title: 'add mode bar button with custom icon',
//   modebardisplay: false}

// var config = {
//   modeBarButtonsToAdd: [
//     {
//       name: 'color toggler',
//       icon: icon1,
//       click: function(gd) {
//         var newColor = colors[Math.floor(3 * Math.random())]
//         Plotly.restyle(gd, 'line.color', newColor)
//       }},
//     {
//       name: 'button1',
//       icon: Plotly.Icons.pencil,
//       direction: 'up',
//       click: function(gd) {alert('button1')
//     }}],
//   modeBarButtonsToRemove: ['pan2d','select2d','lasso2d','resetScale2d','zoomOut2d']}

// Plotly.newPlot('myDiv', data, layout, config)
// 

// 
// var trace1 = {
//   x: [0, 1, 2, 3, 4, 5, 6],
//   y: [1, 9, 4, 7, 5, 2, 4],
//   mode: 'lines+markers',
//   type: 'scatter'
// };

// var data = [trace1];

// var layout = {
// 	title: 'Display the Edit Chart Link'
// };

// var config = {
//   showLink: true,
//   plotlyServerURL: "https://chart-studio.plotly.com"
// };

// Plotly.newPlot('myDiv', data, layout, config);
// 





//
// var trace1 = {
//   type: "scatter",
//   mode: "lines",
//   x: ['2018-01-01', '2018-08-31'],
//   y: [10, 5],
//   line: {color: '#17BECF'}
// };

// var trace2 = {
//   type: "scatter",
//   mode: "lines",
//   x: ['2018-01-01', '2018-08-31'],
//   y: [3,7],
//   line: {color: '#7F7F7F'}
// };

// var data = [trace1,trace2];

// var layout = {
//   title: 'Custom Locale',
// };

// var config = {locale: 'fr'};

// Plotly.newPlot('myDiv', data, layout, config);
//


var trace1 = {
  type: 'bar',
  x: [1, 2, 3, 4],
  y: [5, 10, 2, 8],
  marker: {
      color: '#C8A2C8',
      line: {
          width: 2.5
      }
  }
};

var data = [ trace1 ];

var layout = {
title: 'Responsive to window size!',
font: {size: 18}
};

Plotly.newPlot('myDiv', data, layout, {responsive: true});

}