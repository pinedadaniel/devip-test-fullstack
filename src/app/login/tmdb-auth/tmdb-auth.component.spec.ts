import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmdbAuthComponent } from './tmdb-auth.component';

describe('TmdbAuthComponent', () => {
  let component: TmdbAuthComponent;
  let fixture: ComponentFixture<TmdbAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmdbAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmdbAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
