import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverCanvasComponent } from './hover-canvas.component';

describe('HoverCanvasComponent', () => {
  let component: HoverCanvasComponent;
  let fixture: ComponentFixture<HoverCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoverCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
