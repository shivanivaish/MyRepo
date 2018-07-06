import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import{Http} from '@angular/http';
import 'rxjs/add/operator/map';   
import {Observable} from 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http:Http) { }

    getUser(searchText):Observable<any>{

     //const searchText='js';
      const url='http://api.github.com/search/users?q='+searchText;
      return  this.http.get(url)
      .map(
        res=>{          
         const data = res.json();
          console.log(data);
          return data;
        }
      )
  }
}
