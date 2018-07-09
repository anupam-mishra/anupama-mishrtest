import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
selector: 'app-medicine',
templateUrl: './medicine.component.html',
styleUrls: ['./medicine.component.css']
})
export class MedicineComponent {

    @Input() medicine: string;    
    ordered = false;
    order() {        
        console.log('ORDER', this);
        this.ordered = true;
    }
}
