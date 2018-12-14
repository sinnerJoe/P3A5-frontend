import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzedImageComponent } from './analyzed-image.component';

describe('AnalyzedImageComponent', () => {
  let component: AnalyzedImageComponent;
  let fixture: ComponentFixture<AnalyzedImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyzedImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzedImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
