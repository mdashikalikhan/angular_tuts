import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-client',
  imports: [FormsModule],
  templateUrl: './client.html',
  styleUrl: './client.css'
})
export class Client {
  clientObject : Client = new Client();

  clients: Client[] = [];
}
