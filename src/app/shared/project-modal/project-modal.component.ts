import { CommonModule } from '@angular/common';
import { Component, computed, EventEmitter, Input, Output, signal, WritableSignal } from '@angular/core';
import { DetailModalComponent, ModalConfig } from '../detail-modal/detail-modal.component';

export interface ProjectPortfolio {
  id: number;
  projectName: string;
  projectDuration: string;
  projectLocation: string;
  image: string;
  description?: string;
  clientName?: string;
  projectValue?: string;
  projectScope?: string[];
  additionalImages?: string[];
  challenges?: string;
  solutions?: string;
  technologies?: string[];
}

@Component({
  selector: 'app-project-modal',
  imports: [CommonModule, DetailModalComponent],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent {
  @Input() isOpen = signal(false);
  @Input() project: WritableSignal<ProjectPortfolio | undefined> = signal(undefined);
  title = computed(() => this.project()?.projectName ?? '');

  @Output() closeModal = new EventEmitter<void>();
  @Output() viewFullProject = new EventEmitter<number>();

  // Image gallery state
  currentImageIndex = signal(0);

  // Modal configuration
  modalConfig = signal<ModalConfig>({
    size: 'xl',
    closable: true,
    closeOnBackdrop: true,
    closeOnEscape: true,
    showHeader: true,
    showFooter: false,
    bodyClass: 'p-0' // Remove default padding for custom layout
  });

  // Computed properties
  modalImages = computed(() => {
    const proj = this.project();
    if (!proj) return [];

    const images = [proj.image];
    if (proj.additionalImages) {
      images.push(...proj.additionalImages);
    }
    return images;
  });

  hasMultipleImages = computed(() => this.modalImages().length > 1);

  onCloseModal() {
    this.currentImageIndex.set(0);
    this.closeModal.emit();
  }

  onViewFullProject() {
    const proj = this.project();
    if (proj) {
      this.viewFullProject.emit(proj.id);
    }
  }

  // Image navigation
  previousImage() {
    if (this.hasMultipleImages()) {
      const images = this.modalImages();
      const currentIndex = this.currentImageIndex();
      const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      this.currentImageIndex.set(newIndex);
    }
  }

  nextImage() {
    if (this.hasMultipleImages()) {
      const images = this.modalImages();
      const currentIndex = this.currentImageIndex();
      const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      this.currentImageIndex.set(newIndex);
    }
  }

  // Keyboard navigation for images
  onImageKeydown(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        this.previousImage();
        break;
      case 'ArrowRight':
        event.preventDefault();
        this.nextImage();
        break;
    }
  }
}
