import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import * as _ from 'lodash';
import { BaseComponent } from './BaseComponent';
import { M } from '../service/M';
 
@Component({
    selector: 'gridComponent',
    template: `
      <ag-grid-angular 
          style="width:100%; height:100%;" 
          class="ag-theme-balham"
          [rowData]="rowData" 
          [columnDefs]="columnDefs"
          >
      </ag-grid-angular>
    `
  })
  export class GridComponent extends BaseComponent implements OnInit {
    columnDefs = [
        {headerName: 'ID', field: 'id' },
        {headerName: 'f1', field: 'f1' },
        {headerName: 'f2', field: 'f2' },
        {headerName: 'f3', field: 'f3'}
    ];

    rowData: any;

    constructor(m: M) {
      super(m);
    }

    ngOnInit() {

      this.rowData = _.times(1000, n => {
        return {
            id: n,
            f1: _.random(),
            f2: _.random(),
            f3: _.random()
        }
      });

      setInterval(_.bind(() => {
        // this.gridOptions.api.updateRowData({update: updates}
      }, this), 50);          
    }
  } 