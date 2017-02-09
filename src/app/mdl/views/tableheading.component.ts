import { Component, Input } from '@angular/core';

@Component({
  selector: 'mdl-table-heading',
  templateUrl: './tableheading.component.html',
  styleUrls: ["material-design-lite/material.css"]
})
export class TableHeading {
    @Input() title: String;
}