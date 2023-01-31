import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedContactComponent } from './created-contact.component';

describe('CreatedContactComponent', () => {
  let component: CreatedContactComponent;
  let fixture: ComponentFixture<CreatedContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
