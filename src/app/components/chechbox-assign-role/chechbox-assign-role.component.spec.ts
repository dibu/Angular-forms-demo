import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChechboxAssignRoleComponent } from './chechbox-assign-role.component';

describe('ChechboxAssignRoleComponent', () => {
  let component: ChechboxAssignRoleComponent;
  let fixture: ComponentFixture<ChechboxAssignRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChechboxAssignRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChechboxAssignRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
