import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoIconosComponent } from './info-iconos.component';

describe('InfoIconosComponent', () => {
  let component: InfoIconosComponent;
  let fixture: ComponentFixture<InfoIconosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoIconosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoIconosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
