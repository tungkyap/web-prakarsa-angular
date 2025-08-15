import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-team-member',
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './team-member.component.html',
  styleUrl: './team-member.component.css'
})
export class TeamMemberComponent {

}
