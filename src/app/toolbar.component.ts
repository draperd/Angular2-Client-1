import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: []
})
export class Toolbar {
   @Input() list:any;

   @Output() onBack: EventEmitter<any> = new EventEmitter<any>()
   @Output() onForward: EventEmitter<any> = new EventEmitter<any>()

   back() {
      this.onBack.emit();
   }
   
   forward() {
      this.onForward.emit();
   }
}