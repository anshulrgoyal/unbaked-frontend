import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNewComponent } from './card-new.component';

describe('CardNewComponent', () => {
  let component: CardNewComponent;
  let fixture: ComponentFixture<CardNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
