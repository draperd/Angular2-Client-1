import { Component, Input } from '@angular/core';

@Component({
  selector: 'mdl-table-cell',
  templateUrl: './tablecell.component.html',
  styleUrls: ["material-design-lite/material.css"]
})
export class TableCell {
    @Input() item: any;
}