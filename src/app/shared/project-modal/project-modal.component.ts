import { animate, style, transition, trigger } from '@angular/animations';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectPortfolio } from '../../pages/home/home.component';

@Component({
  selector: 'app-common-modal',
  imports: [CommonModule],
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
export class ProjectModalComponent implements OnInit {
  private dialogRef = inject(DialogRef);
  data = inject(DIALOG_DATA);

  project = signal<ProjectPortfolio | null>(null);
  currentImageIndex = signal(0);

  isHomePage: boolean = true;

  constructor(private router: Router) {
    this.project.set({
      ...this.data,
      images: this.data.images || [this.data.image],
    });
  }

  ngOnInit(): void {
    if (this.router.url === '/project-portfolio') {
      this.isHomePage = false;
    } else {
      this.isHomePage = true;
    }
  }

  modalImages = computed(() => {
    const proj = this.project();
    return proj?.images || [];
  });

  hasMultipleImages = computed(() => this.modalImages().length > 1);

  previousImage() {
    this.currentImageIndex.update((index) => {
      const newIndex = index - 1;
      return newIndex < 0 ? this.modalImages().length -1 : newIndex;
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
