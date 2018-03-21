import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewServerFormComponent } from './new-server-form.component';

describe('NewServerFormComponent', () => {
  let component: NewServerFormComponent;
  let fixture: ComponentFixture<NewServerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewServerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewServerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
