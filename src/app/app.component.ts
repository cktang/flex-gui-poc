import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { AgGridModule } from 'ag-grid-angular';
import {CompactType, DisplayGrid, GridsterConfig, GridsterItem, GridType} from 'angular-gridster2';

import * as _ from 'lodash';

import { Component1 } from './components/Component1';
import { Component2 } from './components/Component2';
import { GridComponent } from './components/GridComponent';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

    options: GridsterConfig;

    dashboard: Array<GridsterItem>;

    ngOnInit() {
        this.options = {
            gridType: GridType.Fit,
            compactType: CompactType.None,
            margin: 10,
            outerMargin: true,
            outerMarginTop: null,
            outerMarginRight: null,
            outerMarginBottom: null,
            outerMarginLeft: null,
            mobileBreakpoint: 640,
            minCols: 1,
            maxCols: 100,
            minRows: 1,
            maxRows: 100,
            maxItemCols: 100,
            minItemCols: 1,
            maxItemRows: 100,
            minItemRows: 1,
            maxItemArea: 2500,
            minItemArea: 1,
            defaultItemCols: 1,
            defaultItemRows: 1,
            fixedColWidth: 105,
            fixedRowHeight: 105,
            keepFixedHeightInMobile: false,
            keepFixedWidthInMobile: false,
            scrollSensitivity: 10,
            scrollSpeed: 20,
            enableEmptyCellClick: false,
            enableEmptyCellContextMenu: false,
            enableEmptyCellDrop: false,
            enableEmptyCellDrag: false,
            emptyCellDragMaxCols: 50,
            emptyCellDragMaxRows: 50,
            ignoreMarginInRow: false,
            draggable: {
                enabled: true,
            },
            resizable: {
                enabled: true,
            },
            swap: false,
            pushItems: true,
            disablePushOnDrag: false,
            disablePushOnResize: false,
            pushDirections: {north: true, east: true, south: true, west: true},
            pushResizeItems: true,
            displayGrid: DisplayGrid.OnDragAndResize,
            disableWindowResize: false,
            disableWarnings: false,
            scrollToNewItems: false
        };
        
        this.dashboard = [
            {cols: 2, rows: 1, y: 0, x: 0, component: this.getRandomComponent()},
            {cols: 2, rows: 2, y: 0, x: 2, component: this.getRandomComponent()},
            {cols: 1, rows: 1, y: 0, x: 4, component: this.getRandomComponent()},
            {cols: 1, rows: 1, y: 2, x: 5, component: GridComponent, title: "Grid"}
        ]; 
    }

    changedOptions() {
        if (this.options.api && this.options.api.optionsChanged) {
            this.options.api.optionsChanged();
        }
    }

    removeItem($event, item) {
        $event.preventDefault();
        $event.stopPropagation();
        this.dashboard.splice(this.dashboard.indexOf(item), 1);
    }

    addItem() {
        this.dashboard.push({x: 0, y: 0, cols: 1, rows: 1});
    }

    getRandomComponent = () => _([
        Component1,
        Component2,
        GridComponent
    ]).shuffle().first();

}