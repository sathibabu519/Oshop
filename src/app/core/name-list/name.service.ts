import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class NameService {
  url= "https://api.myjson.com/bins/7xq2x";

  constructor(private http : HttpClient) { }

  getNames():Observable<any>{
    console.log('url',this.url)
    return this.http.get(this.url)
    .map(res => res);
    
  }

}
