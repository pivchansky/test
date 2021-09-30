import {Component, OnInit} from '@angular/core';
import {TableService} from '../../services/table/table.service';
import {Cow} from '../../../../shared/models/cow.interface';

@Component({
  selector: 'app-table',
  styleUrls: ['./table.component.scss'],
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  public cows: Cow[];
  public settings: any;

  constructor(private readonly tableService: TableService) {}

  public ngOnInit(): void {
    this.loadCowData();

    this.settings = {
      columns: {
        type: {
          title: 'type'
        },
        ageInDays: {
          title: 'ageInDays'
        },
        animalId: {
          title: 'animalId'
        },
        cowId: {
          title: 'cowId'
        },
        daysInLactation: {
          title: 'daysInLactation'
        },
        deletable: {
          title: 'deletable'
        },
        endDate: {
          title: 'endDate'
        },
        eventId: {
          title: 'eventId'
        },
        healthIndex: {
          title: 'healthIndex'
        },
        lactationNumber: {
          title: 'lactationNumber'
        },
        minValueDateTime: {
          title: 'minValueDateTime'
        },
        reportingDateTime: {
          title: 'reportingDateTime'
        },
        startDateTime: {
          title: 'startDateTime'
        },
      }
    };
  }

  public loadCowData(): void {
    this.tableService.getData().subscribe(data => this.cows = data);
  }

  onDelete(cowId: number): void {
    this.tableService.delete(cowId).subscribe(res => {
      if (res) {
        this.cows = this.cows.filter(cowUnit => cowUnit.cowId !== cowId);
      }
    });
  }


}
