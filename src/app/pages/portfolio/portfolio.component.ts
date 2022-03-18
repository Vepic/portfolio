import { Component, OnDestroy, OnInit } from '@angular/core';
import noUiSlider from "nouislider";
import { SanityService } from 'src/app/services/sanity.service';
import * as AOS from 'aos';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  styles: [
    `
    #image {
      width: 400px;
      height: 400px;
      opacity: 100%;
      background-image: url('assets/img/vedang_bokeh.jpg');
    //   background-image: url('');
      background-repeat: no-repeat;
      background-size: cover;
}
    .testimonial {
      // height: 500px;
      // opacity: 100%;
      // background: #fff;
      // border-radius: 20px;
      // background-image: url('assets/img/square1-red.png');
      // background-repeat: no-repeat;
      // background-size: cover;
}
    `
  ]
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
    AOS.init();
    this.getProjects();
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");
  }

  async getProjects(): Promise<any>  {
    this.projects = await this.sanityService.getProjects();
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
