import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {AppInfoService} from '../_services/app-info.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {SpinnerComponent} from '../spinner/spinner.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-app-info',
  templateUrl: './app-info.component.html',
  styleUrls: ['./app-info.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppInfoComponent implements OnInit {

  appFormGroup: UntypedFormGroup;
  errorMessage: string;

  constructor(private service: AppInfoService,
              private dialog: MatDialog,
              private router: Router,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.appFormGroup = new UntypedFormGroup({
      firstName: new UntypedFormControl('', [
        Validators.required,
        Validators.maxLength(60),
      ]),
      lastName: new UntypedFormControl('', [
        Validators.required,
        Validators.maxLength(60),
      ]),
      email: new UntypedFormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('[\\w-]+@([\\w-]+\\.)+[\\w-]+'),
      ]),
      gender: new UntypedFormControl(''),
      dob: new UntypedFormControl(),
      address: new UntypedFormControl('', [Validators.required]),
      notes: new UntypedFormControl(''),
    });
  }

  onSubmit() {
    if (this.appFormGroup.valid) {
      console.log(JSON.stringify(this.appFormGroup.value, null, 4));
      const observable = this.service.register(this.appFormGroup.value);
      this.showProgressSpinner(observable);
    }
  }

  clear() {
    this.appFormGroup.reset();
  }

  hasError(controlName: string, errorName: string) {
    return this.appFormGroup.controls[controlName].hasError(errorName);
  }

  showProgressSpinner(observable: Observable<any>) {
    const dialogRef: MatDialogRef<SpinnerComponent> = this.dialog.open(SpinnerComponent, {
      panelClass: 'transparent',
      disableClose: true
    });
    const subscription = observable.subscribe(
      (response: any) => {
        subscription.unsubscribe();
        // handle response
        console.log(response);
        dialogRef.close();
        // On success route to next page
        this.router.navigate(['summary']);
      },
      (error) => {
        subscription.unsubscribe();
        // handle error
        dialogRef.close();
        this.errorMessage = 'Internal error. Please check the console logs.';
        this.changeDetectorRef.markForCheck();
      }
    );
  }

}
