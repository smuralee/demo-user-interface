import { HttpClient, HttpClientModule } from '@angular/common/http';
import {TestBed} from '@angular/core/testing';

import {AppInfoService} from './app-info.service';

describe('AppInfoService', () => {
  let service: AppInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule
      ],
      providers:[
        HttpClient
      ]
    });
    service = TestBed.inject(AppInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
