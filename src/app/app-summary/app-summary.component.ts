import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-app-summary',
  templateUrl: './app-summary.component.html',
  styleUrls: ['./app-summary.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppSummaryComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
