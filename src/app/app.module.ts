import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/components/calculator/calculator.component';
import { DatePickerComponent } from './calculator/components/date-picker/date-picker.component';
import { CalculatorEffects } from './store/calculator.effects';
import { CalculatorReducer } from './store/calculator.reducer';
import { FormsModule } from '@angular/forms';
import { NumberOnlyDirective } from './directives/numbers-only.directive';
import { RouterTestingModule } from '@angular/router/testing';

@NgModule({
  declarations: [
    AppComponent,
    NumberOnlyDirective,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,    
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),   // for local running
    EffectsModule.forRoot([]),
    StoreModule.forRoot([]),
    EffectsModule.forFeature([CalculatorEffects]),
    StoreModule.forFeature('calculator', CalculatorReducer),
    StoreModule.forRoot(CalculatorReducer, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      }
    }),
    // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
