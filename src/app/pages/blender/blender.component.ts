import { Component, OnDestroy, OnInit } from '@angular/core';
import Chart from "chart.js";
import { SanityService } from 'src/app/services/sanity.service';

@Component({
  selector: 'app-blender',
  templateUrl: './blender.component.html',
  styleUrls: ['./blender.component.scss']
})
export class BlenderComponent implements OnInit, OnDestroy {

  projects: any = [];
  isCollapsed = true;
  constructor( private sanityService: SanityService) {}

  imageUrl(source: any) {
    return this.sanityService.urlFor(source);
  }

  ngOnInit() {
    window.scrollTo(0,0);
    this.getProjects();
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("landing-page");

    // var canvas: any = document.getElementById("chartBig");
    // var ctx = canvas.getContext("2d");
    // var gradientFill = ctx.createLinearGradient(0, 350, 0, 50);
    // gradientFill.addColorStop(0, "rgba(228, 76, 196, 0.0)");
    // gradientFill.addColorStop(1, "rgba(228, 76, 196, 0.14)");
    // var chartBig = new Chart(ctx, {
    //   type: "line",
    //   responsive: true,
    //   data: {
    //     labels: [
    //       "JUN",
    //       "FEB",
    //       "MAR",
    //       "APR",
    //       "MAY",
    //       "JUN",
    //       "JUL",
    //       "AUG",
    //       "SEP",
    //       "OCT",
    //       "NOV",
    //       "DEC"
    //     ],
    //     datasets: [
    //       {
    //         label: "Data",
    //         fill: true,
    //         backgroundColor: gradientFill,
    //         borderColor: "#e44cc4",
    //         borderWidth: 2,
    //         borderDash: [],
    //         borderDashOffset: 0.0,
    //         pointBackgroundColor: "#e44cc4",
    //         pointBorderColor: "rgba(255,255,255,0)",
    //         pointHoverBackgroundColor: "#be55ed",
    //         //pointHoverBorderColor:'rgba(35,46,55,1)',
    //         pointBorderWidth: 20,
    //         pointHoverRadius: 4,
    //         pointHoverBorderWidth: 15,
    //         pointRadius: 4,
    //         data: [80, 160, 200, 160, 250, 280, 220, 190, 200, 250, 290, 320]
    //       }
    //     ]
    //   },
    //   options: {
    //     maintainAspectRatio: false,
    //     legend: {
    //       display: false
    //     },

    //     tooltips: {
    //       backgroundColor: "#fff",
    //       titleFontColor: "#ccc",
    //       bodyFontColor: "#666",
    //       bodySpacing: 4,
    //       xPadding: 12,
    //       mode: "nearest",
    //       intersect: 0,
    //       position: "nearest"
    //     },
    //     responsive: true,
    //     scales: {
    //       yAxes: [
    //         {
    //           barPercentage: 1.6,
    //           gridLines: {
    //             drawBorder: false,
    //             color: "rgba(0,0,0,0.0)",
    //             zeroLineColor: "transparent"
    //           },
    //           ticks: {
    //             display: false,
    //             suggestedMin: 0,
    //             suggestedMax: 350,
    //             padding: 20,
    //             fontColor: "#9a9a9a"
    //           }
    //         }
    //       ],

    //       xAxes: [
    //         {
    //           barPercentage: 1.6,
    //           gridLines: {
    //             drawBorder: false,
    //             color: "rgba(0,0,0,0)",
    //             zeroLineColor: "transparent"
    //           },
    //           ticks: {
    //             padding: 20,
    //             fontColor: "#9a9a9a"
    //           }
    //         }
    //       ]
    //     }
    //   }
    // });
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("landing-page");
  }

  async getProjects(): Promise<any>  {
    this.projects = await this.sanityService.getProjects();
    this.projects = this.projects.filter(p => { return p.projectType == 'blender' });
    console.log(this.projects);
    return this.projects;
  }
}
