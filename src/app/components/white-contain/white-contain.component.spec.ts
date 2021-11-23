import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteContainComponent } from './white-contain.component';

describe('WhiteContainComponent', () => {
  let component: WhiteContainComponent;
  let fixture: ComponentFixture<WhiteContainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhiteContainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteContainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
