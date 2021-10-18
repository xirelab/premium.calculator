import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { CalculatorReducer } from 'src/app/store/calculator.reducer';
import { CalculatorState } from 'src/app/store/calculator.state';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        RouterTestingModule,
        EffectsModule.forRoot([]),
        StoreModule.forRoot([]),
        StoreModule.forFeature('board', CalculatorReducer),
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('login', () => {
    it('should dispatch login', inject([Store], (store: Store<CalculatorState>) => {
      // Arrange
      component.username = 'test';
      component.password = 'test';
      spyOn(store, 'dispatch');

      // Act
      component.login();

      // Assert
      expect(store.dispatch).toHaveBeenCalled();
    }));
  })
});
