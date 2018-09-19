import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryImageCreateComponent } from './gallery-image-create.component';

describe('GalleryImageCreateComponent', () => {
  let component: GalleryImageCreateComponent;
  let fixture: ComponentFixture<GalleryImageCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryImageCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryImageCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
