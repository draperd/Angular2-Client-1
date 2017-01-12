import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class NodeService {

   constructor (private http: Http) {}
  
   getItems(options: any): Observable<any> {
      if (!options)
      {
         options = {};
      }
      options.skipCount = options.skipCount || 0;
      options.maxItems = options.maxItems || 10;
      options.relativePath = options.relativePath || '/';

      let url = `/api/-default-/public/alfresco/versions/1/nodes/-root-/children?include=path&skipCount=${options.skipCount}&maxItems=${options.maxItems}&relativePath=${options.relativePath}`;
      return this.http.get(url)
                      .map(this.extractData)
                      .catch(this.handleError);
   }
  
   private extractData(res: Response) {
      let body = res.json();
      return body || { };
   }
  
   private handleError (error: Response | any) {
      // In a real world app, we might use a remote logging infrastructure
      let errMsg: string;
      if (error instanceof Response) {
         const body = error.json() || '';
         const err = body.error || JSON.stringify(body);
         errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
         errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Observable.throw(errMsg);
   }
}
