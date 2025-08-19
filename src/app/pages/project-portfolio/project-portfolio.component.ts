import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-project-portfolio',
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './project-portfolio.component.html',
  styleUrl: './project-portfolio.component.css'
})
export class ProjectPortfolioComponent implements OnInit {
  ngOnInit(): void {
    window.scroll(0,0);
  }
}
