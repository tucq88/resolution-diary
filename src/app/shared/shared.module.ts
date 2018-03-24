import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDiaryComponent } from './components/card-diary/card-diary.component';
import { ModalService } from './modal.service';
import { NoteService } from './services/note.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ModalService, NoteService],
  declarations: [CardDiaryComponent],
  exports: [CardDiaryComponent]
})
export class SharedModule { }
