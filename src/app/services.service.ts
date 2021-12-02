import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(public _Http:HttpClient) { }
  find(name:string):Observable<any>
  {
    return this._Http.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=825828d7bbadc2d6017005e3dcb882e2&text="+name+"&format=json&nojsoncallback=1")
  }
}
