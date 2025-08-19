import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  // Close mobile menu when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    const nav = document.querySelector('nav');

    if (nav && !nav.contains(target)) {
      this.isMobileMenuOpen = false;
    }
  }

  // Close mobile menu on window resize to desktop size
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (window.innerWidth >= 1024) {
      this.isMobileMenuOpen = false;
    }
  }

  // Prevent body scroll when mobile menu is open
  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

}
