import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDiaryComponent } from './components/card-diary/card-diary.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CardDiaryComponent],
  exports: [CardDiaryComponent]
})
export class SharedModule { }
