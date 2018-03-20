import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalService } from '../../modal.service';

@Component({
  selector: 'app-card-diary',
  templateUrl: './card-diary.component.html',
  styleUrls: ['./card-diary.component.scss']
})
export class CardDiaryComponent implements OnInit {
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