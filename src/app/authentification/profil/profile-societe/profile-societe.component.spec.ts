import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSocieteComponent } from './profile-societe.component';

describe('ProfileSocieteComponent', () => {
  let component: ProfileSocieteComponent;
  let fixture: ComponentFixture<ProfileSocieteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSocieteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
