import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableComponent} from './components/table/table.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RowComponent} from './components/row/row.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';

@NgModule({
  declarations: [TableComponent, RowComponent],
  imports: [CommonModule, ReactiveFormsModule, Ng2SmartTableModule ],
  exports: [TableComponent]
})
export class TableModule {
}
