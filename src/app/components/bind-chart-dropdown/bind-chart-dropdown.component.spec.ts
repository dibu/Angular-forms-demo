import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindChartDropdownComponent } from './bind-chart-dropdown.component';

describe('BindChartDropdownComponent', () => {
  let component: BindChartDropdownComponent;
  let fixture: ComponentFixture<BindChartDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindChartDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindChartDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
