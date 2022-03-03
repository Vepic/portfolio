import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./pages/index/index.component";
import { ProfilepageComponent } from "./pages/examples/profilepage/profilepage.component";
import { RegisterpageComponent } from "./pages/examples/registerpage/registerpage.component";
import { LandingpageComponent } from "./pages/examples/landingpage/landingpage.component";
import { PortfolioComponent } from "./pages/portfolio/portfolio.component";
import { IllustratorComponent } from "./pages/illustrator/illustrator.component";
import { AfterEffectsComponent } from "./pages/after-effects/after-effects.component";
import { BlenderComponent } from "./pages/blender/blender.component";
import { ProjectDetailsComponent } from "./pages/project-details/project-details.component";

const routes: Routes = [
  { path: "", redirectTo: "portfolio", pathMatch: "full" },
  { path: "home", component: IndexComponent },
  { path: "profile", component: ProfilepageComponent },
  { path: "register", component: RegisterpageComponent },
  { path: "landing", component: LandingpageComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "portfolio/adobe-illustrator", component: IllustratorComponent },
  { path: "portfolio/after-effects", component: AfterEffectsComponent },
  { path: "portfolio/blender", component: BlenderComponent },
  { path: "project/:id", component: ProjectDetailsComponent },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule {}
