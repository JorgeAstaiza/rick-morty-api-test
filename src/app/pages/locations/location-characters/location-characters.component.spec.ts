import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationCharactersComponent } from './location-characters.component';

describe('LocationCharactersComponent', () => {
  let component: LocationCharactersComponent;
  let fixture: ComponentFixture<LocationCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationCharactersComponent]
    });
    fixture = TestBed.createComponent(LocationCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
