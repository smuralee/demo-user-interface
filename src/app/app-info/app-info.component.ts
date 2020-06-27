import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AppInfo} from '../_models';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-app-info',
  templateUrl: './app-info.component.html',
  styleUrls: ['./app-info.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppInfoComponent implements OnInit {

  model: AppInfo = {};
  appFormGroup: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.appFormGroup = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.appFormGroup.controls[controlName].hasError(errorName);
  };

  onSubmit() {
    if (this.appFormGroup.valid) {
      alert(JSON.stringify(this.model, null, 4));
    }
  }

  clear() {
    this.model = {};
  }

}
