import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Roles } from './components/roles/roles';
import { Master } from './components/master/master';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Master, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular_tuts';
}
