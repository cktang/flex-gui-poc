import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { BaseComponent } from './BaseComponent';
import { M } from '../service/M';

@Component({
    selector: 'component2',
    templateUrl: 'default.html'
  })
  export class Component2 extends BaseComponent {
  
    constructor(m: M) {
      super(m);
    }


  }