import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderFooterComponent } from './under-footer.component';

describe('UnderFooterComponent', () => {
  let component: UnderFooterComponent;
  let fixture: ComponentFixture<UnderFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
