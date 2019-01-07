
// // JavaScript


// // DOM MANIPULATION/SELECTION

// // first element that matches the dom element
// d3.select()
// // Finds all the element
// d3.selectAll()

// // Example & can style them too
// d3.select('h1').style('color', 'red')
// .attr('class', 'heading')
// .text('Updated h1 tag')

// // attribute adding
// // update the text in the element

// // Append stuff
// d3.select('body').append('p').text('First Paragraph')
// d3.select('body').append('p').text('Second Paragraph')
// d3.select('body').append('p').text('Third Paragraph')

// d3.selectAll('p').style('color', 'blue')

// Data manipulation

// var dataset = [1, 2, 3, 4, 5]

// d3.select('body')
//     .selectAll('p')
//     .data(dataset) // will put data in waiting state
//     .enter() //will take data items 1 by 1 and perform operations on them
//     .append('p') // appends paragraph for each data element
//     .text('D3 is awesome!!') // bind dummy text
//     .text(function(d) {return d }) // displays the data inside it


// CREATING A BARCHART

var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160]

var svgWidth = 500, svgHeight = 300, barPadding = 5
var barWidth = (svgWidth / dataset.length)

var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight)


var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function(d){
        return svgHeight - d
    })
    .attr("height", function(d) {return d})
    .attr("width", barWidth - barPadding)
    .attr("transform", function(d, i) {
        var translate = [barWidth * i, 0]
        return "translate(" + translate + ")"
    })
