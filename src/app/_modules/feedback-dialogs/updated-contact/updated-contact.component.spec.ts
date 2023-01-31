import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedContactComponent } from './updated-contact.component';

describe('UpdatedContactComponent', () => {
  let component: UpdatedContactComponent;
  let fixture: ComponentFixture<UpdatedContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatedContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
