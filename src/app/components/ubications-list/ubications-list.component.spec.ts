import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicationsListComponent } from './ubications-list.component';

describe('UbicationsListComponent', () => {
  let component: UbicationsListComponent;
  let fixture: ComponentFixture<UbicationsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UbicationsListComponent]
    });
    fixture = TestBed.createComponent(UbicationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
