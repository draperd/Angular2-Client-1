import { Component, 
        Input, 
        Output, 
        QueryList, 
        ViewChild, 
        ElementRef, 
        TemplateRef, 
        ContentChild, 
        ContentChildren, 
        AfterViewInit,
        AfterContentInit, 
        ViewContainerRef, 
        ComponentFactoryResolver } from '@angular/core';
import { Base } from "../base.component";


@Component({
  selector: 'table-view',
  templateUrl: './tableview.component.html',
  styleUrls: ["material-design-lite/material.css"]
})
export class TableView implements AfterViewInit {
    @Input() list:any;
    
    @ContentChild(TemplateRef)
    template: any;

    ngAfterViewInit() {
        // if (window["componentHandler"])
        // {
        //     window["componentHandler"].upgradeDom();
        // }
    }
}