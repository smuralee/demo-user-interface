import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AppInfoService} from '../_services/app-info.service';

@Component({
  selector: 'app-app-info',
  templateUrl: './app-info.component.html',
  styleUrls: ['./app-info.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppInfoComponent implements OnInit {

  appFormGroup: FormGroup;

  constructor(private service: AppInfoService) {
  }

  ngOnInit(): void {
    this.appFormGroup = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('[\\w-]+@([\\w-]+\\.)+[\\w-]+')
      ]),
      gender: new FormControl(''),
      dob: new FormControl(),
      address: new FormControl('', [Validators.required]),
      notes: new FormControl('')
    });
  }

  onSubmit() {
    if (this.appFormGroup.valid) {
      console.log(JSON.stringify(this.appFormGroup.value, null, 4));
      this.service.login(this.appFormGroup.value);
    }
  }

  clear() {
    this.appFormGroup.reset();
  }

  hasError(controlName: string, errorName: string) {
    return this.appFormGroup.controls[controlName].hasError(errorName);
  }

}
