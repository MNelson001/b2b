import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedHomesGalleryComponent } from './completed-homes-gallery.component';

describe('CompletedHomesGalleryComponent', () => {
  let component: CompletedHomesGalleryComponent;
  let fixture: ComponentFixture<CompletedHomesGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedHomesGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedHomesGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
