import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IShowentries} from "./showentries";
import {Observable} from "rxjs/Observable";

@Injectable()
export class EntriesService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  entries(data) {
    return this.http.post(`${this.baseUrl}/entries`, data)
  }
  getUsers(){
      return this.http.get(`${this.baseUrl}/getusers`)
  }
  getEntries():Observable<IShowentries[]>{
      return this.http.get<IShowentries[]>(`${this.baseUrl}/getentries`)
  }
}
