import { Component, OnInit, signal } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CommonModule } from '@angular/common';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: string;
  isHighlight?: boolean;
}

interface CompanyValue {
  icon: string;
  title: string;
  description: string;
  color: string;
}

interface CompanyStat {
  value: string;
  label: string;
  description: string;
  icon: string;
}

interface TeamMember {
  name: string;
  position: string;
  description: string;
  image: string;
  linkedin?: string;
}

@Component({
  selector: 'app-about-us',
  imports: [
    HeaderComponent,
    FooterComponent,
    CommonModule,
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit {

  ngOnInit(): void {
    window.scroll(0,0);
    console.log('About component initialized');
    this.animateCounters();
  }

  // Hero pattern
  heroPatternUrl = "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 60 60\"><defs><pattern id=\"construction\" width=\"60\" height=\"60\" patternUnits=\"userSpaceOnUse\"><rect width=\"60\" height=\"60\" fill=\"none\"/><path d=\"M0 0h20v20H0zm20 20h20v20H20zm20-20h20v20H40z\" fill=\"rgba(255,255,255,0.03)\"/></pattern></defs><rect width=\"100%\" height=\"100%\" fill=\"url(%23construction)\"/></svg>')";

  // Timeline data
  timelineEvents = signal<TimelineEvent[]>([
    {
      year: '1999',
      title: 'Foundation as CERTC',
      description: 'Started as Civil Engineering Research and Technology Center, focusing on small-scale residential projects with a team of 5 dedicated engineers.',
      icon: '🏗️',
      isHighlight: true
    },
    {
      year: '2005',
      title: 'First Major Contract',
      description: 'Secured our first major government contract for infrastructure development, marking our entry into large-scale public projects.',
      icon: '🏛️'
    },
    {
      year: '2010',
      title: 'Expansion & Growth',
      description: 'Expanded operations across Java and Sumatra, establishing regional offices and growing our workforce to over 200 professionals.',
      icon: '📈'
    },
    {
      year: '2015',
      title: 'Rebranding to Prakarsa',
      description: 'Transformed into PT Prakarsa, symbolizing our commitment to innovation and taking initiative in sustainable construction practices.',
      icon: '✨',
      isHighlight: true
    },
    {
      year: '2018',
      title: 'ISO Certification',
      description: 'Achieved ISO 9001:2015 certification, reinforcing our commitment to quality management systems and customer satisfaction.',
      icon: '🏆'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Implemented advanced BIM technology and digital project management systems, revolutionizing our construction processes.',
      icon: '💻'
    },
    {
      year: '2023',
      title: 'Sustainable Future',
      description: 'Launched our Green Building Initiative, committing to LEED-certified projects and carbon-neutral construction practices.',
      icon: '🌱',
      isHighlight: true
    }
  ]);

  // Company values
  companyValues = signal<CompanyValue[]>([
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering quality that exceeds expectations and stands the test of time.',
      color: '#c5a751'
    },
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'Honesty and transparency form the foundation of all our relationships with clients, partners, and team members.',
      color: '#334d42'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We embrace cutting-edge technology and innovative construction methods to deliver superior results and efficiency.',
      color: '#2563eb'
    },
    {
      icon: '🛡️',
      title: 'Safety First',
      description: 'The safety of our workers and communities is paramount. We maintain the highest safety standards on every project.',
      color: '#dc2626'
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'We are committed to environmentally responsible construction practices that preserve our planet for future generations.',
      color: '#16a34a'
    },
    {
      icon: '👥',
      title: 'Teamwork',
      description: 'Collaboration and mutual respect drive our success. We believe great achievements come from great teamwork.',
      color: '#9333ea'
    }
  ]);

  // Company statistics
  companyStats = signal<CompanyStat[]>([
    {
      value: '150+',
      label: 'Projects Completed',
      description: 'Successfully delivered projects across residential, commercial, and infrastructure sectors',
      icon: '🏗️'
    },
    {
      value: '25+',
      label: 'Years Experience',
      description: 'Quarter-century of expertise in Indonesian construction and civil engineering industry',
      icon: '📅'
    },
    {
      value: '500+',
      label: 'Skilled Professionals',
      description: 'Talented team of engineers, architects, project managers, and skilled craftsmen',
      icon: '👷'
    },
    {
      value: '98%',
      label: 'Client Satisfaction',
      description: 'Consistently high client satisfaction rates with repeat business and referrals',
      icon: '⭐'
    }
  ]);

  // Leadership team
  leadershipTeam = signal<TeamMember[]>([
    {
      name: 'Budi Santoso',
      position: 'Chief Executive Officer',
      description: 'Leading Prakarsa with 20+ years of industry experience and strategic vision for sustainable growth.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Sari Wijaya',
      position: 'Chief Technology Officer',
      description: 'Driving digital transformation and innovative construction technologies across all our projects.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c-943b2-4416-9f78-59a2a83ef6.jpg?auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Ahmad Rahman',
      position: 'Chief Operations Officer',
      description: 'Ensuring operational excellence and quality delivery across all construction projects nationwide.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80'
    }
  ]);

  trackByYear(index: number, item: TimelineEvent): string {
    return item.year;
  }

  trackByTitle(index: number, item: CompanyValue): string {
    return item.title;
  }

  trackByStatLabel(index: number, item: CompanyStat): string {
    return item.label;
  }

  trackByMemberName(index: number, item: TeamMember): string {
    return item.name;
  }

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  }

  private animateCounters(): void {
    // Counter animation logic can be implemented here
    // This would typically use Intersection Observer to trigger animations
    // when the stats section comes into view
    console.log('Animating counters...');
  }

  // Method to handle CTA actions
  startProject(): void {
    console.log('Start project clicked');
    // Navigate to contact form or project inquiry page
  }

  downloadProfile(): void {
    console.log('Download company profile clicked');
    // Trigger download of company profile PDF
  }
}
