import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AwbComponent} from "./awb/awb.component";


const routes: Routes = [
  //{ path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'notoc/awb', component: AwbComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
