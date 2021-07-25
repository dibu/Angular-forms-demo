import { TestBed } from '@angular/core/testing';

import { BindChartService } from './bind-chart.service';

describe('BindChartService', () => {
  let service: BindChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BindChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
