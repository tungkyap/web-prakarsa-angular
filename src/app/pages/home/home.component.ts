import { Component, computed, inject, signal } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { Router, RouterLink } from '@angular/router';
import { FooterComponent } from '../../shared/footer/footer.component';
import { TeamSwiperComponent } from '../../components/team-swiper/team-swiper.component';
import { CommonModule } from '@angular/common';
import { TypewriterComponent } from "../../components/typewriter/typewriter.component";
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Dialog } from '@angular/cdk/dialog';
import { ContactModalComponent } from '../../shared/contact-modal/contact-modal.component';
import { ProjectModalComponent } from '../../shared/project-modal/project-modal.component';
import { LogoSliderComponent } from "../../components/logo-slider/logo-slider.component";

export interface ProjectPortfolio {
  id: number;
  projectName: string;
  projectDuration: string;
  projectLocation: string;
  image: string;
  description?: string;
  status?: 'Completed' | 'Ongoing';
  client?: string;
  scopes?: string[],
  technologies?: string[];
  progress?: number;
  images?: string[]; // Support multiple images
}

export interface ContactInfo {
  icon: string;
  title: string;
  subtitle: string;
}

// New interfaces for Clients and Stats
export interface Client {
  id: number;
  name: string;
  subtext: string;
  isHighlighted: boolean; // To toggle between #c5a751 and #334d42
}

export interface QuickStat {
  id: number;
  value: string;
  label: string;
}

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterLink,
    TeamSwiperComponent,
    CommonModule,
    TypewriterComponent,
    MatDialogModule,
    MatIconModule,
    LogoSliderComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private cdkDialog = inject(Dialog);
  protected openContactModal() {
    this.cdkDialog.open(ContactModalComponent);
  }
  protected openProjectModal(project: ProjectPortfolio) {
    this.cdkDialog.open(ProjectModalComponent, {data: project});
  }

  // Signals for reactive state management (Angular 17+ feature)
  private titleTexts = ['Get In Touch', 'Hubungi Kami'];
  private currentTitleIndex = signal(0);
  contactTitle = computed(() => this.titleTexts[this.currentTitleIndex()]);
  isLoading = signal(false);
  dots = signal(Array(5).fill(0));
  isTyping = signal(false);

  isProjectModalOpen = signal(false);
  selectedProject = signal<ProjectPortfolio | undefined>(undefined);

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
      image: '/images/project-portfolio/stmm_mmtc_1.png',
      description: 'In the construction project of the STMM - MMTC Building (November 2023 – October 2024), Prakarsa served as a site engineer, responsible for managing work schedules, ensuring smooth construction progress, conducting daily evaluations, and preparing both shop drawings and as-built drawings.',
      status: 'Completed',
      client: 'Kemenkominfo',
      scopes: ['Construction', 'Construction Supervision'],
      technologies: ['Concrete Framework', 'Green Building Tech'],
      progress: 100,
      images: [
        '/images/project-portfolio/stmm_mmtc_1.png',
        '/images/project-portfolio/stmm_mmtc_2.jpeg',
        '/images/project-portfolio/stmm_mmtc_3.png',
        '/images/project-portfolio/stmm_mmtc_4.png',
        '/images/project-portfolio/stmm_mmtc_5.png',
      ],
    },
    {
      id: 2,
      projectName: "Railway Station Infrastructure Structure Design",
      projectDuration: "2023 - 2024",
      projectLocation: "Jakarta, Indonesia",
      image: "/images/project-portfolio/railway_station_infrastructure_design.png",
      description: "Prakarsa is an experienced structural engineering consultant specializing in building design, including strategic projects such as the new building development at Tanah Abang Station, Jakarta. From October 2023 to March 2024, Prakarsa was entrusted with the structural planning, which included structural calculations based on the architectural design and the preparation of efficient and economical Detailed Engineering Design (DED) drawings for both the superstructure and substructure.",
      status: "Completed",
      client: "PT. Kereta Api Indonesia",
      scopes: ['Detailed Engineering Design'],
      technologies: ["Steel Framing", "Structural Analysis Software", "BIM"],
      progress: 85,
      images: [
        "/images/project-portfolio/railway_station_infrastructure_design.png",
        "/images/project-portfolio/railway_station_infrastructure_design_2.png",
        "/images/project-portfolio/railway_station_infrastructure_design_3.png",
        "/images/project-portfolio/railway_station_infrastructure_design_4.png",
        "/images/project-portfolio/railway_station_infrastructure_design_5.png",
        "/images/project-portfolio/railway_station_infrastructure_design_6.png",
      ]
    },
    {
      id: 3,
      projectName: "Bespoke Residential Unit, Renovation Project Construction",
      projectDuration: "2023",
      projectLocation: "Yogyakarta, Indonesia",
      image: "/images/project-portfolio/bespoke_residential_unit_3.jpeg",
      description: "Our role encompassed end-to-end construction engineering and supervision. We began by assessing the existing building and designing safe, efficient structural modifications. On-site, our team provided meticulous construction supervision to ensure that every detail of the bespoke design was executed with precision and the highest standards of quality.",
      status: "Completed",
      client: "Personal Private Client",
      scopes: ['Construction', 'Design', 'Build'],
      technologies: ["Interior Design", "Custom Cabinetry", "Smart Home Integration"],
      progress: 100,
      images: [
        "/images/project-portfolio/bespoke_residential_unit_3.jpeg",
        "/images/project-portfolio/bespoke_residential_unit_1.jpeg",
        "/images/project-portfolio/bespoke_residential_unit_2.jpeg",
      ]
    },
    {
      id: 4,
      projectName: "Front One Hotel Pamekasan & Gresik Construction",
      projectDuration: "2018",
      projectLocation: "Pamekasan & Gresik, Indonesia",
      image: "/images/project-portfolio/front_one_hotel.png",
      description: "Our scope covered the project's critical engineering phases. We conducted a comprehensive structural analysis to ensure the 9-story building's integrity and safety, followed by meticulous on-site construction supervision to guarantee all work adhered to the approved designs and highest quality standards.",
      status: "Completed",
      client: "Front One Hotels",
      scopes: ['Engineering', 'Structural Analysis', 'Construction Supervision'],
      technologies: ["Reinforced Concrete", "HVAC Systems", "Facade Installation"],
      progress: 100,
      images: [
        "/images/project-portfolio/front_one_hotel.png",
        "/images/project-portfolio/front_one_hotel_1.png",
        "/images/project-portfolio/front_one_hotel_2.png",
      ]
    }
  ];

  // Dynamic Clients Data
  clients = signal<Client[]>([
    { id: 1, name: 'KEMPU', subtext: 'Kementerian PUPR', isHighlighted: false },
    { id: 2, name: 'PEMDA', subtext: 'Yogyakarta', isHighlighted: false },
    { id: 3, name: 'PT ADHI', subtext: 'Karya', isHighlighted: true },
    { id: 4, name: 'WIKA', subtext: 'Construction', isHighlighted: false },
    { id: 5, name: 'UGM', subtext: 'Universitas', isHighlighted: false },
    { id: 6, name: 'UII', subtext: 'Yogyakarta', isHighlighted: true },
  ]);

  // Dynamic Quick Stats Data
  quickStats = signal<QuickStat[]>([
    { id: 1, value: '50+', label: 'Happy Clients' },
    { id: 2, value: '50+', label: 'Projects Done' },
    { id: 3, value: '30+', label: 'Years Experience' },
    { id: 4, value: '10+', label: 'Team Members' },
  ]);

  constructor(
    private router: Router,
  ) {
    window.scroll(0,0);
  }

  trackByProjectId(index: number, project: ProjectPortfolio): number {
    return project.id;
  }

  // SVG pattern URL and background image
  gridPatternUrl = "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"grid\" width=\"10\" height=\"10\" patternUnits=\"userSpaceOnUse\"><path d=\"M 10 0 L 0 0 0 10\" fill=\"none\" stroke=\"white\" stroke-width=\"0.5\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23grid)\"/></svg>')";

  // Background image URL - you can replace this with your own image
  backgroundImageUrl = "url('/images/project-portfolio/stmm_mmtc_3.png')";

  handleContactClick(): void {
    if (this.isLoading()) return;

    this.isLoading.set(false);
    this.openContactModal();

    // Simulate API call or navigation
    // setTimeout(() => {
    // }, 2000);
  }

  onViewFullProject(projectId: number): void {
    this.router.navigate(['/project', projectId]);
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
