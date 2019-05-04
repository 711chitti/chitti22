import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentdayComponent } from './currentday/currentday.component';
import { CurrentwheatherComponent } from './currentwheather/currentwheather.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [


  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'currentday',
    component: CurrentdayComponent
  },
  {
    path: 'currentwheather',
    component: CurrentwheatherComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
