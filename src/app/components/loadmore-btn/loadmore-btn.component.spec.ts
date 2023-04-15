import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadmoreBtnComponent } from './loadmore-btn.component';

describe('LoadmoreBtnComponent', () => {
  let component: LoadmoreBtnComponent;
  let fixture: ComponentFixture<LoadmoreBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadmoreBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadmoreBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
