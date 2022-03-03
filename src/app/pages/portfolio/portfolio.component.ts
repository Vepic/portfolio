import { Component, OnDestroy, OnInit } from '@angular/core';
import noUiSlider from "nouislider";
import { SanityService } from 'src/app/services/sanity.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  focus;
  focus1;
  focus2;
  date = new Date();
  pagination = 3;
  pagination1 = 1;

  aeCount = 0;
  aiCount = 0;
  blenderCount = 0;
  projects:any = [];
  constructor(private sanityService: SanityService) { }
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }

  imageUrl(source: any) {
    return this.sanityService.urlFor(source);
  }

  ngOnInit() {
    this.getProjects();
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");

    // var slider = document.getElementById("sliderRegular");

    // noUiSlider.create(slider, {
    //   start: 40,
    //   connect: false,
    //   range: {
    //     min: 0,
    //     max: 100
    //   }
    // });

    // var slider2 = document.getElementById("sliderDouble");

    // noUiSlider.create(slider2, {
    //   start: [20, 60],
    //   connect: true,
    //   range: {
    //     min: 0,
    //     max: 100
    //   }
    // });
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");
  }

  async getProjects(): Promise<any>  {
    this.projects = await this.sanityService.getProjects();
    console.log(this.projects);
    for (const project of this.projects) {
      if (project.projectType == 'blender') {
        this.blenderCount = this.blenderCount + 1;
      } else if(project.projectType == 'adobeIllustrator') {
        this.aiCount = this.aiCount + 1;
      } else {
        this.aeCount =this.aeCount + 1;
      }
    }
    return this.projects;
  }
}
