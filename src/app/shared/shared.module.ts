import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDiaryComponent } from './components/card-diary/card-diary.component';
import { ModalService } from './modal.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ModalService],
  declarations: [CardDiaryComponent],
  exports: [CardDiaryComponent]
})
export class SharedModule { }
