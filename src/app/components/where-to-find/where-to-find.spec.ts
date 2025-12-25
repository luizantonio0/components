import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereToFind } from './where-to-find';

describe('WhereToFind', () => {
  let component: WhereToFind;
  let fixture: ComponentFixture<WhereToFind>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhereToFind]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhereToFind);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
