import {Component, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { BaseComponent } from './BaseComponent';
import { M } from '../service/M';

@Component({
    selector: 'component-selector',
    template: `
        <div class="header"> To Follow </div>
        <div *ngFor="let dItem of m.dashboard$ | async">
            <div class="ui mini item segment" 
                *ngIf="dItem.id != item.id"
                [ngClass]="{'inverted teal': dItem === choice}"
                (click)="select(dItem, $event); m.highlightInterrupt$.next()"
                (mouseover)="highlight(dItem)"> item #{{dItem.id}}</div>
        </div>
    `,
    styles: [
        `
            .item {
                color: black;
                padding: 0.2em;
            }

            .item:hover {
                background-color: lightblue;
            }
        `
    ]
  })
  export class ComponentSelector extends BaseComponent {
  
    choice: any;

    @Input()
    item: any;

    items: Array<any>;

    constructor(m: M) {
      super(m);        
      m.dashboard$.subscribe(items => this.items = items);
    }

    highlight = item => {
        this.m.highlight$.next(item);
    }

    select = (item, event) => {
        this.choice = item;
        event.stopPropagation();
        event.preventDefault();
    }

  }