import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenzCategoriesComponent } from './genz-categories.component';

describe('GenzCategoriesComponent', () => {
  let component: GenzCategoriesComponent;
  let fixture: ComponentFixture<GenzCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenzCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenzCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
