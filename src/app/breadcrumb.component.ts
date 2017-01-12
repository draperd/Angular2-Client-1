import { Component, Input, Output, EventEmitter } from '@angular/core';

const BreadcrumbUtil = require("alfresco-js-utils/lib/utils/navigation/Breadcrumbs");


@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: []
})
export class Breadcrumb {
   @Input() relativePath: string
   @Output() onRelativePath: EventEmitter<any> = new EventEmitter<any>()

   breadcrumbs: any

   constructor() {
      this.breadcrumbs = [{
         label: "Home",
         relativePath: "/"
      }];
   }

   navigate(breadcrumb) {
      this.onRelativePath.emit(breadcrumb.relativePath);
   }

   ngOnChanges(changes: any) {
      let newPath = changes["relativePath"];
      if (newPath)
      {
         let breadcrumbData = BreadcrumbUtil.createBreadcrumbs({
            relativePath: newPath.currentValue
         });
         this.breadcrumbs = breadcrumbData.breadcrumbs;
      }
   }

}