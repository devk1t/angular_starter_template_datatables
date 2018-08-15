import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable/datatable.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DatatableComponent],
  exports: [DatatableComponent]
})
export class TableModule { }
