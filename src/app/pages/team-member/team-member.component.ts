import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CommonModule, ViewportScroller } from '@angular/common';
import { Router, Scroll } from '@angular/router';
import { filter, map } from 'rxjs';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  department: string;
  image: string;
  bio: string;
  email?: string;
  linkedin?: string;
  experience: string;
  specialties: string[];
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

  juniorMembers = [
    { id: 1, name: 'Komang Ari Switara', role: 'Construction engineering & supervision, logistics planning & management', level: 'Junior', position: 'Logistic', image: '/images/team-member-profile/komang.jpeg'  },
    // { id: 2, name: 'Andhika Pratama', role: 'Construction engineering & supervision, drafting', level: 'Junior', position: 'Engineer' },
    { id: 4, name: 'Muhammad Luqmanul Hakim', role: 'Civil engineering & architectural drafting', level: 'Junior', position: 'Drafter', image: '/images/team-member-profile/muhammad.jpeg' },
    { id: 2, name: 'Achmat Syakur Nuranto', role: 'Construction logistics & support', level: 'Junior', position: 'Logistic', image: '/images/team-member-profile/achmat.jpeg' },
    { id: 5, name: 'Ripki Aji Permana', role: 'Civil engineering & architectural drafting', level: 'Junior', position: 'Drafter', image: '/images/team-member-profile/ripki.jpeg' },
    { id: 3, name: 'Ryan Muhammad Fajar', role: 'Construction logistics & support', level: 'Junior', position: 'Logistic', image: '/images/team-member-profile/ryan.jpeg' },
  ];

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
      image: '/images/team-member-profile/joko_sumiyanto.jpeg',
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
      image: '/images/team-member-profile/kemal_fardianto_zoom.png',
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
      image: '/images/team-member-profile/gatra_dewa_oktananda.jpeg',
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
      image: '/images/team-member-profile/mochammad_murtadlo_najib_zoom.png',
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
      image: '/images/team-member-profile/arif_tri_wijayanto_zoom.png',
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
      image: '/images/team-member-profile/irkhas_bayu_faveryan_zoom2.png',
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
      image: '/images/team-member-profile/tsalitsatul_husna_zoom.png',
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


}
