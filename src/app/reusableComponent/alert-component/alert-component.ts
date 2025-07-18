import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert-component',
  imports: [],
  templateUrl: './alert-component.html',
  styleUrl: './alert-component.css'
})
export class AlertComponent {
  @Input() alertType: string = "";
  @Input() alertMessage: string = "";
}
