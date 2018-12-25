import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessedImagesPageComponent } from './processed-images-page.component';

describe('ProcessedImagesPageComponent', () => {
  let component: ProcessedImagesPageComponent;
  let fixture: ComponentFixture<ProcessedImagesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessedImagesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessedImagesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
