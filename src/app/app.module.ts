import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing/routing.module';
import { NewtaskComponent } from './newtask/newtask.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewtaskComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
