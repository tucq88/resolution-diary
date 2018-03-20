import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const coreRoutes: Routes = [
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot( coreRoutes ) ],
  exports: [ RouterModule ]
})
export class CoreRoutingModule {}
