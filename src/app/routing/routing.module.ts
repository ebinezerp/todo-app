import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'
import { HomeComponent } from '../home/home.component';
import { NewtaskComponent } from '../newtask/newtask.component';


const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'newtask',component:NewtaskComponent}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})



export class RoutingModule { }
