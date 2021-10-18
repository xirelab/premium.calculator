import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { RouterModule, Routes } from '@angular/router';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorBannerComponent } from './components/error-banner/error-banner.component';

const routes: Routes = [{
  path: '',
  component: CalculatorComponent
}];

@NgModule({
  declarations: [
    CalculatorComponent,
    DatePickerComponent,
    DropdownComponent,
    ErrorBannerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule.forChild(routes)
  ]
})
export class CalculatorModule { }
