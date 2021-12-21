import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpledoComponent } from './empledo.component';

describe('EmpledoComponent', () => {
  let component: EmpledoComponent;
  let fixture: ComponentFixture<EmpledoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpledoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpledoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
