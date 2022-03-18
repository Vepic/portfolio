import { Component, OnDestroy, OnInit } from '@angular/core';
import Chart from "chart.js";
import { SanityService } from 'src/app/services/sanity.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-illustrator',
  templateUrl: './illustrator.component.html',
  styleUrls: ['./illustrator.component.scss']
})
export class IllustratorComponent implements OnInit, OnDestroy {
  projects: any = [];
  isCollapsed = true;
  loading = false;

  constructor( private sanityService: SanityService) {}

  imageUrl(source: any) {
    return this.sanityService.urlFor(source);
  }

  ngOnInit() {
    AOS.init();
    window.scrollTo(0,0);
    this.loading = true;
    this.getProjects();
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("landing-page");
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("landing-page");
  }

  async getProjects(): Promise<any>  {
    this.projects = await this.sanityService.getProjects();
    this.projects = this.projects.filter(p => { return p.projectType == 'adobeIllustrator' });
    setTimeout(() => {
      this.loading = false;
    }, 2000);
    return this.projects;
  }
}
