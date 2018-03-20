import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {

  constructor() { }

  public show( modalElement: Element ) {
    if (!modalElement.classList.contains( 'is-active' )) {
      modalElement.classList.add( 'is-active' );
    }
  }

  public hide( modalElement: Element ) {
    modalElement.classList.remove( 'is-active' );
  }

}
