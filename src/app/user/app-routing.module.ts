import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UhomeComponent } from './Uhome/Uhome.component';

const routes: Routes = [
  {path:'user/home', component:UhomeComponent},
  {path:'', component:UhomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
