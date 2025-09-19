import { CommonModule } from '@angular/common';
import { Component, computed, inject, Inject, signal } from '@angular/core';
import { ProjectPortfolio } from '../../pages/home/home.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { animate, style, transition, trigger } from '@angular/animations';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-modal',
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css',
  animations: [
    trigger('imageFade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('300ms ease-in-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        animate('300ms ease-in-out', style({ opacity: 0, transform: 'scale(0.95)' })),
      ]),
    ]),
  ],
})
export class ProjectModalComponent {
  readonly dialog = inject(MatDialog);
  project = signal<ProjectPortfolio | null>(null);
  currentImageIndex = signal(0);

  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<ProjectModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProjectPortfolio
  ) {
    this.project.set({
      ...data,
      images: data.images || [data.image], // Fallback to single image if no images array
    });
  }

  modalImages = computed(() => {
    const proj = this.project();
    return proj?.images || [];
  });

  hasMultipleImages = computed(() => this.modalImages().length > 1);

  previousImage() {
    this.currentImageIndex.update((index) => {
      const newIndex = index - 1;
      return newIndex < 0 ? this.modalImages().length - 1 : newIndex;
    });
  }

  nextImage() {
    this.currentImageIndex.update((index) => {
      const newIndex = index + 1;
      return newIndex >= this.modalImages().length ? 0 : newIndex;
    });
  }

  onImageKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.previousImage();
    } else if (event.key === 'ArrowRight') {
      this.nextImage();
    }
  }

  closeModal() {
    this.dialogRef.close();
  }

  onViewMoreProject() {
    this.dialogRef.close();
    this.router.navigate(['/project-portfolio']).then(() => {
      window.scroll(0,0);
    });
  }

}
