import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { Dialog } from '@angular/cdk/dialog';
import { TeamMemberModalComponent } from '../../shared/team-member-modal/team-member-modal.component';

// Unused
interface TeamMember {
  id: number;
  name: string;
  position: string;
  department: string;
  image: string;
  hoverImage: string;
  bio: string;
  email?: string;
  linkedin?: string;
  experience: string;
  specialties: string[];
}

export interface TeamMember2 {
  id: number;
  name: string;
  position: string;
  image?: string;
  hoverImage?: string;
  department: string;
  description?: string;
}

export interface Department {
  name: string;
  members: TeamMember2[];
}

@Component({
  selector: 'app-team-member',
  imports: [
    HeaderComponent,
    FooterComponent,
    CommonModule
  ],
  templateUrl: './team-member.component.html',
  styleUrl: './team-member.component.css'
})
export class TeamMemberComponent implements OnInit {

  ngOnInit(): void {
    window.scroll(0,0);
  }

  // Unused
  juniorMembers = [
    { id: 1, name: 'Komang Ari Switara', role: 'Construction engineering & supervision, logistics planning & management', level: 'Junior', position: 'Logistic', image: '/images/team-member-profile/komang.jpeg'  },
    // { id: 2, name: 'Andhika Pratama', role: 'Construction engineering & supervision, drafting', level: 'Junior', position: 'Engineer' },
    { id: 4, name: 'Muhammad Luqmanul Hakim', role: 'Civil engineering & architectural drafting', level: 'Junior', position: 'Drafter', image: '/images/team-member-profile/muhammad.jpeg' },
    { id: 2, name: 'Achmat Syakur Nuranto', role: 'Construction logistics & support', level: 'Junior', position: 'Logistic', image: '/images/team-member-profile/achmat.jpeg' },
    { id: 5, name: 'Ripki Aji Permana', role: 'Civil engineering & architectural drafting', level: 'Junior', position: 'Drafter', image: '/images/team-member-profile/ripki.jpeg' },
    { id: 3, name: 'Ryan Muhammad Fajar', role: 'Construction logistics & support', level: 'Junior', position: 'Logistic', image: '/images/team-member-profile/ryan.jpeg' },
  ];

  // Unused
  deliveryPartners = [
    { id: 1, name: 'Fariz Rachmana Putra', specialty: 'Architect' },
    { id: 2, name: 'I Made Sudirawan', specialty: 'Mechanical, Electrical, & Plumbing Engineer' },
    { id: 3, name: 'Holly Bilowo', specialty: 'Hydrologic engineering' }
  ];

  // From Claude
  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Joko Sumiyanto',
      position: 'Founder | Director of Engineering',
      department: 'Technical',
      image: '/images/team-member-profile/joko_sumiyanto.jpg',
      hoverImage: '/images/team-member-profile/joko_sumiyanto_hover.jpg',
      bio: 'Joko Sumiyanto is the founder of Prakarsa and brings over 30 years of experience in structural engineering, forensic engineering, construction supervision, concrete materials.',
      email: 'john.smith@prakarsa.com',
      linkedin: 'https://linkedin.com/in/johnsmith',
      experience: '30+ Years',
      specialties: ['Structural Engineering', 'Forensic Engineering', 'Construction Supervision', 'Concrete Materials']
    },
    {
      id: 2,
      name: 'Kemal Fardianto',
      position: 'Engineer | Director of Operations & Business Development',
      department: 'Technical',
      image: '/images/team-member-profile/kemal_fardianto.jpg',
      hoverImage: '/images/team-member-profile/kemal_fardianto_hover.jpg',
      bio: 'Kemal Fardianto specializes in in transportation engineering, planning & financing engineering economics.',
      email: 'sarah.johnson@prakarsa.com',
      linkedin: '/images/team-member-profile/kemal_fardianto_zoom.png',
      experience: '5+ Years',
      specialties: ['Transportation Engineering', 'Planning & Financing Engineering', 'Planning & Financing Engineering Economics']
    },
    {
      id: 3,
      name: 'Gatra Dewa Oktananda',
      position: 'Engineer | Head of Research & Development',
      department: 'Technical',
      image: '/images/team-member-profile/gatra_dewa_oktananda.jpg',
      hoverImage: '/images/team-member-profile/gatra_dewa_oktananda_hover.jpg',
      bio: 'Gatra Dewa Oktananda is an expert in structural engineering, construction engineering & supervision, concrete materials, project logistics & planning.',
      email: 'michael.chen@prakarsa.com',
      experience: '5+ Years',
      specialties: ['Structural Engineering', 'Construction Engineering', 'Supervision', 'Concrete Materials', 'Project Logistics & Planning']
    },
    {
      id: 4,
      name: 'Mochammad Murtadlo Najib',
      position: 'Engineer | Head of Construction',
      department: 'Technical',
      image: '/images/team-member-profile/mochammad_murtadlo_najib.jpg',
      hoverImage: '/images/team-member-profile/mochammad_murtadlo_najib_hover.jpg',
      bio: 'Mochammad Murtadlo Najib is an expert in construction engineering & supervision, project management, logistics & supervision, cost estimator.',
      email: 'emily.rodriguez@prakarsa.com',
      experience: '10+ Years',
      specialties: ['Construction Engineering', 'Supervision', 'Project Management', 'Logistics', 'Cost Estimator']
    },
    {
      id: 5,
      name: 'Arif Tri Wijayanto',
      position: 'Engineer | Head of Drafting',
      department: 'Technical',
      image: '/images/team-member-profile/arif_tri_wijayanto.jpg',
      hoverImage: '/images/team-member-profile/arif_tri_wijayanto_hover.jpg',
      bio: 'Arif Tri Wijayanto is an expert in engineering drafting, construction engineering, project management, cost estimator.',
      email: 'david.wilson@prakarsa.com',
      experience: '10+ Years',
      specialties: ['Engineering Drafting', 'Construction Engineering', 'Project Management', 'Cost Estimator']
    },
    {
      id: 6,
      name: 'Irkhas Bayu Faveryan',
      position: 'Academic Engineering Partner | Research & Development',
      department: 'Support',
      image: '/images/team-member-profile/irkhas_bayu_faveryan.jpg',
      hoverImage: '/images/team-member-profile/irkhas_bayu_faveryan_hover.jpg',
      bio: 'Irkhas Bayu Faveryan is an expert in structural engineering, numerical analysis & modeling, building information modeling (BIM).',
      email: 'lisa.thompson@prakarsa.com',
      experience: '5+ Years',
      specialties: ['Architectural Design', '3D Modeling', 'Urban Planning']
    },
    {
      id: 6,
      name: 'Tsalitsatul Husna',
      position: 'Engineer | Research & Development',
      department: 'Support',
      image: '/images/team-member-profile/tsalitsatul_husna.jpg',
      hoverImage: '/images/team-member-profile/tsalitsatul_husna_hover.jpg',
      bio: 'Tsalitastul Husna is an expert in hydrologic engineering, administrator',
      email: 'lisa.thompson@prakarsa.com',
      experience: '10+ Years',
      specialties: ['Hydrologic Engineering', 'Administrator']
    }
  ];

  departments: string[] = ['All', 'Technical', 'Support'];
  selectedDepartment: string = 'All';

  get filteredMembers(): TeamMember[] {
    if (this.selectedDepartment === 'All') {
      return this.teamMembers;
    }
    return this.teamMembers.filter(member => member.department === this.selectedDepartment);
  }

  filterByDepartment(department: string): void {
    this.selectedDepartment = department;
  }

  openLinkedIn(url: string): void {
    if (url) {
      window.open(url, '_blank');
    }
  }

  sendEmail(email: string): void {
    if (email) {
      window.location.href = `mailto:${email}`;
    }
  }

  trackByMemberId(index: number, team: TeamMember): number {
    return team.id;
  }

  // End Claude

  // Grok: New Design

  departments2: Department[] = [
    {
      name: 'Director of Engineering',
      members: [
        {
          id: 1,
          name: 'Joko Sumiyanto',
          position: 'Founder',
          image: '/images/team-member-profile/joko_sumiyanto.jpg',
          hoverImage: '/images/team-member-profile/joko_sumiyanto_hover.jpg',
          department: 'Director of Engineering',
          description:
            'Founder of Prakarsa with over 30 years of experience in structural engineering, forensic engineering, construction supervision, and concrete materials.'
        },
      ],
    },
    {
      name: 'Director of Operations & Business Development',
      members: [
        {
          id: 2,
          name: 'Kemal Fardianto',
          position: 'Engineer',
          image: '/images/team-member-profile/kemal_fardianto.jpg',
          hoverImage: '/images/team-member-profile/kemal_fardianto_hover.jpg',
          department: 'Director of Operations & Business Development',
          description:
            'Specializes in transportation engineering, planning and financing engineering economics.'
        },
      ],
    },
    {
      name: 'Head of Research & Development',
      members: [
        {
          id: 3,
          name: 'Gatra Dewa Oktananda',
          position: 'Engineer',
          image: '/images/team-member-profile/gatra_dewa_oktananda.jpg',
          hoverImage: '/images/team-member-profile/gatra_dewa_oktananda_hover.jpg',
          department: 'Head of Research & Development',
          description:
            'Expert in structural engineering, construction engineering and supervision, concrete materials, project logistics and planning.'
        },
        {
          id: 7,
          name: 'Tsalitsatul Husna',
          position: 'Engineer',
          image: '/images/team-member-profile/tsalitsatul_husna.jpg',
          hoverImage: '/images/team-member-profile/tsalitsatul_husna_hover.jpg',
          department: 'Head of Research & Development',
          description:
            'Expert in hydrologic engineering and administration.'
        },
        {
          id: 6,
          name: 'Irkhas Bayu Faveryan',
          position: 'Academic Engineering Partner',
          image: '/images/team-member-profile/irkhas_bayu_faveryan.jpg',
          hoverImage: '/images/team-member-profile/irkhas_bayu_faveryan_hover.jpg',
          department: 'Head of Research & Development',
          description:
            'Expert in structural engineering, numerical analysis and modeling, and building information modeling (BIM).'
        },
      ],
    },
    {
      name: 'Head of Construction',
      members: [
        {
          id: 4,
          name: 'Mochammad Murtadlo Najib',
          position: 'Engineer',
          image: '/images/team-member-profile/mochammad_murtadlo_najib.jpg',
          hoverImage: '/images/team-member-profile/mochammad_murtadlo_najib_hover.jpg',
          department: 'Head of Construction',
          description:
            'Expert in construction engineering and supervision, project management, logistics, and cost estimation.'
        },
      ],
    },
    {
      name: 'Head of Drafting',
      members: [
        {
          id: 5,
          name: 'Arif Tri Wijayanto',
          position: 'Engineer',
          image: '/images/team-member-profile/arif_tri_wijayanto.jpg',
          hoverImage: '/images/team-member-profile/arif_tri_wijayanto_hover.jpg',
          department: 'Head of Drafting',
          description:
            'Expert in engineering drafting, construction engineering, project management, and cost estimation.'
        },
      ],
    },
    {
      name: 'Supervisor, Logistic & Drafter',
      members: [
        {
          id: 1,
          name: 'Komang Ari Switara',
          position: 'Site Engineer',
          image: '/images/team-member-profile/komang.jpg',
          hoverImage: '/images/team-member-profile/komang_hover.jpg',
          department: 'Supervisor,Logistic & Drafter',
          description:
            'Focused on construction engineering and supervision, logistics planning and management.'
        },
        {
          id: 2,
          name: 'Muhammad Luqmanul Hakim',
          position: 'Drafter',
          image: '/images/team-member-profile/luqman.jpg',
          hoverImage: '/images/team-member-profile/luqman_hover.jpg',
          department: 'Supervisor,Logistic & Drafter',
          description:
            'Specializes in civil engineering and architectural drafting.'
        },
        {
          id: 3,
          name: 'Achmat Syakur Nuranto',
          position: 'Logistic',
          image: '/images/team-member-profile/achmat.jpg',
          hoverImage: '/images/team-member-profile/achmat_hover.jpg',
          department: 'Supervisor,Logistic & Drafter',
          description:
            'Provides support in construction logistics and operations.'
        },
        {
          id: 4,
          name: 'Ripki Aji Permana',
          position: 'Drafter',
          image: '/images/team-member-profile/ripki.jpg',
          hoverImage: '/images/team-member-profile/ripki_hover.jpg',
          department: 'Supervisor,Logistic & Drafter',
          description:
            'Specializes in civil engineering and architectural drafting.'
        },
        {
          id: 5,
          name: 'Ryan Muhammad Fajar',
          position: 'Logistic',
          image: '/images/team-member-profile/ryan.jpg',
          hoverImage: '/images/team-member-profile/ryan_hover.jpg',
          department: 'Supervisor,Logistic & Drafter',
          description:
            'Supports construction logistics and management operations.'
        },
      ],
    },
    {
      name: 'Project Delivery Partners',
      members: [
        {
          id: 1,
          name: 'Fariz Rachmana Putra',
          position: 'Partner',
          image: '',
          department: 'Project Delivery Partners',
          description: 'Architect and design partner.'
        },
        {
          id: 2,
          name: 'I Made Sudirawan',
          position: 'Partner',
          image: '',
          department: 'Project Delivery Partners',
          description: 'Mechanical, electrical, and plumbing engineering partner.'
        },
        {
          id: 3,
          name: 'Holly Bilowo',
          position: 'Partner',
          image: '',
          department: 'Project Delivery Partners',
          description: 'Hydrologic engineering partner.'
        },
      ],
    },
  ];


  private cdkDialog = inject(Dialog);

  onViewMemberDetail(member: TeamMember2) {

    this.cdkDialog.open(TeamMemberModalComponent, {data: member});
  }

  // End of Grok



}
