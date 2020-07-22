import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppInfo } from '../_models';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class AppInfoService {
  readonly resourceName = '/register';

  constructor(private http: HttpClient, private router: Router) {
  }

  register(payload: AppInfo) {
    // FIXME: Uncomment the HTTP POST once API endpoint is available

    // return this.http.post(this.getEndpoint(this.resourceName), payload);
    return new Observable(this.waitTimer);
  }

  waitTimer(observer) {
    setTimeout(() => {
      observer.next('Done waiting for 5 sec');
      observer.complete();
    }, 5000);
  }

  getEndpoint(resourceName: string): string {
    return environment.apiEndpoint + resourceName;
  }
}
