import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { InsuranceDetails } from 'src/app/models/insurance-details.model';
import { CalculatorReducer } from 'src/app/store/calculator.reducer';
import { CalculatorState } from 'src/app/store/calculator.state';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NgbModule,
        RouterTestingModule,
        EffectsModule.forRoot([]),
        StoreModule.forRoot([]),
        StoreModule.forFeature('board', CalculatorReducer),
      ],
      declarations: [ CalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should dispatch on load', inject([Store], (store: Store<CalculatorState>) => {
      // Arrange
      spyOn(store, 'dispatch');

      // Act
      component.ngOnInit();

      // Assert
      expect(store.dispatch).toHaveBeenCalled();
    }));
  })

  describe('isReady', () => {
    it('should return true', () => {
      // Arrange
      let insuranceDetails = new InsuranceDetails();
      insuranceDetails.age = 36;
      insuranceDetails.deathCoverAmount = 10000;
      insuranceDetails.occupationId = 2;
      component.insuranceDetails = insuranceDetails;

      // Act
      const response = component.isReady;

      // Assert
      expect(response).toBeTruthy();
    });  

    it('should return fale', () => {
      // Arrange
      let insuranceDetails = new InsuranceDetails();
      insuranceDetails.age = 36;
      insuranceDetails.deathCoverAmount = 0;
      insuranceDetails.occupationId = 2;
      component.insuranceDetails = insuranceDetails;

      // Act
      const response = component.isReady;

      // Assert
      expect(response).toBeFalsy();
    });
  })

  describe('selectOccupation', () => {
    it('should set occupation id', () => {
      // Arrange
      let insuranceDetails = new InsuranceDetails();
      insuranceDetails.age = 36;
      insuranceDetails.deathCoverAmount = 10000;
      insuranceDetails.occupationId = 0;
      component.insuranceDetails = insuranceDetails;

      // Act
      const response = component.selectOccupation(2);

      // Assert
      expect(component.insuranceDetails.occupationId).toBe(2);
    }); 
  });

  describe('calculate', () => {
    it('should dispatch calculate', inject([Store], (store: Store<CalculatorState>) => {
      // Arrange
      spyOn(store, 'dispatch');

      // Act
      component.calculate();

      // Assert
      expect(store.dispatch).toHaveBeenCalled();
    }));
  });

  describe('clear', () => {
    it('should dispatch clear', inject([Store], (store: Store<CalculatorState>) => {
      // Arrange
      spyOn(store, 'dispatch');

      // Act
      component.clear();

      // Assert
      expect(store.dispatch).toHaveBeenCalled();
    }));
  });

  describe('cleared', () => {
    it('should clear', () => {
      // Arrange
      component.canClear = true;

      // Act
      component.cleared();

      // Assert
      expect(component.canClear).toBeFalsy();
    }); 
  });

});
