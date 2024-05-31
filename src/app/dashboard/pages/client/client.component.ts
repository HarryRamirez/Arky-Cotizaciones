import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export default class ClientComponent {

}
