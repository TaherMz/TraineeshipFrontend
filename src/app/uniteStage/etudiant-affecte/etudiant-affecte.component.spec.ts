import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantAffecteComponent } from './etudiant-affecte.component';

describe('EtudiantAffecteComponent', () => {
  let component: EtudiantAffecteComponent;
  let fixture: ComponentFixture<EtudiantAffecteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantAffecteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantAffecteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
