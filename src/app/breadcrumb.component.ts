import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { Base } from "./base.component";

const BreadcrumbUtil = require("alfresco-js-utils/lib/utils/navigation/Breadcrumbs");

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: [],

  // Setting the provider here makes it possible for a parent component to find this component as 
  // a content child by defining a @ContentChild predicate using Base
  providers: [ {provide: Base, useExisting: forwardRef(() => Breadcrumb) }]
})
export class Breadcrumb extends Base {
   @Input() relativePath: string
   @Output() onRelativePath: EventEmitter<any> = new EventEmitter<any>()

   breadcrumbs: any

   constructor() {
      super();
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