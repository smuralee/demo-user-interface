import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app-service';
import { AppInfo } from '../_models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AppInfoService extends AppService {
  readonly resourceName = '/register';

  constructor(private http: HttpClient, private router: Router) {
    super();
  }

  register(payload: AppInfo) {
    this.http
      .post(this.getEndpoint(this.resourceName), payload)
      .subscribe((data) => this.router.navigate(['summary']));
  }
}
