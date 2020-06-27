import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppService} from './app-service';
import {AppInfo} from '../_models';

@Injectable({
  providedIn: 'root'
})
export class AppInfoService extends AppService {

  readonly resourceName = '/login';

  constructor(private http: HttpClient) {
    super();
  }

  login(payload: AppInfo) {
    this.http.post(this.getEndpoint(this.resourceName), payload)
      .subscribe(data =>
        console.log(data)
      );
  }


}
