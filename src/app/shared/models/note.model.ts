import { BaseModel } from './base.model';

export class NoteModel implements BaseModel<NoteModel> {
  date: string;
  content: number;
  isGood: boolean;

  deserialize( input: any ): NoteModel {
    Object.assign( this, input );
    return this;
  }
}
