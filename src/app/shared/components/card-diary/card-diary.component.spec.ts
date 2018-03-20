import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDiaryComponent } from './card-diary.component';

describe('CardDiaryComponent', () => {
  let component: CardDiaryComponent;
  let fixture: ComponentFixture<CardDiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDiaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
