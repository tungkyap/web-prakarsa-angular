import { Component } from '@angular/core';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-common-modal',
  imports: [],
  templateUrl: './common-modal.component.html',
  styleUrl: './common-modal.component.css'
})
export class CommonModalComponent {

}
