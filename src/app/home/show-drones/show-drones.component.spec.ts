import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDronesComponent } from './show-drones.component';

describe('ShowDronesComponent', () => {
  let component: ShowDronesComponent;
  let fixture: ComponentFixture<ShowDronesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDronesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDronesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
