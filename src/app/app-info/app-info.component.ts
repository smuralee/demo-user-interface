import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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

  appFormGroup: FormGroup;
  errorMessage: string;

  constructor(private service: AppInfoService,
              private dialog: MatDialog,
              private router: Router,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.appFormGroup = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.maxLength(60),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.maxLength(60),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('[\\w-]+@([\\w-]+\\.)+[\\w-]+'),
      ]),
      gender: new FormControl(''),
      dob: new FormControl(),
      address: new FormControl('', [Validators.required]),
      notes: new FormControl(''),
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
