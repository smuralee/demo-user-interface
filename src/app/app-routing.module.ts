import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppInfoComponent} from './app-info/app-info.component';
import {AppSummaryComponent} from './app-summary/app-summary.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/app',
    pathMatch: 'full'
  },
  {
    path: 'app',
    component: AppInfoComponent
  },
  {
    path: 'summary',
    component: AppSummaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
