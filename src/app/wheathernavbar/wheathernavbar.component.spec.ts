import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WheathernavbarComponent } from './wheathernavbar.component';

describe('WheathernavbarComponent', () => {
  let component: WheathernavbarComponent;
  let fixture: ComponentFixture<WheathernavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WheathernavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WheathernavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
