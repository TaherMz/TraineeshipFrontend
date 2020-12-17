import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRecruteursComponent } from './liste-recruteurs.component';

describe('ListeRecruteursComponent', () => {
  let component: ListeRecruteursComponent;
  let fixture: ComponentFixture<ListeRecruteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeRecruteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeRecruteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
