import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryImageListComponent } from './gallery-image-list.component';

describe('GalleryImageListComponent', () => {
  let component: GalleryImageListComponent;
  let fixture: ComponentFixture<GalleryImageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryImageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryImageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
