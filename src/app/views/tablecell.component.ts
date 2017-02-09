import { Component, Input, Output, ViewChild, EventEmitter, ElementRef, forwardRef, AfterViewInit } from '@angular/core';
import { Base } from "../base.component";

@Component({
  selector: 'table-cell',
  templateUrl: './tablecell.component.html',
  styleUrls: ["material-design-lite/material.css"],

  // Setting the provider here makes it possible for a parent component to find this component as 
  // a content child by defining a @ContentChild predicate using Base
  providers: [ {provide: Base, useExisting: forwardRef(() => TableCell) }]
})
export class TableCell extends Base implements AfterViewInit {
  
    @Input() item: any
    
    @ViewChild("cell") cell: ElementRef;
  
    ngAfterViewInit() {
        // if (window["componentHandler"])
        // {
        //     window["componentHandler"].upgradeElement(this.cell.nativeElement);
        // }
    }
}