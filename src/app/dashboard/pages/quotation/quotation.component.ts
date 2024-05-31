import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-quotation',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './quotation.component.html',
  styleUrl: './quotation.component.scss'
})
export default class QuotationComponent {

  selectedOption: string = ''; 

  updateSelectColor() {
    if (this.selectedOption === '1') {
      return 'color-1';
    } else if (this.selectedOption === '2') {
      return 'color-2';
    } else if (this.selectedOption === '3') {
      return 'color-3';
    }
    return undefined;
  }


}