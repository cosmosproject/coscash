import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { HomeDashComponent } from './home-dash/home-dash';

@NgModule({
  declarations: [
    HomeDashComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HomeDashComponent
  ]
})
export class ComponentsModule {
}
