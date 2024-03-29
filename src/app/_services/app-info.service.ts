/**
 * Copyright 2020 Suraj Muraleedharan
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppInfo} from '../_models';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class AppInfoService {
  readonly resourceName = '/register';

  constructor(private http: HttpClient, private router: Router) {
  }

  register(payload: AppInfo) {
    if (environment.production) {
      return this.http.post(this.getEndpoint(this.resourceName), payload);
    } else {
      return new Observable(this.waitTimer);
    }
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
