import { Component, computed, signal } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { Router, RouterLink } from '@angular/router';
import { FooterComponent } from '../../shared/footer/footer.component';
import { TeamSwiperComponent } from '../../components/team-swiper/team-swiper.component';
import { CommonModule } from '@angular/common';
import { TypewriterComponent } from "../../components/typewriter/typewriter.component";

export interface ProjectPortfolio {
  id: number;
  projectName: string;
  projectDuration: string;
  projectLocation: string;
  image: string;
}

export interface ContactInfo {
  icon: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterLink,
    TeamSwiperComponent,
    CommonModule,
    TypewriterComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // Signals for reactive state management (Angular 17+ feature)
  private titleTexts = ['Get In Touch', 'Hubungi Kami'];
  private currentTitleIndex = signal(0);
  contactTitle = computed(() => this.titleTexts[this.currentTitleIndex()]);
  isLoading = signal(false);
  dots = signal(Array(5).fill(0));
  isTyping = signal(false);

  // Computed signal for button text
  buttonText = computed(() =>
    this.isLoading() ? 'Loading...' : 'CONTACT US'
  );

  // Contact information data
  contactInfoList = signal<ContactInfo[]>([
    {
      icon: '📞',
      title: 'Phone Number',
      subtitle: '+62 821-1881-2021'
    },
    {
      icon: '✉️',
      title: 'Email Address',
      subtitle: 'consultprakarsa@gmail.com'
    },
    {
      icon: '📍',
      title: 'Office Location',
      subtitle: 'Yogyakarta, Indonesia'
    },
  ]);

  projectPortfolio: ProjectPortfolio[] = [
    {
      id: 1,
      projectName: 'STMM - MMTC Construction',
      projectDuration: '2023 - 2024',
      projectLocation: 'Yogyakarta, Indonesia',
      image: '/images/project-portfolio/stmm_mmtc_1.png'
    },
    {
      id: 2,
      projectName: 'Railway Station Infrastructure Structure Design',
      projectDuration: '2023 - 2024',
      projectLocation: 'Jakarta, Indonesia',
      image: '/images/project-portfolio/railway_station_infrastructure_design.png'
    },
    {
      id: 3,
      projectName: 'Bespoke Residential Unit, Renovation Project Construction',
      projectDuration: '2023',
      projectLocation: 'Yogyakarta, Indonesia',
      image: '/images/project-portfolio/bespoke_residential_unit.jpeg'
    },
    {
      id: 4,
      projectName: 'Front One Hotel Pamekasan Construction',
      projectDuration: '2018',
      projectLocation: 'Gresik, Indonesia',
      image: '/images/project-portfolio/front_one_hotel.png'
    },
  ];

  constructor(private router: Router) {}

  trackByProjectId(index: number, project: ProjectPortfolio): number {
    return project.id;
  }

  // SVG pattern URL and background image
  gridPatternUrl = "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"grid\" width=\"10\" height=\"10\" patternUnits=\"userSpaceOnUse\"><path d=\"M 10 0 L 0 0 0 10\" fill=\"none\" stroke=\"white\" stroke-width=\"0.5\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23grid)\"/></svg>')";

  // Background image URL - you can replace this with your own image
  backgroundImageUrl = "url('/images/project-portfolio/stmm_mmtc_3.png')";

  handleContactClick(): void {
    if (this.isLoading()) return;

    this.isLoading.set(true);
    this.router.navigateByUrl('/contact-us');

    // Simulate API call or navigation
    setTimeout(() => {
      this.isLoading.set(false);
      // this.openContactModal();
    }, 2000);
  }

  // TrackBy function for *ngFor optimization
  trackByFn(index: number, item: ContactInfo): string {
    return item.title;
  }

  // Method to update contact info (example of signal mutation)
  updateContactInfo(newInfo: ContactInfo[]): void {
    this.contactInfoList.set(newInfo);
  }

  // Method to toggle loading state
  toggleLoading(): void {
    this.isLoading.update(current => !current);
  }

}
