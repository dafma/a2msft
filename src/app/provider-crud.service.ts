import { Injectable } from '@angular/core';
import {Http, Response,} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProviderCrudService {
  //tasks = ["first task", "second task", "third task"];
  tasks;
  constructor( private _http: Http) { }
  getTasks(){
    var aPromise = this._http.get("http://jsonplaceholder.typicode.com/users/5")
    .map((response: Response)=>response.json().data)
    .toPromise()
    aPromise.then(tasksFromServer => this.tasks = tasksFromServer);
  }
}
