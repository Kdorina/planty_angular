import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UhomeComponent } from './Uhome/Uhome.component';
import { InfoComponent } from './info/info.component';


const routes: Routes = [
  {path:'user/home', component:UhomeComponent},
  {path:'', component:UhomeComponent},
  {path:'user/info', component:InfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
