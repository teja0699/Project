import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class EntriesService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  entries(data) {
    return this.http.post(`${this.baseUrl}/entries`, data)
  }
  getUsers(){
      return this.http.get(this.baseUrl)
          .map((response: Response) => <any>response.json());
     // return this.http.get(`${this.baseUrl}/getusers`)
  }
}
