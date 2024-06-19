import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetformComponent } from './petform.component';

describe('PetformComponent', () => {
  let component: PetformComponent;
  let fixture: ComponentFixture<PetformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
