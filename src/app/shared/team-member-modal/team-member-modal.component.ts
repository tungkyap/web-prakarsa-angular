import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-project-modal',
  imports: [CommonModule],
  templateUrl: './team-member-modal.component.html',
  styleUrl: './team-member-modal.component.css',
})
export class TeamMemberModalComponent {
  private dialogRef = inject(DialogRef);
  data = inject(DIALOG_DATA);

  closeModal() {
    this.dialogRef.close();
  }

}
