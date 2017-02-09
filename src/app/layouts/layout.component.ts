import { Component, ViewChild, ElementRef, AfterViewInit, ViewEncapsulation } from '@angular/core';
 
@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ["material-design-lite/material.min.css"],
  encapsulation: ViewEncapsulation.None
})
export class Layout {
  
    // @ViewChild("root") outer: ElementRef;
  
    // ngOnInit() {
    //      if (window["componentHandler"])
    //     {
    //         window["componentHandler"].upgradeDom()
    //     }
    // }
    // ngAfterViewInit() {
    //     if (window["componentHandler"])
    //     {
    //         window["componentHandler"].upgradeDom()
    //     }
    // }
}