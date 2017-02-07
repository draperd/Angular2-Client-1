import { Component, Directive, QueryList, ViewChild, ElementRef, ContentChildren, AfterContentInit } from '@angular/core';
import { NodeService } from "./node.service";
import { Base } from "./base.component";




@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: [],
  providers: [NodeService]
})
export class List implements AfterContentInit {

   data:any;
   options:any;

   @ViewChild('list') el: ElementRef;

   @ContentChildren(Base) children: QueryList<Base>;

   constructor(private nodeService: NodeService) {
      this.data = {
         list: {
            pagination: {
               skipCount: 0,
               maxItems: 3
            }
         }
      };
      this.options = {
         skipCount: 0,
         maxItems: 3,
         relativePath: '/'
      };
   }

   ngAfterContentInit() {
      console.log("Moo", this.children);
      this.children.forEach((child) => {
        console.log("Woof", child);
        child.relativePath = this.options.relativePath;
        child.list = this.data.list;
    });
   }

   ngOnInit() { 
      this.getData(); 

      this.el.nativeElement.addEventListener("NAVIGATE", (event) => {
        console.log("Clicked", event);
        if (event && event.detail)
        {
          this.navigate(event.detail);
        }
      });
   }

   getData() {
      this.nodeService.getItems(this.options)
                      .subscribe(list => {
                        this.data = list;
                        this.children.forEach((child) => {
                            child.relativePath = this.options.relativePath;
                            child.list = this.data.list;
                        });
                      });
   }

   pageBack() {
      if (this.data.list.pagination.skipCount)
      {
         this.options.skipCount -= this.options.maxItems;
         this.getData();
      }
   }

   pageForward() {
      if (this.data.list.pagination.hasMoreItems)
      {
         this.options.skipCount += this.options.maxItems;
         this.getData();
      }
   }

   navigate(item:any) {
      this.options.skipCount = 0;
      this.options.relativePath += `${item.entry.name}/`;
      this.getData();
   }

   setRelativePath(relativePath) {
      this.options.skipCount = 0;
      this.options.relativePath = relativePath;
      this.getData();
   }
}