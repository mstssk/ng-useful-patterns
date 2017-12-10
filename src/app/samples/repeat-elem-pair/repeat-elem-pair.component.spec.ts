import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatElemPairComponent } from './repeat-elem-pair.component';

describe('RepeatElemPairComponent', () => {
  let component: RepeatElemPairComponent;
  let fixture: ComponentFixture<RepeatElemPairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepeatElemPairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeatElemPairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
