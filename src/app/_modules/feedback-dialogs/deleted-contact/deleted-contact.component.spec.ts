import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedContactComponent } from './deleted-contact.component';

describe('DeletedContactComponent', () => {
  let component: DeletedContactComponent;
  let fixture: ComponentFixture<DeletedContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletedContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
