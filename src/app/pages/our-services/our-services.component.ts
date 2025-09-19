import { Component, HostListener, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-services',
  imports: [
    HeaderComponent,
    FooterComponent,
    CommonModule,
    MatIconModule
  ],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css'
})
export class OurServicesComponent implements OnInit {
  showScrollTop = false;

  // detect scroll position
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollTop = window.scrollY > 300; // show after 300px scroll
  }

  // scroll smoothly to top
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit(): void {
    window.scroll(0,0);
  }
}
