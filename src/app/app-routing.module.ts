import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { MainComponent } from './components/main/main.component';
import { ClientComponent } from './components/client/client.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServicesComponent } from './components/services/services.component';
import { AchievementComponent } from './components/achievement/achievement.component';

const routes: Routes = [
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "portfolio",
    component: PortfolioComponent
  },
  {
    path: "testimonial",
    component: TestimonialComponent
  },
  {
    path: "client",
    component: ClientComponent
  },
  {
    path: "services",
    component: ServicesComponent
  },
  {
    path: "achievement",
    component: AchievementComponent
  },
  {
    path: "main",
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
