import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifListeoffresComponent } from './verif-listeoffres.component';

describe('VerifListeoffresComponent', () => {
  let component: VerifListeoffresComponent;
  let fixture: ComponentFixture<VerifListeoffresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifListeoffresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifListeoffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
