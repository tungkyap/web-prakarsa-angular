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

  // From Claude
  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'John Smith',
      position: 'Senior Civil Engineer',
      department: 'Engineering',
      image: 'assets/images/team/john-smith.jpg',
      bio: 'John brings over 15 years of experience in infrastructure development and has led numerous high-profile construction projects.',
      email: 'john.smith@prakarsa.com',
      linkedin: 'https://linkedin.com/in/johnsmith',
      experience: '15+ Years',
      specialties: ['Infrastructure Design', 'Project Management', 'Structural Analysis']
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Project Manager',
      department: 'Management',
      image: 'assets/images/team/sarah-johnson.jpg',
      bio: 'Sarah specializes in coordinating complex construction projects and ensuring timely delivery while maintaining quality standards.',
      email: 'sarah.johnson@prakarsa.com',
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      experience: '12+ Years',
      specialties: ['Project Coordination', 'Quality Control', 'Team Leadership']
    },
    {
      id: 3,
      name: 'Michael Chen',
      position: 'Structural Engineer',
      department: 'Engineering',
      image: 'assets/images/team/michael-chen.jpg',
      bio: 'Michael is an expert in structural design and analysis with a focus on sustainable construction practices.',
      email: 'michael.chen@prakarsa.com',
      experience: '10+ Years',
      specialties: ['Structural Design', 'Sustainability', 'CAD Modeling']
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      position: 'Environmental Consultant',
      department: 'Consulting',
      image: 'assets/images/team/emily-rodriguez.jpg',
      bio: 'Emily ensures all projects meet environmental regulations and implements eco-friendly construction solutions.',
      email: 'emily.rodriguez@prakarsa.com',
      experience: '8+ Years',
      specialties: ['Environmental Impact', 'Regulatory Compliance', 'Green Building']
    },
    {
      id: 5,
      name: 'David Wilson',
      position: 'Site Supervisor',
      department: 'Operations',
      image: 'assets/images/team/david-wilson.jpg',
      bio: 'David oversees on-site operations and ensures safety protocols are followed throughout the construction process.',
      email: 'david.wilson@prakarsa.com',
      experience: '18+ Years',
      specialties: ['Site Management', 'Safety Compliance', 'Quality Assurance']
    },
    {
      id: 6,
      name: 'Lisa Thompson',
      position: 'Design Architect',
      department: 'Design',
      image: 'assets/images/team/lisa-thompson.jpg',
      bio: 'Lisa creates innovative architectural designs that blend functionality with aesthetic appeal.',
      email: 'lisa.thompson@prakarsa.com',
      experience: '11+ Years',
      specialties: ['Architectural Design', '3D Modeling', 'Urban Planning']
    }
  ];

  departments: string[] = ['All', 'Engineering', 'Management', 'Consulting', 'Operations', 'Design'];
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
