import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerseDetailComponent } from './verse-detail.component';

describe('VerseDetailComponent', () => {
  let component: VerseDetailComponent;
  let fixture: ComponentFixture<VerseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerseDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
