import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Chart from "chart.js";
import { SanityService } from 'src/app/services/sanity.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-after-effects',
  templateUrl: './after-effects.component.html',
  styleUrls: ['./after-effects.component.scss']
})
export class AfterEffectsComponent implements OnInit, OnDestroy {
  projects: any = [];
  isCollapsed = true;
  loading = false;
  constructor( private sanityService: SanityService, private activeRoute: ActivatedRoute) {
  }

  imageUrl(source: any) {
    return this.sanityService.urlFor(source);
  }

  ngOnInit() {
    AOS.init();
    this.loading = true;
    window.scrollTo(0,0);
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
    this.projects = this.projects.filter(p => { return p.projectType == 'afterEffects' });
    setTimeout(() => {
      this.loading = false;
    }, 2000);
    return this.projects;
  }
}
