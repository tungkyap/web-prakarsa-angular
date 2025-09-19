import { Component, inject } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-modal',
  imports: [],
  templateUrl: './contact-modal.component.html',
  styleUrl: './contact-modal.component.css'
})
export class ContactModalComponent {
  constructor(private router: Router) {}

  private dialogRef = inject(DialogRef, { optional: true });
  protected closeModal() {
    this.dialogRef?.close();
  }

  protected redirectToContactUs() {
    this.dialogRef?.close();
    this.router.navigate(['/contact-us']).then(() => {
      window.scroll(0,0);
    });
  }
}
