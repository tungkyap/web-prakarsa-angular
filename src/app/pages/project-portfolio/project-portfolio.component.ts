import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';
import { Project, ProjectList, projectListData, projectsData } from './project-data';
import { Dialog } from '@angular/cdk/dialog';
import { ProjectModalComponent } from '../../shared/project-modal/project-modal.component';
import {CdkMenu, CdkMenuItem, CdkMenuTrigger} from '@angular/cdk/menu';

interface ProjectPortfolio {
  id: number;
  projectName: string;
  projectDuration: string;
  projectLocation: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-project-portfolio',
  imports: [
    HeaderComponent,
    FooterComponent,
    CommonModule,
    CdkMenuTrigger,
    CdkMenu,
    CdkMenuItem
  ],
  templateUrl: './project-portfolio.component.html',
  styleUrl: './project-portfolio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        query('.group', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
          ]),
        ], { optional: true }),
      ]),
    ]),
  ],

})
export class ProjectPortfolioComponent implements OnInit {
  // A signal to hold the currently selected sort option.
  selectedSortOption = signal<string>('newest');

  // The array of options for the dropdown.
  sortOptions = [
    { value: 'newest', display: 'Newest First' },
    { value: 'oldest', display: 'Oldest First' },
    { value: 'alphabetical', display: 'A-Z' },
  ];

  /**
   * Finds and returns the display text for the current selected value.
   */
  getDisplayValue(): string {
    const selected = this.sortOptions.find(option => option.value === this.selectedSortOption());
    return selected ? selected.display : 'Select an option';
  }
  ngOnInit(): void {
    window.scroll(0,0);
  }

  // Grok
  projectPortfolio: ProjectPortfolio[] = [
    {
      id: 1,
      projectName: 'STMM - MMTC Construction',
      projectDuration: '2023 - 2024',
      projectLocation: 'Yogyakarta, Indonesia',
      image: '/images/project-portfolio/stmm_mmtc_1.png',
      description: 'A landmark construction project for a modern commercial complex, showcasing innovative structural design.'
    },
    {
      id: 2,
      projectName: 'Railway Station Infrastructure Structure Design',
      projectDuration: '2023 - 2024',
      projectLocation: 'Jakarta, Indonesia',
      image: '/images/project-portfolio/railway_station_infrastructure_design.png',
      description: 'Designed critical infrastructure for a high-traffic railway station, enhancing connectivity and safety.'
    },
    {
      id: 3,
      projectName: 'Bespoke Residential Unit, Renovation Project Construction',
      projectDuration: '2023',
      projectLocation: 'Yogyakarta, Indonesia',
      image: '/images/project-portfolio/bespoke_residential_unit.jpeg',
      description: 'Transformed a residential unit with custom renovations, blending modern aesthetics with functionality.'
    },
    {
      id: 4,
      projectName: 'Front One Hotel Pamekasan Construction',
      projectDuration: '2018',
      projectLocation: 'Gresik, Indonesia',
      image: '/images/project-portfolio/front_one_hotel.png',
      description: 'Constructed a boutique hotel with sustainable materials, delivering a premium hospitality experience.'
    },
  ];

  // Claude

  // Signals
  activeFilter = signal('All Projects');
  searchTerm = signal('');
  sortBy = signal('newest');
  displayCount = signal(9);

  // Hero pattern
  heroPatternUrl = "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 60 60\"><defs><pattern id=\"construction\" width=\"60\" height=\"60\" patternUnits=\"userSpaceOnUse\"><rect width=\"60\" height=\"60\" fill=\"none\"/><path d=\"M0 0h20v20H0zm20 20h20v20H20zm20-20h20v20H40z\" fill=\"rgba(255,255,255,0.03)\"/></pattern></defs><rect width=\"100%\" height=\"100%\" fill=\"url(%23construction)\"/></svg>')";

  // Portfolio stats
  portfolioStats = signal([
    { value: '150+', label: 'Completed Projects' },
    { value: '25+', label: 'Years Experience' },
    { value: '50+', label: 'Happy Clients' },
    { value: '15+', label: 'Awards Won' }
  ]);

  // Categories
  categories = signal([
    'All Projects',
    'Residential',
    'Commercial',
    'Infrastructure',
  ]);

  // Sample projects data
  projects = projectsData;

  // Computed properties
  filteredProjects = computed(() => {
    let filtered = this.projects();

    // Filter by category
    if (this.activeFilter() !== 'All Projects') {
      filtered = filtered.filter(p => p.category === this.activeFilter());
    }

    // Filter by search term
    if (this.searchTerm()) {
      const term = this.searchTerm().toLowerCase();
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(term) ||
        p.location.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term)
      );
    }

    // Sort projects
    filtered = [...filtered].sort((a, b) => {
      switch (this.sortBy()) {
        case 'newest':
          return parseInt(b.year) - parseInt(a.year);
        case 'oldest':
          return parseInt(a.year) - parseInt(b.year);
        case 'alphabetical':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    // Limit display count
    return filtered.slice(0, this.displayCount());
  });

  setActiveFilter(category: string): void {
    this.activeFilter.set(category);
    this.displayCount.set(9); // Reset display count when filtering
  }

  onSearchChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm.set(target.value);
    this.displayCount.set(9); // Reset display count when searching
  }

  onSortChange(event: any): void {
    this.selectedSortOption.set(event);
    this.sortBy.set(event);
  }

  resetFilters(): void {
    this.activeFilter.set('All Projects');
    this.searchTerm.set('');
    this.sortBy.set('newest');
    this.displayCount.set(9);
  }

  loadMoreProjects(): void {
    this.displayCount.update(current => current + 6);
  }

  hasMoreProjects(): boolean {
    const totalFilteredCount = this.getFilteredProjectsCount();
    return this.displayCount() < totalFilteredCount;
  }

  private getFilteredProjectsCount(): number {
    let filtered = this.projects();

    if (this.activeFilter() !== 'All Projects') {
      filtered = filtered.filter(p => p.category === this.activeFilter());
    }

    if (this.searchTerm()) {
      const term = this.searchTerm().toLowerCase();
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(term) ||
        p.location.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term)
      );
    }

    return filtered.length;
  }

  private cdkDialog = inject(Dialog);

  openProjectModal(project: Project): void {
    console.log('Opening project modal for:', project.title);
    // In a real app, this would open a detailed modal or navigate to project page
    // alert(`Project Details:\n${project.title}\nLocation: ${project.location}\nStatus: ${project.status}`);

    this.cdkDialog.open(ProjectModalComponent, {data: project});
  }

  getStatusClass(status: string): string {
    const classes = {
      'completed': 'bg-green-100 text-green-800',
      'ongoing': 'bg-blue-100 text-blue-800',
      'planning': 'bg-yellow-100 text-yellow-800'
    };
    return classes[status as keyof typeof classes] || 'bg-gray-100 text-gray-800';
  }

  trackByProjectId(index: number, project: Project): number {
    return project.id;
  }

  // Pagination settings
  private readonly PROJECTS_PER_PAGE = 5;
  currentPage = 1;

  // Single data source for all projects
  projectsList = projectListData;

  // Get projects to display based on current page
  get displayedProjects(): ProjectList[] {
    return this.projectsList.slice(0, this.currentPage * this.PROJECTS_PER_PAGE);
  }

  // Check if there are more projects to load
  get hasMoreProjects2(): boolean {
    return this.displayedProjects.length < this.projectsList.length;
  }

  // Get remaining projects count
  get remainingProjectsCount(): number {
    return this.projectsList.length - this.displayedProjects.length;
  }

  // Computed property to group displayed projects by year dynamically
  get projectsByYear() {
    const grouped = this.displayedProjects.reduce((acc, project) => {
      if (!acc[project.year]) {
        acc[project.year] = [];
      }
      acc[project.year].push(project);
      return acc;
    }, {} as { [key: number]: ProjectList[] });

    // Convert to array and sort by year (newest first)
    return Object.keys(grouped)
      .map(year => ({
        year: parseInt(year),
        projects: grouped[parseInt(year)]
      }))
      .sort((a, b) => b.year - a.year);
  }

  // Load more projects
  loadMore(): void {
    this.currentPage++;
  }

  // Make PROJECTS_PER_PAGE accessible in template
  get projectsPerPage() {
    return this.PROJECTS_PER_PAGE;
  }


}
