import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseClientLayoutComponent } from './base-client-layout.component';

describe('BaseClientLayoutComponent', () => {
  let component: BaseClientLayoutComponent;
  let fixture: ComponentFixture<BaseClientLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseClientLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseClientLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
