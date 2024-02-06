import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwbComponent } from './awb.component';

describe('AwbComponent', () => {
  let component: AwbComponent;
  let fixture: ComponentFixture<AwbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AwbComponent]
    });
    fixture = TestBed.createComponent(AwbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
