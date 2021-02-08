import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";


import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    SidebarComponent,
    HttpClientModule,
  ]
})
export class SharedModule { }
