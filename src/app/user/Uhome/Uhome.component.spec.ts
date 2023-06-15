import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UhomeComponent } from './Uhome.component';

describe('HomeComponent', () => {
  let component: UhomeComponent;
  let fixture: ComponentFixture<UhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
