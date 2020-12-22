import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEtudiantOffreComponent } from './all-etudiant-offre.component';

describe('AllEtudiantOffreComponent', () => {
  let component: AllEtudiantOffreComponent;
  let fixture: ComponentFixture<AllEtudiantOffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllEtudiantOffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEtudiantOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
