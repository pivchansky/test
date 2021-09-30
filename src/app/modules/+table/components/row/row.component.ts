import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Cow} from '../../../../shared/models/cow.interface';

@Component({
  selector: 'app-row',
  styleUrls: ['./row.component.scss'],
  templateUrl: './row.component.html',
})
export class RowComponent implements OnInit {
  @Input() cow!: Cow;

  public form!: FormGroup;
  private isEdit = false;

  @Output() delete = new EventEmitter<number>();

  constructor(private readonly fb: FormBuilder) {
  }

  public ngOnInit(): void {
    this.form = this.fb.group(
      {
        type: [this.cow.type || ''],
        ageInDays: [this.cow.ageInDays || ''],
        animalId: [this.cow.animalId || ''],
        daysInLactation: [this.cow.daysInLactation || ''],
        deletable: [this.cow.deletable || ''],
        endDate: [this.cow.endDate || ''],
        eventId: [this.cow.eventId || ''],
        healthIndex: [this.cow.healthIndex || ''],
        lactationNumber: [this.cow.lactationNumber || ''],
        minValueDateTime: [this.cow.minValueDateTime || ''],
        reportingDateTime: [this.cow.reportingDateTime || ''],
        startDateTime: [this.cow.startDateTime || ''],
      }
    );

    this.manageFormStatus();
  }

  private onDelete(): void {
    this.delete.emit(this.cow.cowId);
  }

  private manageFormStatus(): void {
    if (!this.isEdit) {
      this.form.disable();
      return;
    }
    if (this.form.disabled && !this.isEdit) {
      this.form.enable();
    }
  }
}
