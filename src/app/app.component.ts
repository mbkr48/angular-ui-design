import { Component } from '@angular/core';

import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { ClientComponent } from './components/client/client.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { AchievementComponent } from './components/achievement/achievement.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  components:any = {
    "main": MainComponent,
    "about": AboutComponent,
    "client": ClientComponent,
    "contact": ContactComponent,
    "services": ServicesComponent,
    "portfolio": PortfolioComponent,
    "achievement": AchievementComponent,
    "testimonial": TestimonialComponent,
    "remove": null
  };

  currentComponent:any;

  handleSearch(value: string) {
    if (this.components.hasOwnProperty(value)) {
      this.currentComponent = this.components[value];
    }
  }
}
