export interface BaseModel<T> {
  deserialize( input: any ): T;
}
