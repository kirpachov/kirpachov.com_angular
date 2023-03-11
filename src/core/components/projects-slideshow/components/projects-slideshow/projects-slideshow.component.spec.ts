import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsSlideshowComponent } from './projects-slideshow.component';

describe('ProjectsSlideshowComponent', () => {
  let component: ProjectsSlideshowComponent;
  let fixture: ComponentFixture<ProjectsSlideshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsSlideshowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
