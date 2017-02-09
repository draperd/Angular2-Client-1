import { Component, Directive } from '@angular/core';
import { NodeService } from "../node.service";

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: [],
  providers: [NodeService]
})
export class List {

   data:any;
   options:any;

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

   ngOnInit() { 
      this.getData(); 
   }

   getData() {
      this.nodeService.getItems(this.options)
                      .subscribe(list => {
                        this.data = list;
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