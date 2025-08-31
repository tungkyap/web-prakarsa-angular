import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-our-services',
  imports: [
    HeaderComponent,
    FooterComponent,
    MatIconModule
  ],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css'
})
export class OurServicesComponent implements OnInit {

  ngOnInit(): void {
    window.scroll(0,0);
  }
}
