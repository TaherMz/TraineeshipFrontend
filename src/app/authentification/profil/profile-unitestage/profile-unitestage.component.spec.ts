import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUnitestageComponent } from './profile-unitestage.component';

describe('ProfileUnitestageComponent', () => {
  let component: ProfileUnitestageComponent;
  let fixture: ComponentFixture<ProfileUnitestageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileUnitestageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileUnitestageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
