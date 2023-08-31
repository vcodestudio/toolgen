<script>
    import { onMount } from 'svelte';
    import * as d3 from 'd3';
  
    let svg;
  
    onMount(async () => {
      const data = [
        { date: '2023-01-01', price: 10, volume: 100 },
        { date: '2023-01-02', price: 20, volume: 200 },
        { date: '2023-01-03', price: 30, volume: 300 },
        { date: '2023-01-04', price: 40, volume: 400 },
        { date: '2023-01-05', price: 50, volume: 500 },
        { date: '2023-01-06', price: 60, volume: 600 },
        { date: '2023-01-07', price: 70, volume: 700 },
        { date: '2023-01-08', price: 80, volume: 800 },
        { date: '2023-01-09', price: 90, volume: 900 },
        { date: '2023-01-10', price: 100, volume: 1000 }
      ];
  
      const margin = {top: 20, right: 20, bottom: 30, left: 50};
      const width = 960 - margin.left - margin.right;
      const height = 500 - margin.top - margin.bottom;
  
      const x = d3.scaleTime().range([0, width]);
      const y0 = d3.scaleLinear().range([height, 0]);
      const y1 = d3.scaleLinear().range([height, 0]);
  
      const line0 = d3.line()
        .x(d => x(d.date))
        .y(d => y0(d.price));
  
      const line1 = d3.line()
        .x(d => x(d.date))
        .y(d => y1(d.volume));
  
      const g = d3.select(svg)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
  
      x.domain(d3.extent(data, d => d.date));
      y0.domain(d3.extent(data, d => d.price));
      y1.domain([0, d3.max(data, d => d.volume)]);
  
      g.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x));
  
      g.append('g')
        .call(d3.axisLeft(y0))
        .append('text')
        .attr('fill', '#000')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '0.71em')
        .attr('text-anchor', 'end')
        .text('Price');
  
      g.append('g')
        .attr('transform', `translate(${width}, 0)`)
        .call(d3.axisRight(y1))
        .append('text')
        .attr('fill', '#000')
        .attr('transform', 'rotate(-90)')
        .attr('y', -6)
        .attr('dy', '0.71em')
        .attr('text-anchor', 'end')
        .text('Volume');
  
      g.append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .attr('stroke-linejoin', 'round')
        .attr('stroke-linecap', 'round')
        .attr('stroke-width', 1.5)
        .attr('d', line0);
  
      g.append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', 'red')
        .attr('stroke-linejoin', 'round')
        .attr('stroke-linecap', 'round')
        .attr('stroke-width', 1.5)
        .attr('d', line1);
    });
  </script>
  
  <svg bind:this={svg} width="960" height="500"></svg>
  