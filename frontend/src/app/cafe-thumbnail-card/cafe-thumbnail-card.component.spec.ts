import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeThumbnailCardComponent } from './cafe-thumbnail-card.component';

describe('CafeThumbnailCardComponent', () => {
  let component: CafeThumbnailCardComponent;
  let fixture: ComponentFixture<CafeThumbnailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CafeThumbnailCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CafeThumbnailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
