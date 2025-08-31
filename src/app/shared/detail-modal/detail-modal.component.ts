import { CommonModule } from '@angular/common';
import { Component, computed, effect, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output, signal } from '@angular/core';

export interface ModalConfig {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closable?: boolean;
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
  headerClass?: string;
  bodyClass?: string;
  footerClass?: string;
}

@Component({
  selector: 'app-detail-modal',
  imports: [CommonModule],
  templateUrl: './detail-modal.component.html',
  styleUrl: './detail-modal.component.css'
})
export class DetailModalComponent implements OnInit, OnDestroy {
  @Input() isOpen = signal(false);
  @Input() title = signal('');
  @Input() config = signal<ModalConfig>({
    size: 'lg',
    closable: true,
    closeOnBackdrop: true,
    closeOnEscape: true,
    showHeader: true,
    showFooter: false,
    headerClass: '',
    bodyClass: '',
    footerClass: ''
  });

  @Output() closeModal = new EventEmitter<void>();
  @Output() backdropClick = new EventEmitter<void>();
  @Output() escapePressed = new EventEmitter<void>();

  private animationState = signal<'entering' | 'entered' | 'leaving' | 'left'>('left');

  modalSizeClass = computed(() => {
    const size = this.config().size;
    const sizeClasses = {
      'sm': 'max-w-sm',
      'md': 'max-w-md',
      'lg': 'max-w-4xl',
      'xl': 'max-w-6xl',
      'full': 'max-w-[95vw] max-h-[95vh]'
    };
    return sizeClasses[size || 'lg'];
  });

  isVisible = computed(() => this.isOpen() && this.animationState() !== 'left');

  backdropClass = computed(() => {
    const state = this.animationState();
    return `fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
      state === 'entered' ? 'bg-black/60 backdrop-blur-sm' : 'bg-black/0'
    }`;
  });

  modalClass = computed(() => {
    const state = this.animationState();
    const baseClass = `relative bg-white rounded-2xl shadow-2xl w-full max-h-[90vh] transform transition-all duration-300`;
    const sizeClass = this.modalSizeClass();

    const animationClass = state === 'entered'
      ? 'scale-100 opacity-100'
      : 'scale-95 opacity-0 translate-y-4';

    return `${baseClass} ${sizeClass} ${animationClass}`;
  });

  constructor() {
    // Effect to handle modal opening/closing animations
    effect(() => {
      if (this.isOpen()) {
        this.openModal();
      } else {
        this.closeModalWithAnimation();
      }
    });
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    document.body.style.overflow = 'auto';
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (this.isOpen() && this.config().closeOnEscape && event.key === 'Escape') {
      this.escapePressed.emit();
      this.handleClose();
    }
  }

  private openModal() {
    // Prevent body scrolling
    document.body.style.overflow = 'hidden';

    // Start enter animation
    this.animationState.set('entering');

    // Use requestAnimationFrame to ensure DOM is updated
    requestAnimationFrame(() => {
      this.animationState.set('entered');
    });
  }

  private closeModalWithAnimation() {
    this.animationState.set('leaving');

    // Wait for animation to complete before hiding
    setTimeout(() => {
      this.animationState.set('left');
      document.body.style.overflow = 'auto';
    }, 300);
  }

  onBackdropClick(event: Event) {
    if (event.target === event.currentTarget && this.config().closeOnBackdrop) {
      this.backdropClick.emit();
      this.handleClose();
    }
  }

  handleClose() {
    this.closeModal.emit();
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

}
