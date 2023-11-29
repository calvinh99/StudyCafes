import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafesQueryButtonComponent } from './cafes-query-button.component';

describe('CafesQueryButtonComponent', () => {
  let component: CafesQueryButtonComponent;
  let fixture: ComponentFixture<CafesQueryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CafesQueryButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CafesQueryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
