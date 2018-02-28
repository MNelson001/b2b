import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentHomesGalleryComponent } from './current-homes-gallery.component';

describe('CurrentHomesGalleryComponent', () => {
  let component: CurrentHomesGalleryComponent;
  let fixture: ComponentFixture<CurrentHomesGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentHomesGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentHomesGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
