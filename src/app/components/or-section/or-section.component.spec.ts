import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrSectionComponent } from './or-section.component';

describe('OrSectionComponent', () => {
  let component: OrSectionComponent;
  let fixture: ComponentFixture<OrSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
