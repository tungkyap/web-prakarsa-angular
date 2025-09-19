import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TeamMember } from '../../components/team-swiper/team-swiper.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-detail-modal',
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
  ],
  templateUrl: './member-modal.component.html',
  styleUrl: './member-modal.component.css'
})
export class MemberModalComponent {
  constructor(
    public dialogRef: MatDialogRef<MemberModalComponent>,
    @Inject(MAT_DIALOG_DATA) public member: TeamMember
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }

  onSocialClick(platform: string, link: string, event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    if (platform === 'email') {
      window.location.href = `mailto:${link}`;
    } else if (platform === 'whatsapp') {
      window.open(`https://wa.me/${link}`, '_blank');
    } else {
      window.open(link, '_blank');
    }
  }
}
