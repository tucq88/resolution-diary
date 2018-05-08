import { BaseModel } from './base.model';

export class NoteModel implements BaseModel<NoteModel> {
  id: string;
  date: string;
  content: number;
  isGood: false;

  deserialize( input: any ): NoteModel {
    Object.assign( this, input );
    return this;
  }
}
