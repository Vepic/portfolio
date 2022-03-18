import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Chart from "chart.js";
import { SanityService } from 'src/app/services/sanity.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  project: any = [];
  id: any;
  loading = false;
  constructor( private sanityService: SanityService, private activeRoute: ActivatedRoute) {
    this.id = activeRoute.snapshot.params.id
  }

  imageUrl(source: any) {
    return this.sanityService.urlFor(source);
  }

  ngOnInit() {
    window.scrollTo(0,0);
    this.loading = true;
    this.getProject();
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("landing-page");
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("landing-page");
  }

  async getProject(): Promise<any>  {
    this.project = await this.sanityService.getOneProject(this.id);
    this.project = this.project[0];
    setTimeout(() => {
      this.loading = false;
    }, 2000);
    // return this.project;///
  }
}
