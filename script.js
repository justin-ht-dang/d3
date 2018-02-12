var data = [1, 2, 3, 4, 5]

d3.select('.chart')
    .selectAll('div')
        .data(data)
    .enter().append('div')
        .style('width', function(d) { return d * 50 + 'px'; })
        .text(function(d) { return d; });
