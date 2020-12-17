import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantNonaffComponent } from './etudiant-nonaff.component';

describe('EtudiantNonaffComponent', () => {
  let component: EtudiantNonaffComponent;
  let fixture: ComponentFixture<EtudiantNonaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantNonaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantNonaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
