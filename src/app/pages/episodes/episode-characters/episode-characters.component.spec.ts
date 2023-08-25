import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeCharactersComponent } from './episode-characters.component';

describe('EpisodeCharactersComponent', () => {
  let component: EpisodeCharactersComponent;
  let fixture: ComponentFixture<EpisodeCharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EpisodeCharactersComponent]
    });
    fixture = TestBed.createComponent(EpisodeCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
