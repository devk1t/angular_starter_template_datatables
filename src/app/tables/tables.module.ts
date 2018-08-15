import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data } from './data.table/data.table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Data.TableComponent]
})
export class TablesModule { }
