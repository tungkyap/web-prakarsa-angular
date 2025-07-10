import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { TeamMemberComponent } from './pages/team-member/team-member.component';
import { ProjectPortfolioComponent } from './pages/project-portfolio/project-portfolio.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'our-services',
    component: OurServicesComponent
  },
  {
    path: 'team-member',
    component: TeamMemberComponent
  },
  {
    path: 'project-portfolio',
    component: ProjectPortfolioComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  }
];
