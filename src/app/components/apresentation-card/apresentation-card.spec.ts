import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApresentationCard } from './apresentation-card';

describe('ApresentationCard', () => {
  let component: ApresentationCard;
  let fixture: ComponentFixture<ApresentationCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApresentationCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApresentationCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
