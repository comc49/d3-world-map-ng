import { Component, OnInit } from '@angular/core';
import { D3Service } from './d3/d3.service';
import * as topojsonData from '../topojson.json';
import * as topojson from 'topojson';
import * as d3 from 'd3';


const testData = [{"countryCodeIso2":"CN","country":"China","state":null,"latitude":39.916666666666664,"longitude":116.383333,"htmlUsage":59012,"pdfUsage":168787,"totalUsage":227799},{"countryCodeIso2":"US","country":"United States","state":null,"latitude":38.883333,"longitude":-77.0,"htmlUsage":45059,"pdfUsage":116269,"totalUsage":161328},{"countryCodeIso2":"IN","country":"India","state":null,"latitude":28.6,"longitude":77.2,"htmlUsage":16801,"pdfUsage":44982,"totalUsage":61783},{"countryCodeIso2":"TW","country":"Taiwan","state":null,"latitude":25.033333333333335,"longitude":121.516667,"htmlUsage":14008,"pdfUsage":37031,"totalUsage":51039},{"countryCodeIso2":"KR","country":"South Korea","state":null,"latitude":37.55,"longitude":126.983333,"htmlUsage":10642,"pdfUsage":33263,"totalUsage":43905},{"countryCodeIso2":"DE","country":"Germany","state":null,"latitude":52.516666666666666,"longitude":13.4,"htmlUsage":11859,"pdfUsage":25702,"totalUsage":37561},{"countryCodeIso2":"CA","country":"Canada","state":null,"latitude":45.416666666666664,"longitude":-75.7,"htmlUsage":8658,"pdfUsage":24733,"totalUsage":33391},{"countryCodeIso2":"GB","country":"United Kingdom","state":null,"latitude":51.5,"longitude":-0.083333,"htmlUsage":7781,"pdfUsage":22268,"totalUsage":30049},{"countryCodeIso2":"JP","country":"Japan","state":null,"latitude":35.68333333333333,"longitude":139.75,"htmlUsage":6519,"pdfUsage":17579,"totalUsage":24098},{"countryCodeIso2":"MO","country":"Macau","state":null,"latitude":0.0,"longitude":0.0,"htmlUsage":861,"pdfUsage":20614,"totalUsage":21475},{"countryCodeIso2":"FR","country":"France","state":null,"latitude":48.86666666666667,"longitude":2.333333,"htmlUsage":5414,"pdfUsage":14040,"totalUsage":19454},{"countryCodeIso2":"IT","country":"Italy","state":null,"latitude":41.9,"longitude":12.483333,"htmlUsage":3134,"pdfUsage":10806,"totalUsage":13940},{"countryCodeIso2":"TR","country":"Turkey","state":null,"latitude":39.93333333333333,"longitude":32.866667,"htmlUsage":2919,"pdfUsage":10060,"totalUsage":12979},{"countryCodeIso2":"NL","country":"Netherlands","state":null,"latitude":52.35,"longitude":4.916667,"htmlUsage":3759,"pdfUsage":9026,"totalUsage":12785},{"countryCodeIso2":"ES","country":"Spain","state":null,"latitude":40.4,"longitude":-3.683333,"htmlUsage":3744,"pdfUsage":8944,"totalUsage":12688},{"countryCodeIso2":"AU","country":"Australia","state":null,"latitude":-35.266666666666666,"longitude":149.133333,"htmlUsage":3006,"pdfUsage":8207,"totalUsage":11213},{"countryCodeIso2":"SE","country":"Sweden","state":null,"latitude":59.333333333333336,"longitude":18.05,"htmlUsage":2973,"pdfUsage":7920,"totalUsage":10893},{"countryCodeIso2":"HK","country":"Hong Kong","state":null,"latitude":0.0,"longitude":0.0,"htmlUsage":2014,"pdfUsage":7979,"totalUsage":9993},{"countryCodeIso2":"MY","country":"Malaysia","state":null,"latitude":3.1666666666666665,"longitude":101.7,"htmlUsage":1865,"pdfUsage":6000,"totalUsage":7865},{"countryCodeIso2":"SG","country":"Singapore","state":null,"latitude":1.2833333333333332,"longitude":103.85,"htmlUsage":1905,"pdfUsage":5809,"totalUsage":7714},{"countryCodeIso2":"BE","country":"Belgium","state":null,"latitude":50.833333333333336,"longitude":4.333333,"htmlUsage":1851,"pdfUsage":5755,"totalUsage":7606},{"countryCodeIso2":"BR","country":"Brazil","state":null,"latitude":-15.783333333333333,"longitude":-47.916667,"htmlUsage":1507,"pdfUsage":4135,"totalUsage":5642},{"countryCodeIso2":"FI","country":"Finland","state":null,"latitude":60.166666666666664,"longitude":24.933333,"htmlUsage":1298,"pdfUsage":3133,"totalUsage":4431},{"countryCodeIso2":"IE","country":"Ireland","state":null,"latitude":53.31666666666667,"longitude":-6.233333,"htmlUsage":1290,"pdfUsage":2975,"totalUsage":4265},{"countryCodeIso2":"PL","country":"Poland","state":null,"latitude":52.25,"longitude":21.0,"htmlUsage":859,"pdfUsage":3194,"totalUsage":4053},{"countryCodeIso2":"CH","country":"Switzerland","state":null,"latitude":46.916666666666664,"longitude":7.466667,"htmlUsage":1055,"pdfUsage":2931,"totalUsage":3986},{"countryCodeIso2":"IL","country":"Israel","state":null,"latitude":31.766666666666666,"longitude":35.233333,"htmlUsage":823,"pdfUsage":2598,"totalUsage":3421},{"countryCodeIso2":"MX","country":"Mexico","state":null,"latitude":19.433333333333334,"longitude":-99.133333,"htmlUsage":708,"pdfUsage":2454,"totalUsage":3162},{"countryCodeIso2":"PK","country":"Pakistan","state":null,"latitude":33.68333333333333,"longitude":73.05,"htmlUsage":901,"pdfUsage":2135,"totalUsage":3036},{"countryCodeIso2":"RU","country":"Russia","state":null,"latitude":55.75,"longitude":37.6,"htmlUsage":555,"pdfUsage":2399,"totalUsage":2954},{"countryCodeIso2":"AT","country":"Austria","state":null,"latitude":48.2,"longitude":16.366667,"htmlUsage":910,"pdfUsage":1987,"totalUsage":2897},{"countryCodeIso2":"TH","country":"Thailand","state":null,"latitude":13.75,"longitude":100.516667,"htmlUsage":643,"pdfUsage":1692,"totalUsage":2335},{"countryCodeIso2":"CO","country":"Colombia","state":null,"latitude":4.6,"longitude":-74.083333,"htmlUsage":427,"pdfUsage":1879,"totalUsage":2306},{"countryCodeIso2":"PT","country":"Portugal","state":null,"latitude":38.71666666666667,"longitude":-9.133333,"htmlUsage":858,"pdfUsage":1411,"totalUsage":2269},{"countryCodeIso2":"ZA","country":"South Africa","state":null,"latitude":-25.7,"longitude":28.216667,"htmlUsage":567,"pdfUsage":1476,"totalUsage":2043},{"countryCodeIso2":"DK","country":"Denmark","state":null,"latitude":55.666666666666664,"longitude":12.583333,"htmlUsage":460,"pdfUsage":1118,"totalUsage":1578},{"countryCodeIso2":"CZ","country":"Czech Republic","state":null,"latitude":50.083333333333336,"longitude":14.466667,"htmlUsage":376,"pdfUsage":1113,"totalUsage":1489},{"countryCodeIso2":"IR","country":"Iran","state":null,"latitude":35.7,"longitude":51.416667,"htmlUsage":408,"pdfUsage":940,"totalUsage":1348},{"countryCodeIso2":"GR","country":"Greece","state":null,"latitude":37.983333333333334,"longitude":23.733333,"htmlUsage":363,"pdfUsage":978,"totalUsage":1341},{"countryCodeIso2":"SA","country":"Saudi Arabia","state":null,"latitude":24.65,"longitude":46.7,"htmlUsage":298,"pdfUsage":806,"totalUsage":1104},{"countryCodeIso2":"ID","country":"Indonesia","state":null,"latitude":-6.166666666666667,"longitude":106.816667,"htmlUsage":248,"pdfUsage":775,"totalUsage":1023},{"countryCodeIso2":"EG","country":"Egypt","state":null,"latitude":30.05,"longitude":31.25,"htmlUsage":221,"pdfUsage":792,"totalUsage":1013},{"countryCodeIso2":"NZ","country":"New Zealand","state":null,"latitude":-41.3,"longitude":174.783333,"htmlUsage":264,"pdfUsage":548,"totalUsage":812},{"countryCodeIso2":"RS","country":"Serbia","state":null,"latitude":44.833333333333336,"longitude":20.5,"htmlUsage":365,"pdfUsage":446,"totalUsage":811},{"countryCodeIso2":"NO","country":"Norway","state":null,"latitude":59.916666666666664,"longitude":10.75,"htmlUsage":207,"pdfUsage":544,"totalUsage":751},{"countryCodeIso2":"LB","country":"Lebanon","state":null,"latitude":33.86666666666667,"longitude":35.5,"htmlUsage":235,"pdfUsage":462,"totalUsage":697},{"countryCodeIso2":"AR","country":"Argentina","state":null,"latitude":-34.583333333333336,"longitude":-58.666667,"htmlUsage":179,"pdfUsage":409,"totalUsage":588},{"countryCodeIso2":"AE","country":"United Arab Emirates","state":null,"latitude":24.466666666666665,"longitude":54.366667,"htmlUsage":200,"pdfUsage":378,"totalUsage":578},{"countryCodeIso2":"BG","country":"Bulgaria","state":null,"latitude":42.68333333333333,"longitude":23.316667,"htmlUsage":40,"pdfUsage":499,"totalUsage":539},{"countryCodeIso2":"EE","country":"Estonia","state":null,"latitude":59.43333333333333,"longitude":24.716667,"htmlUsage":38,"pdfUsage":481,"totalUsage":519},{"countryCodeIso2":"TN","country":"Tunisia","state":null,"latitude":36.8,"longitude":10.183333,"htmlUsage":132,"pdfUsage":371,"totalUsage":503},{"countryCodeIso2":"RO","country":"Romania","state":null,"latitude":44.43333333333333,"longitude":26.1,"htmlUsage":137,"pdfUsage":344,"totalUsage":481},{"countryCodeIso2":"UA","country":"Ukraine","state":null,"latitude":50.43333333333333,"longitude":30.516667,"htmlUsage":74,"pdfUsage":369,"totalUsage":443},{"countryCodeIso2":"HR","country":"Croatia","state":null,"latitude":45.8,"longitude":16.0,"htmlUsage":120,"pdfUsage":313,"totalUsage":433},{"countryCodeIso2":"PH","country":"Philippines","state":null,"latitude":14.6,"longitude":120.966667,"htmlUsage":130,"pdfUsage":240,"totalUsage":370},{"countryCodeIso2":"CY","country":"Cyprus","state":null,"latitude":35.166666666666664,"longitude":33.366667,"htmlUsage":91,"pdfUsage":250,"totalUsage":341},{"countryCodeIso2":"SI","country":"Slovenia","state":null,"latitude":46.05,"longitude":14.516667,"htmlUsage":72,"pdfUsage":267,"totalUsage":339},{"countryCodeIso2":"CL","country":"Chile","state":null,"latitude":-33.45,"longitude":-70.666667,"htmlUsage":47,"pdfUsage":261,"totalUsage":308},{"countryCodeIso2":"LT","country":"Lithuania","state":null,"latitude":54.68333333333333,"longitude":25.316667,"htmlUsage":68,"pdfUsage":197,"totalUsage":265},{"countryCodeIso2":"VN","country":"Vietnam","state":null,"latitude":21.033333333333335,"longitude":105.85,"htmlUsage":55,"pdfUsage":167,"totalUsage":222},{"countryCodeIso2":"PR","country":"Puerto Rico","state":null,"latitude":18.466666666666665,"longitude":-66.116667,"htmlUsage":52,"pdfUsage":158,"totalUsage":210},{"countryCodeIso2":"BD","country":"Bangladesh","state":null,"latitude":23.716666666666665,"longitude":90.4,"htmlUsage":62,"pdfUsage":125,"totalUsage":187},{"countryCodeIso2":"LU","country":"Luxembourg","state":null,"latitude":49.6,"longitude":6.116667,"htmlUsage":69,"pdfUsage":117,"totalUsage":186},{"countryCodeIso2":"HU","country":"Hungary","state":null,"latitude":47.5,"longitude":19.083333,"htmlUsage":46,"pdfUsage":115,"totalUsage":161},{"countryCodeIso2":"CR","country":"Costa Rica","state":null,"latitude":9.933333333333334,"longitude":-84.083333,"htmlUsage":53,"pdfUsage":93,"totalUsage":146},{"countryCodeIso2":"KZ","country":"Kazakhstan","state":null,"latitude":51.166666666666664,"longitude":71.416667,"htmlUsage":38,"pdfUsage":94,"totalUsage":132},{"countryCodeIso2":"EC","country":"Ecuador","state":null,"latitude":-0.21666666666666667,"longitude":-78.5,"htmlUsage":44,"pdfUsage":86,"totalUsage":130},{"countryCodeIso2":"LK","country":"Sri Lanka","state":null,"latitude":6.916666666666667,"longitude":79.833333,"htmlUsage":33,"pdfUsage":68,"totalUsage":101},{"countryCodeIso2":"LV","country":"Latvia","state":null,"latitude":56.95,"longitude":24.1,"htmlUsage":32,"pdfUsage":62,"totalUsage":94},{"countryCodeIso2":"JO","country":"Jordan","state":null,"latitude":31.95,"longitude":35.933333,"htmlUsage":36,"pdfUsage":55,"totalUsage":91},{"countryCodeIso2":"MT","country":"Malta","state":null,"latitude":35.88333333333333,"longitude":14.5,"htmlUsage":39,"pdfUsage":51,"totalUsage":90},{"countryCodeIso2":"PE","country":"Peru","state":null,"latitude":-12.05,"longitude":-77.05,"htmlUsage":27,"pdfUsage":59,"totalUsage":86},{"countryCodeIso2":"IS","country":"Iceland","state":null,"latitude":64.15,"longitude":-21.95,"htmlUsage":18,"pdfUsage":61,"totalUsage":79},{"countryCodeIso2":"GH","country":"Ghana","state":null,"latitude":5.55,"longitude":-0.216667,"htmlUsage":21,"pdfUsage":54,"totalUsage":75},{"countryCodeIso2":"KE","country":"Kenya","state":null,"latitude":-1.2833333333333332,"longitude":36.816667,"htmlUsage":14,"pdfUsage":61,"totalUsage":75},{"countryCodeIso2":"DZ","country":"Algeria","state":null,"latitude":36.75,"longitude":3.05,"htmlUsage":13,"pdfUsage":58,"totalUsage":71},{"countryCodeIso2":"UY","country":"Uruguay","state":null,"latitude":-34.85,"longitude":-56.166667,"htmlUsage":16,"pdfUsage":53,"totalUsage":69},{"countryCodeIso2":"IQ","country":"Iraq","state":null,"latitude":33.333333333333336,"longitude":44.4,"htmlUsage":13,"pdfUsage":46,"totalUsage":59},{"countryCodeIso2":"KW","country":"Kuwait","state":null,"latitude":29.366666666666667,"longitude":47.966667,"htmlUsage":11,"pdfUsage":48,"totalUsage":59},{"countryCodeIso2":"OM","country":"Oman","state":null,"latitude":23.616666666666667,"longitude":58.583333,"htmlUsage":9,"pdfUsage":44,"totalUsage":53},{"countryCodeIso2":"BY","country":"Belarus","state":null,"latitude":53.9,"longitude":27.566667,"htmlUsage":5,"pdfUsage":45,"totalUsage":50},{"countryCodeIso2":"MA","country":"Morocco","state":null,"latitude":34.016666666666666,"longitude":-6.816667,"htmlUsage":10,"pdfUsage":38,"totalUsage":48},{"countryCodeIso2":"GE","country":"Georgia","state":null,"latitude":41.68333333333333,"longitude":44.833333,"htmlUsage":6,"pdfUsage":33,"totalUsage":39},{"countryCodeIso2":"NG","country":"Nigeria","state":null,"latitude":9.083333333333334,"longitude":7.533333,"htmlUsage":3,"pdfUsage":32,"totalUsage":35},{"countryCodeIso2":"BW","country":"Botswana","state":null,"latitude":-24.633333333333333,"longitude":25.9,"htmlUsage":6,"pdfUsage":28,"totalUsage":34},{"countryCodeIso2":"SK","country":"Slovakia","state":null,"latitude":48.15,"longitude":17.116667,"htmlUsage":8,"pdfUsage":21,"totalUsage":29},{"countryCodeIso2":"TT","country":"Trinidad and Tobago","state":null,"latitude":10.65,"longitude":-61.516667,"htmlUsage":11,"pdfUsage":18,"totalUsage":29},{"countryCodeIso2":"PA","country":"Panama","state":null,"latitude":8.966666666666667,"longitude":-79.533333,"htmlUsage":5,"pdfUsage":21,"totalUsage":26},{"countryCodeIso2":"QA","country":"Qatar","state":null,"latitude":25.283333333333335,"longitude":51.533333,"htmlUsage":6,"pdfUsage":20,"totalUsage":26},{"countryCodeIso2":"NA","country":"Namibia","state":null,"latitude":-22.566666666666666,"longitude":17.083333,"htmlUsage":6,"pdfUsage":18,"totalUsage":24},{"countryCodeIso2":"AM","country":"Armenia","state":null,"latitude":40.166666666666664,"longitude":44.5,"htmlUsage":12,"pdfUsage":8,"totalUsage":20},{"countryCodeIso2":"LY","country":"Libya","state":null,"latitude":32.88333333333333,"longitude":13.166667,"htmlUsage":3,"pdfUsage":17,"totalUsage":20},{"countryCodeIso2":"CU","country":"Cuba","state":null,"latitude":23.116666666666667,"longitude":-82.35,"htmlUsage":6,"pdfUsage":9,"totalUsage":15},{"countryCodeIso2":"PS","country":"Palestine","state":null,"latitude":31.766666666666666,"longitude":35.233333,"htmlUsage":4,"pdfUsage":9,"totalUsage":13},{"countryCodeIso2":"TZ","country":"Tanzania","state":null,"latitude":-6.8,"longitude":39.283333,"htmlUsage":1,"pdfUsage":12,"totalUsage":13},{"countryCodeIso2":"SY","country":"Syria","state":null,"latitude":33.5,"longitude":36.3,"htmlUsage":2,"pdfUsage":10,"totalUsage":12},{"countryCodeIso2":"MM","country":"Myanmar","state":null,"latitude":16.8,"longitude":96.15,"htmlUsage":2,"pdfUsage":8,"totalUsage":10},{"countryCodeIso2":"SD","country":"Sudan","state":null,"latitude":15.6,"longitude":32.533333,"htmlUsage":0,"pdfUsage":9,"totalUsage":9},{"countryCodeIso2":"UG","country":"Uganda","state":null,"latitude":0.31666666666666665,"longitude":32.55,"htmlUsage":0,"pdfUsage":8,"totalUsage":8},{"countryCodeIso2":"MU","country":"Mauritius","state":null,"latitude":-20.15,"longitude":57.483333,"htmlUsage":1,"pdfUsage":6,"totalUsage":7},{"countryCodeIso2":"ET","country":"Ethiopia","state":null,"latitude":9.033333333333333,"longitude":38.7,"htmlUsage":1,"pdfUsage":5,"totalUsage":6},{"countryCodeIso2":"NP","country":"Nepal","state":null,"latitude":27.716666666666665,"longitude":85.316667,"htmlUsage":4,"pdfUsage":2,"totalUsage":6},{"countryCodeIso2":"BH","country":"Bahrain","state":null,"latitude":26.233333333333334,"longitude":50.566667,"htmlUsage":1,"pdfUsage":3,"totalUsage":4},{"countryCodeIso2":"FJ","country":"Fiji","state":null,"latitude":-18.133333333333333,"longitude":178.416667,"htmlUsage":1,"pdfUsage":3,"totalUsage":4},{"countryCodeIso2":"VE","country":"Venezuela","state":null,"latitude":10.483333333333333,"longitude":-66.866667,"htmlUsage":3,"pdfUsage":1,"totalUsage":4},{"countryCodeIso2":"ZM","country":"Zambia","state":null,"latitude":-15.416666666666666,"longitude":28.283333,"htmlUsage":2,"pdfUsage":2,"totalUsage":4},{"countryCodeIso2":"AL","country":"Albania","state":null,"latitude":41.31666666666667,"longitude":19.816667,"htmlUsage":0,"pdfUsage":3,"totalUsage":3},{"countryCodeIso2":"BO","country":"Bolivia","state":null,"latitude":-16.5,"longitude":-68.15,"htmlUsage":0,"pdfUsage":3,"totalUsage":3},{"countryCodeIso2":"BT","country":"Bhutan","state":null,"latitude":27.466666666666665,"longitude":89.633333,"htmlUsage":3,"pdfUsage":0,"totalUsage":3},{"countryCodeIso2":"CM","country":"Cameroon","state":null,"latitude":3.8666666666666667,"longitude":11.516667,"htmlUsage":0,"pdfUsage":3,"totalUsage":3},{"countryCodeIso2":"ME","country":"Montenegro","state":null,"latitude":42.43333333333333,"longitude":19.266667,"htmlUsage":0,"pdfUsage":3,"totalUsage":3},{"countryCodeIso2":"MK","country":"Macedonia","state":null,"latitude":42.0,"longitude":21.433333,"htmlUsage":0,"pdfUsage":3,"totalUsage":3},{"countryCodeIso2":"MN","country":"Mongolia","state":null,"latitude":47.916666666666664,"longitude":106.916667,"htmlUsage":2,"pdfUsage":1,"totalUsage":3},{"countryCodeIso2":"AZ","country":"Azerbaijan","state":null,"latitude":40.38333333333333,"longitude":49.866667,"htmlUsage":0,"pdfUsage":2,"totalUsage":2},{"countryCodeIso2":"GL","country":"Greenland","state":null,"latitude":64.18333333333334,"longitude":-51.75,"htmlUsage":1,"pdfUsage":1,"totalUsage":2},{"countryCodeIso2":"PY","country":"Paraguay","state":null,"latitude":-25.266666666666666,"longitude":-57.666667,"htmlUsage":0,"pdfUsage":2,"totalUsage":2},{"countryCodeIso2":"RW","country":"Rwanda","state":null,"latitude":-1.95,"longitude":30.05,"htmlUsage":0,"pdfUsage":2,"totalUsage":2},{"countryCodeIso2":"SN","country":"Senegal","state":null,"latitude":14.733333333333333,"longitude":-17.633333,"htmlUsage":1,"pdfUsage":1,"totalUsage":2},{"countryCodeIso2":"AF","country":"Afghanistan","state":null,"latitude":34.516666666666666,"longitude":69.183333,"htmlUsage":0,"pdfUsage":1,"totalUsage":1},{"countryCodeIso2":"AO","country":"Angola","state":null,"latitude":-8.833333333333334,"longitude":13.216667,"htmlUsage":0,"pdfUsage":1,"totalUsage":1},{"countryCodeIso2":"BA","country":"Bosnia and Herzegovina","state":null,"latitude":43.86666666666667,"longitude":18.416667,"htmlUsage":0,"pdfUsage":1,"totalUsage":1},{"countryCodeIso2":"BJ","country":"Benin","state":null,"latitude":6.483333333333333,"longitude":2.616667,"htmlUsage":0,"pdfUsage":1,"totalUsage":1},{"countryCodeIso2":"CI","country":"Cote d'Ivoire","state":null,"latitude":6.816666666666666,"longitude":-5.266667,"htmlUsage":0,"pdfUsage":1,"totalUsage":1},{"countryCodeIso2":"DO","country":"Dominican Republic","state":null,"latitude":18.466666666666665,"longitude":-69.9,"htmlUsage":0,"pdfUsage":1,"totalUsage":1},{"countryCodeIso2":"GG","country":"Guernsey","state":null,"latitude":49.45,"longitude":-2.533333,"htmlUsage":0,"pdfUsage":1,"totalUsage":1},{"countryCodeIso2":"GT","country":"Guatemala","state":null,"latitude":14.616666666666667,"longitude":-90.516667,"htmlUsage":0,"pdfUsage":1,"totalUsage":1},{"countryCodeIso2":"JE","country":"Jersey","state":null,"latitude":49.18333333333333,"longitude":-2.1,"htmlUsage":1,"pdfUsage":0,"totalUsage":1},{"countryCodeIso2":"LR","country":"Liberia","state":null,"latitude":6.3,"longitude":-10.8,"htmlUsage":0,"pdfUsage":1,"totalUsage":1},{"countryCodeIso2":"MG","country":"Madagascar","state":null,"latitude":-18.916666666666668,"longitude":47.516667,"htmlUsage":0,"pdfUsage":1,"totalUsage":1},{"countryCodeIso2":"MW","country":"Malawi","state":null,"latitude":-13.966666666666667,"longitude":33.783333,"htmlUsage":0,"pdfUsage":1,"totalUsage":1},{"countryCodeIso2":"SV","country":"El Salvador","state":null,"latitude":13.7,"longitude":-89.2,"htmlUsage":0,"pdfUsage":1,"totalUsage":1},{"countryCodeIso2":"UZ","country":"Uzbekistan","state":null,"latitude":41.31666666666667,"longitude":69.25,"htmlUsage":0,"pdfUsage":1,"totalUsage":1},{"countryCodeIso2":"YE","country":"Yemen","state":null,"latitude":15.35,"longitude":44.2,"htmlUsage":0,"pdfUsage":1,"totalUsage":1}]

const width = 1200;
const height = 800;
let tooltipTest: any;
const projection = d3.geoMercator()
  .translate([ width/2, height/2]);
const path = d3.geoPath()
  .projection(projection);

let svg;
let g;

const zoomed = () => {
  const t = d3.event.transform ;
  console.log(d3.event)
  g.attr("transform","translate(" + [t.x, t.y] + ")scale(" + t.k + ")") ;

}

const zoom = d3
  .zoom()
  .on("zoom", zoomed).translateExtent([[0, 0], [width, height]]).scaleExtent([1, 10])


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  zoomLevel = 1;
  zoomLevelDefault = 1;
  g: any;
  constructor() {
  }
  ngOnInit() {
    tooltipTest = d3.select('#tooltip');

      d3.json('/assets/topojson.json').then((data) => {
        const countries = topojson.feature(data, data.objects.ne_110m_admin_0_countries).features;
        console.log(countries);

        // Define map zoom behaviour

        svg = d3.select('#map')
          .append('svg')
          .attr('height', height)
          .attr('width', width)
        g = svg.append('g');
        svg.call(zoom);

        g.selectAll('.country')
          .data(countries)
          .enter().append('path')
          .attr('class', 'country')
          .attr('iso_a2', (val) => {
            // console.log(val);
            return val;
          })
          .on('mouseover', this.onHover)
          .on('mouseout', this.onExit)
          .attr('d', path);

          // function zoomed() {
          //   const t = d3.event.transform;
          //   g.attr("transform", "translate(" + [t.x, t.y] + ")scale(" + t.k + ")");
          // }

          // // Define map zoom behaviour
          // const zoom = d3.zoom().on("zoom", zoomed) ;


        g.selectAll('g')
          .data(countries)
          .enter()
          .append("g")
          .attr("class", 'countryLabel')

        const countryInfo = g.selectAll(".countryInfo")
          .data(testData)
          .enter()
          .append("g")
          .attr("class", 'countryInfo');

        countryInfo
          .append("text")
          .classed("hide", true)
          .style("text-anchor", "middle")
          .attr("dx", 0)
          .attr("dy", 0)
          .attr("transform", (country) => {
              return (
                "translate(" + projection([country.longitude, country.latitude])[0] +
                  "," + projection([country.longitude, country.latitude])[1] + ")"
              );
          })
          .text( (c) => {
            return c.totalUsage;
          })

        // g.selectAll('countryLabel')
        //   .data(testData)
        //   .enter()
        //   .append('circle')
        //   .attr('r', 10)
        //   .attr('cx', (d) => {
        //     // return this.projection([d.latitude, d.longitude])[0];
        //     return this.projection([d.longitude, d.latitude])[0];
        //   })
        //   .attr('cy', (d) => {
        //     return this.projection([d.longitude, d.latitude])[1];
        //   });



      });
  }

  onHover(d) {

    const country = testData.find((val) => {
      return val.countryCodeIso2 === d.properties.ISO_A2
    });
    tooltipTest.classed('hide', false);
    if (country) {
      tooltipTest.select('.countryName').text(country.country);
      tooltipTest.select('.totalUsage').text(country.totalUsage);
    } else {
      tooltipTest.select('.countryName').text(d.properties.NAME);
      tooltipTest.select('.totalUsage').text('');
    }
    tooltipTest
      .style("top", (d3.event.layerY + 15) + "px")
      .style("left", (d3.event.layerX + 15) + "px");
  }

  onExit(d) {
    tooltipTest.classed('hide', true);
  }

  onZoomInClicked() {
    const transform = d3.zoomTransform(svg.node());
    const newK = transform.k + .3;
    zoom.scaleTo(svg, newK);

    // g.attr("transform","translate("
    //   + [(width - this.zoomLevel * width)/2, (height - this.zoomLevel * height)/2] + ")scale(" + this.zoomLevel + ")") ;
  }

  onZoomOutClicked() {
    const transform = d3.zoomTransform(svg.node());
    const newK = transform.k - .3;
    zoom.scaleTo(svg, newK);
  }

  resetZoom() {
    zoom.scaleTo(svg, 1);
  }

}
