import { Component, Input, Output, ViewChild, EventEmitter, ElementRef, forwardRef } from '@angular/core';
import { Base } from "./base.component";

@Component({
  selector: 'listview',
  templateUrl: './listview.component.html',
  styleUrls: [],

  // Setting the provider here makes it possible for a parent component to find this component as 
  // a content child by defining a @ContentChild predicate using Base
  providers: [ {provide: Base, useExisting: forwardRef(() => ListView) }]
})
export class ListView extends Base {
  //  @Input() list:any;

   @Output() onNavigate: EventEmitter<any> = new EventEmitter<any>()

   @ViewChild('listview') el: ElementRef;

   ngOnChanges(changes: any) {
      console.log("List view changes", changes);
      // let newPath = changes["relativePath"];
      
   }

   navigate(item) {
      if (item.entry.isFolder)
      {
         this.onNavigate.emit(item);
      }
      let changeEvent = new CustomEvent("NAVIGATE", {
         detail: item,
         bubbles: true
      });
      this.el.nativeElement.dispatchEvent(changeEvent);
   }
}