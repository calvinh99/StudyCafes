import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeReviewFormComponent } from './cafe-review-form.component';

describe('CafeReviewFormComponent', () => {
  let component: CafeReviewFormComponent;
  let fixture: ComponentFixture<CafeReviewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CafeReviewFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CafeReviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
