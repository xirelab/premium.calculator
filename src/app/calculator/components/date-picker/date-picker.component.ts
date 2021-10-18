import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnChanges {

  model: NgbDateStruct | undefined;

  @Input() label: string = '';
  @Input() canClear: boolean = false;
  // @Output() selectedDate: EventEmitter<string> = new EventEmitter<string>();

  @Input() // date: NgbDateStruct | undefined;
  get insuranceDdate(): any {
    return this.model ?`${this.model.year}-${this.model.month}-this.model.day` : '';
  }
  // set insuranceDdate(value: string | undefined) {
  //     this.model = {
  //       "year"
  //     }
  // }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.canClear) {
      this.model = undefined;
    }
  }  
}
