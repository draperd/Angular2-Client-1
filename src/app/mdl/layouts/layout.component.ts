import { Component,
         Input,
         ViewEncapsulation } from '@angular/core';
 
@Component({
  selector: 'mdl-layout',
  templateUrl: './layout.component.html',
  styleUrls: ["material-design-lite/material.min.css"],
  encapsulation: ViewEncapsulation.None
})
export class Layout {
    @Input() headerTitle: String;
    @Input() drawerTitle: String;
}