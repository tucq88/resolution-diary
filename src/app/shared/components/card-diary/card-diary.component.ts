import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ModalService } from '../../modal.service';
import { NoteModel } from '../../models/note.model';

@Component({
  selector: 'app-card-diary',
  templateUrl: './card-diary.component.html',
  styleUrls: ['./card-diary.component.scss']
})
export class CardDiaryComponent implements OnInit {
  @Input() note: NoteModel;
  @ViewChild( 'diaryModal' ) diaryModal: ElementRef;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  showModal() {
    this.modalService.show(this.diaryModal.nativeElement);
  }

  hideModal() {
    this.modalService.hide(this.diaryModal.nativeElement);
  }

}
