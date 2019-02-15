import { Component, OnInit } from '@angular/core';
import { D3Service } from './d3/d3.service';
import * as topojsonData from '../topojson.json';
import * as topojson from 'topojson';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  projection: string;
  path: any;
  constructor(private d3Service: D3Service) {
    this.projection = this.d3Service.d3.geoMercator()
      .translate([ 500, 500]);
    this.path = this.d3Service.d3.geoPath()
      .projection(this.projection);
  }
  ngOnInit() {
    const svg = this.d3Service.d3.select('#map')
      .append('svg')
      .attr('height', 1000)
      .attr('width', 1000)
      .append('g')
      // .attr('transform', `translate(100,100)`);
    console.log('HELLO')

      console.log(svg, '   svg')

      // console.log(topojson.feature('http://localhost:4200/assets/topojson.json', topojsonData.objects.ne_110m_admin_0_countries), ' svg')
      // console.log(topojsonData.objects)

      this.d3Service.d3.json('http://localhost:4200/assets/topojson.json').then((data) => {
        const countries = topojson.feature(data, topojsonData.objects.ne_110m_admin_0_countries).features;
        console.log(countries);
        countries.forEach((val, i) => {
          console.log(val.properties.FORMAL_EN, '   ', i);
        });
        svg.selectAll('.country')
          .data(countries)
          .enter().append('path')
          .attr('class', 'country')
          .attr('iso_a2', (val) => {
            console.log(val);
            return val;
          })
          .on('mouseover', this.onHover)
          .attr('d', this.path );
      });
  }


  onHover(d) {
    // console.log(this)
    // console.log(this.d3Service.d3.select(this))
    d3.select(this).append("div").attr("class",'whatzzzup').text(d.properties.NAME);
  }

}
