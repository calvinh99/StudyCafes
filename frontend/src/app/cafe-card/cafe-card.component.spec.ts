import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeCardComponent } from './cafe-card.component';

describe('CafeCardComponent', () => {
  let component: CafeCardComponent;
  let fixture: ComponentFixture<CafeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CafeCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CafeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
