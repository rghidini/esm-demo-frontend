import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppComponentService {
  constructor(private http: HttpClient) { }

  baseurl = 'http://localhost:8080';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  sortedList = new BehaviorSubject<number[]>(null);
  currentList$ = this.sortedList.asObservable();
  error = new BehaviorSubject<string>(null);
  currentError$ = this.error.asObservable();
  public sortList(list: string): Observable<any[]> {
    return this.http.post<number[]>(this.baseurl + '/list/sort', list, this.httpOptions);
  }

  changeList(list: any[]) {
    this.sortedList.next(list);
  }

  changeError(err: string) {
    this.error.next(err);
  }

}
