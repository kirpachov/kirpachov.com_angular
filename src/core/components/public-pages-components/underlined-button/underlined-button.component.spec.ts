import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderlinedButtonComponent } from './underlined-button.component';

describe('UnderlinedButtonComponent', () => {
  let component: UnderlinedButtonComponent;
  let fixture: ComponentFixture<UnderlinedButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderlinedButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderlinedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
