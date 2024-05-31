import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-quot',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './item-quot.component.html',
  styleUrl: './item-quot.component.scss'
})
export default class ItemQuotComponent {

  items: string[] = [];

  isChecked: boolean[] = [];




  addItem() {
    this.items.push(`Item ${this.items.length + 1}`);

  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }



  cambiar(index: number){
    this.isChecked[index] = !this.isChecked[index];
  }


}




