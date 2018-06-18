import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { BaseComponent } from './BaseComponent';
import { M } from '../service/M';

@Component({
    selector: 'speedTest',
    templateUrl: 'default.html'
  })
  export class SpeedTestComponent extends BaseComponent {  

    constructor(m: M) {
      super(m);
    }

  }