import { SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Occupation } from 'src/app/models/occupation.model';

import { DropdownComponent } from './dropdown.component';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('occupationClicked', () => {
    it('should emit cleared', () => {
      // Arrange
      component.selectedValue =  new Occupation;
      component.selectedValue.id = 2;
      spyOn(component.selectedId, 'emit');
     
      // Act
      component.occupationClicked();

      // Assert
      expect(component.selectedId.emit).toHaveBeenCalledWith(2);
    });
  });
});
