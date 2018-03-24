import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ModalService } from '../../modal.service';
import { NoteModel } from '../../models/note.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-diary',
  templateUrl: './card-diary.component.html',
  styleUrls: [ './card-diary.component.scss' ]
})
export class CardDiaryComponent implements OnInit {
  @Input() inputNote: NoteModel;
  @ViewChild('diaryModal') diaryModal: ElementRef;
  formNote: FormGroup;

  constructor( private modalService: ModalService, private formBuilder: FormBuilder ) {
  }

  ngOnInit() {
    this.formNote = this.formBuilder.group({
      date: this.formBuilder.control('', [ Validators.required ]),
      content: this.formBuilder.control('', [ Validators.required ]),
      isGood: this.formBuilder.control(false)
    });
  }

  showModal() {
    this.modalService.show(this.diaryModal.nativeElement);
  }

  hideModal() {
    this.modalService.hide(this.diaryModal.nativeElement);
  }

  onSubmit( formData: FormGroup ) {
    const a = new NoteModel().deserialize(formData.value);
    console.log(a);
  }

}
