import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Chart from "chart.js";
import { PlyrComponent } from 'ngx-plyr';
import Plyr from 'plyr';
import { SanityService } from 'src/app/services/sanity.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  project: any = [];
  id: any;
  loading = false;

  @ViewChild(PlyrComponent, { static: true })
  plyr: PlyrComponent;
  player: Plyr;

  arr = [
    //   [
    //   {
    //     provider: "youtube",
    //     src: "https://www.youtube.com/watch?v=aJOTlE1K90k"
    //   }
    // ]
  ]


  constructor(private sanityService: SanityService, private activeRoute: ActivatedRoute , private change: ChangeDetectorRef) {
    this.id = activeRoute.snapshot.params.id
  }

  imageUrl(source: any) {
    return this.sanityService.urlFor(source);
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.loading = true;
    this.getProject();
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("landing-page");
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("landing-page");
  }

  async getProject(): Promise<any> {
    this.project = await this.sanityService.getOneProject(this.id);
    this.project = this.project[0];
    if (this.project.href !== null) {
     this.arr.push( [
        {
          provider: "youtube",
          src: this.project.href
        }
      ])
    }
    setTimeout(() => {
      this.loading = false;
    }, 2000);
    this.change.detectChanges();
    // return this.project;///
  }


  played(event: Plyr.PlyrEvent) {
    // console.log('played', event);
  }

  play(): void {
    this.player.play(); // or this.plyr.player.play()
  }

  pause(): void {
    this.player.pause(); // or this.plyr.player.play()
  }

  stop(): void {
    this.player.stop(); // or this.plyr.player.stop()
  }
}
