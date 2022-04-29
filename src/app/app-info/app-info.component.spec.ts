import { HttpClient, HttpClientModule } from '@angular/common/http';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AppInfoService } from '../_services/app-info.service';

import {AppInfoComponent} from './app-info.component';

describe('AppInfoComponent', () => {
  let component: AppInfoComponent;
  let fixture: ComponentFixture<AppInfoComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
        MatDialogModule
      ],
      providers:[
        HttpClient,
        AppInfoService,
        MatDialog
      ],
      declarations: [AppInfoComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(AppInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
