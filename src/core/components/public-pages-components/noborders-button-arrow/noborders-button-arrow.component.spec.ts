import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NobordersButtonArrowComponent } from './noborders-button-arrow.component';

describe('NobordersButtonArrowComponent', () => {
  let component: NobordersButtonArrowComponent;
  let fixture: ComponentFixture<NobordersButtonArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NobordersButtonArrowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NobordersButtonArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
