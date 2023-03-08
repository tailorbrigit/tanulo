import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TauloComponent } from './taulo.component';

describe('TauloComponent', () => {
  let component: TauloComponent;
  let fixture: ComponentFixture<TauloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TauloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TauloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
