import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dosages',
  templateUrl: './dosages.component.html',
  styleUrls: ['./dosages.component.css']
})
export class DosagesComponent {

  @Input() dosage: string;
  ordered = false;

  order() {
      console.log('ORDER', this);
      this.ordered = true;
  }
 

}
