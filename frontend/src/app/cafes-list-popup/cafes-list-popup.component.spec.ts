import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafesListPopupComponent } from './cafes-list-popup.component';

describe('CafesListPopupComponent', () => {
  let component: CafesListPopupComponent;
  let fixture: ComponentFixture<CafesListPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CafesListPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CafesListPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
