
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


