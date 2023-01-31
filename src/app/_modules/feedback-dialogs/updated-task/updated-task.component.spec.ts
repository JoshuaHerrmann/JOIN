import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedTaskComponent } from './updated-task.component';

describe('UpdatedTaskComponent', () => {
  let component: UpdatedTaskComponent;
  let fixture: ComponentFixture<UpdatedTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatedTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
