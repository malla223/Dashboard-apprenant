import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriFormateurComponent } from './inscri-formateur.component';

describe('InscriFormateurComponent', () => {
  let component: InscriFormateurComponent;
  let fixture: ComponentFixture<InscriFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriFormateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
