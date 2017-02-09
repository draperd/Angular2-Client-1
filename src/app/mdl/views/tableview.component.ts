import { Component, 
         Input, 
         TemplateRef, 
         ContentChild } from '@angular/core';

@Component({
  selector: 'mdl-table-view',
  templateUrl: './tableview.component.html',
  styleUrls: ["material-design-lite/material.css"]
})
export class TableView {
    @Input() list:any;
    
    @ContentChild(TemplateRef)
    template: any;

}