import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { CoreRoutingModule } from './core-routing.module';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';

@NgModule( {
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  providers: [AuthService],
  declarations: [ NotFoundComponent, HeaderComponent ],
  exports: [ RouterModule, HeaderComponent ],
} )
export class CoreModule { }
