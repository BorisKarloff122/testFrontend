import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {IElement} from "../models/element";
import {IResponse} from "../models/response";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public $getCatalogDataSource = new BehaviorSubject('')

  constructor(private http: HttpClient) { }

  public getCatalogData(): Observable<IElement[]>{
    return this.http.get<IElement[]>('http://localhost:3000/getStructure');
  }

  public moveToDir(reqBody: {path?: string, direction: number}): Observable<string>{
    return this.http.post<string>('http://localhost:3000/openCatalog', reqBody);
  }

  public createDir(reqParam: string): Observable<string>{
    return this.http.get<string>(`http://localhost:3000/createDir/?path=${reqParam}`)
  }

  public removeElement(reqBody: IElement): Observable<string>{
    return this.http.post<string>(`http://localhost:3000/removeElement`, reqBody)
  }

  public uploadFile(reqBody: FormData): Observable<string>{
    return this.http.post<string>('http://localhost:3000/uploadElement', reqBody);
  }

  public goToHomeFolder(): Observable<string>{
    return this.http.get<string>('http://localhost:3000/home')
  }

  public login(reqBody: any): Observable<IResponse>{
    return this.http.post<IResponse>('http://localhost:3000/login', reqBody);
  }
}
