import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulerInOffreComponent } from './postuler-in-offre.component';

describe('PostulerInOffreComponent', () => {
  let component: PostulerInOffreComponent;
  let fixture: ComponentFixture<PostulerInOffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostulerInOffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulerInOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
