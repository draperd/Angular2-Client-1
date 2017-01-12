import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'listview',
  templateUrl: './listview.component.html',
  styleUrls: []
})
export class ListView {
   @Input() list:any;

   @Output() onNavigate: EventEmitter<any> = new EventEmitter<any>()

   navigate(item) {
      if (item.entry.isFolder)
      {
         this.onNavigate.emit(item);
      }
   }
}