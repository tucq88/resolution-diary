import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { CoreRoutingModule } from './core-routing.module';
import { RouterModule } from '@angular/router';

@NgModule( {
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [ NotFoundComponent, HeaderComponent ],
  exports: [ RouterModule, HeaderComponent ],
} )
export class CoreModule { }
