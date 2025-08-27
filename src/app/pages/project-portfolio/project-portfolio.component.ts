import { Component, computed, OnInit, signal } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';
import { RouterLink } from '@angular/router';

interface ProjectPortfolio {
  id: number;
  projectName: string;
  projectDuration: string;
  projectLocation: string;
  image: string;
  description: string;
}

interface Project {
  id: number;
  title: string;
  location: string;
  category: string;
  year: string;
  description: string;
  image: string;
  status: 'completed' | 'ongoing' | 'planning';
  value: string;
  duration: string;
  client: string;
  tags: string[];
  gallery?: string[];
}

interface ProjectFilter {
  category: string;
  status?: string;
  year?: string;
}

@Component({
  selector: 'app-project-portfolio',
  imports: [
    HeaderComponent,
    FooterComponent,
    CommonModule,
    RouterLink
  ],
  templateUrl: './project-portfolio.component.html',
  styleUrl: './project-portfolio.component.css',
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
  ngOnInit(): void {
    window.scroll(0,0);
  }

  // Grok
  filter: string = 'all';
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

  gridPatternUrl = "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"grid\" width=\"10\" height=\"10\" patternUnits=\"userSpaceOnUse\"><path d=\"M 10 0 L 0 0 0 10\" fill=\"none\" stroke=\"white\" stroke-width=\"0.5\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23grid)\"/></svg>')";

  get uniqueYears(): string[] {
    const years = new Set<string>();
    this.projectPortfolio.forEach(project => {
      const year = project.projectDuration.split(' - ')[0] || project.projectDuration;
      years.add(year);
    });
    return ['all', ...Array.from(years).sort()];
  }

  get filteredProjects(): ProjectPortfolio[] {
    return this.filter === 'all'
      ? this.projectPortfolio
      : this.projectPortfolio.filter(project =>
          project.projectDuration.includes(this.filter)
        );
  }

  setFilter(filter: string): void {
    this.filter = filter;
  }

  trackByProjectId(index: number, project: ProjectPortfolio): number {
    return project.id;
  }

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
    'Industrial',
    'Government'
  ]);

  // Sample projects data
  projects = signal<Project[]>([
    {
      id: 1,
      title: 'Jakarta Smart Office Tower',
      location: 'Jakarta, Indonesia',
      category: 'Commercial',
      year: '2023',
      description: 'A 40-story modern office tower featuring smart building technology, sustainable design, and premium office spaces.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      status: 'completed',
      value: 'Rp 500 Billion',
      duration: '36 months',
      client: 'PT. Modern Development',
      tags: ['High-rise', 'Smart Building', 'LEED Certified', 'Office Tower']
    },
    {
      id: 2,
      title: 'Bali Luxury Resort Complex',
      location: 'Ubud, Bali',
      category: 'Residential',
      year: '2023',
      description: 'Eco-friendly luxury resort featuring 50 villas with traditional Balinese architecture and modern amenities.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      status: 'ongoing',
      value: 'Rp 300 Billion',
      duration: '24 months',
      client: 'Bali Resort Group',
      tags: ['Resort', 'Eco-friendly', 'Luxury', 'Traditional Design']
    },
    {
      id: 3,
      title: 'Surabaya Industrial Complex',
      location: 'Surabaya, East Java',
      category: 'Industrial',
      year: '2022',
      description: 'Large-scale industrial manufacturing facility with modern production lines and worker facilities.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      status: 'completed',
      value: 'Rp 750 Billion',
      duration: '30 months',
      client: 'PT. Indo Manufacturing',
      tags: ['Factory', 'Manufacturing', 'Large Scale', 'Industrial']
    },
    {
      id: 4,
      title: 'Bandung Metro Bridge',
      location: 'Bandung, West Java',
      category: 'Infrastructure',
      year: '2023',
      description: 'Cable-stayed bridge connecting two major districts, designed to reduce traffic congestion.',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=800&q=80',
      status: 'ongoing',
      value: 'Rp 1.2 Trillion',
      duration: '48 months',
      client: 'Ministry of Public Works',
      tags: ['Bridge', 'Infrastructure', 'Public Works', 'Transportation']
    },
    {
      id: 5,
      title: 'Medan Shopping Center',
      location: 'Medan, North Sumatra',
      category: 'Commercial',
      year: '2022',
      description: 'Multi-level shopping center with retail spaces, restaurants, and entertainment facilities.',
      image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=800&q=80',
      status: 'completed',
      value: 'Rp 400 Billion',
      duration: '28 months',
      client: 'Medan Development Corp',
      tags: ['Mall', 'Retail', 'Entertainment', 'Multi-level']
    },
    {
      id: 6,
      title: 'Yogyakarta Government Complex',
      location: 'Yogyakarta, DIY',
      category: 'Government',
      year: '2024',
      description: 'Modern government office complex designed to serve citizens with efficient and transparent services.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      status: 'planning',
      value: 'Rp 200 Billion',
      duration: '18 months',
      client: 'Yogyakarta Provincial Government',
      tags: ['Government', 'Public Service', 'Modern Design', 'Civic Architecture']
    }
  ]);

  // Computed properties
  filteredProjects2 = computed(() => {
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
        p.description.toLowerCase().includes(term) ||
        p.tags.some(tag => tag.toLowerCase().includes(term))
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

  onSortChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.sortBy.set(target.value);
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
        p.description.toLowerCase().includes(term) ||
        p.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }

    return filtered.length;
  }

  openProjectModal(project: Project): void {
    console.log('Opening project modal for:', project.title);
    // In a real app, this would open a detailed modal or navigate to project page
    alert(`Project Details:\n${project.title}\nLocation: ${project.location}\nStatus: ${project.status}`);
  }

  getStatusClass(status: string): string {
    const classes = {
      'completed': 'bg-green-100 text-green-800',
      'ongoing': 'bg-blue-100 text-blue-800',
      'planning': 'bg-yellow-100 text-yellow-800'
    };
    return classes[status as keyof typeof classes] || 'bg-gray-100 text-gray-800';
  }

  trackByProjectId2(index: number, project: Project): number {
    return project.id;
  }
}
