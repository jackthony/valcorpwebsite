import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PradosProximamenteComponent } from './prados-proximamente.component';

describe('PradosProximamenteComponent', () => {
  let component: PradosProximamenteComponent;
  let fixture: ComponentFixture<PradosProximamenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PradosProximamenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PradosProximamenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
