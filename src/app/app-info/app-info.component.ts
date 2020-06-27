import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AppInfo} from '../_models';

@Component({
  selector: 'app-app-info',
  templateUrl: './app-info.component.html',
  styleUrls: ['./app-info.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppInfoComponent implements OnInit {

  // Initialize the model as empty
  model: AppInfo = {};

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    alert(JSON.stringify(this.model, null, 4));
  }

  clear() {
    this.model = {};
  }

}
