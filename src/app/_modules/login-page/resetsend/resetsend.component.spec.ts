import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetsendComponent } from './resetsend.component';

describe('ResetsendComponent', () => {
  let component: ResetsendComponent;
  let fixture: ComponentFixture<ResetsendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetsendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetsendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
