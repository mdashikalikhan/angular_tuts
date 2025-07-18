import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-component',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './layout-component.html',
  styleUrl: './layout-component.css'
})
export class LayoutComponent {
  router = inject(Router);

  onLogout(){
    localStorage.removeItem("userId");
    this.router.navigateByUrl("login");
  }
}
