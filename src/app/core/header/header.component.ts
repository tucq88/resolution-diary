import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { ModalService } from '../../shared/modal.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteModel } from '../../shared/models/note.model';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
  isMenuOpenned = false;
  authState$: Observable<firebase.User | null>;
  formNote: FormGroup;
  @ViewChild('diaryModal') diaryModal: ElementRef;

  constructor( private formBuilder: FormBuilder,
               private modalService: ModalService,
               private authService: AuthService ) {
  }

  ngOnInit() {
    this.authState$ = this.authService.authState();
    this.formNote = this.formBuilder.group({
      date: this.formBuilder.control(new Date().toISOString().substring(0, 10), [ Validators.required ]),
      content: this.formBuilder.control('', [ Validators.required ]),
      isGood: this.formBuilder.control('')
    });

    console.log(this.formNote.value);
  }

  toggleMenu() {
    this.isMenuOpenned = !this.isMenuOpenned;
  }

  showModal() {
    this.modalService.show(this.diaryModal.nativeElement);
  }

  hideModal() {
    this.modalService.hide(this.diaryModal.nativeElement);
  }

  onSubmit(formData) {
    const input = formData.value;
    input.id = uuid();
    console.log(input);
    const a = new NoteModel().deserialize(input);
    console.log(a);
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

}
