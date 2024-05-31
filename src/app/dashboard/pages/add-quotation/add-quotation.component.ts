import { Component, signal,} from '@angular/core';
import { FormsModule, } from '@angular/forms';
import ItemQuotComponent from '../item-quot/item-quot.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-quotation',
  standalone: true,
  imports: [RouterLink,FormsModule, ItemQuotComponent],
  templateUrl: './add-quotation.component.html',
  styleUrl: './add-quotation.component.scss'
})
export default class AddQuotationComponent {


 public isChecked = signal (false);

  public cambiar(){
    this.isChecked.update(value => !value);
  }



 /* logChecked() {
    console.log(this.isChecked());
  }*/


}
