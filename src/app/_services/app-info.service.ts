import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppInfoService {

  constructor(private http: HttpClient) {
  }

  login(payload: any) {
    this.http.post(environment.apiEndpoint, payload)
      .subscribe(data =>
        console.log(data)
      );
  }
}
