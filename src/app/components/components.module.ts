import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyCollectionComponent } from './my-collection/my-collection.component';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    MyCollectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class ComponentsModule { }
