import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Occupation } from 'src/app/models/occupation.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnChanges {  

  @Input() label: string = '';
  @Input() occupations: Occupation[] | null | undefined;
  @Input() canClear: boolean = false;
  @Output() cleared: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() selectedId: EventEmitter<number> = new EventEmitter<number>();

  selectedValue: Occupation | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.canClear) {
      this.selectedValue = undefined;
      this.canClear = false;
      this.cleared.emit(true);
    }
  }

  occupationClicked() {
    if (this.selectedValue && this.selectedValue.id) {
      this.selectedId.emit(this.selectedValue.id);
    }
  }

}
