import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthUnitListComponent } from './health-unit-list.component';

describe('HealthUnitListComponent', () => {
  let component: HealthUnitListComponent;
  let fixture: ComponentFixture<HealthUnitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthUnitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthUnitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
