import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBoardCardComponent } from './dialog-board-card.component';

describe('DialogBoardCardComponent', () => {
  let component: DialogBoardCardComponent;
  let fixture: ComponentFixture<DialogBoardCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBoardCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogBoardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
