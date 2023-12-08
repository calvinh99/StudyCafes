import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeFullCardComponent } from './cafe-full-card.component';

describe('CafeFullCardComponent', () => {
  let component: CafeFullCardComponent;
  let fixture: ComponentFixture<CafeFullCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CafeFullCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CafeFullCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
