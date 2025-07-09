import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Roles } from './components/roles/roles';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Roles],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular_tuts';
}
