import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export default class ServiceComponent {

}
