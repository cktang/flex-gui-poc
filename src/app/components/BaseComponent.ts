import { M } from "../service/M";
import { Component, Input } from '@angular/core';
import { Subject, interval, Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
    selector:'base-component',
    templateUrl: 'default.html',
    styles: [
        `
            .ui.segment {
                padding: 0em 0.5em;
            }

            .gridster-item-inner.active {
                border: 5px solid black !important;
            }

            .gridster-item-inner.hover {
                border: 5px solid lightgreen;
            }

            .gridster-item-inner.highlight {
                opacity: 0.5;
            }
        `
    ]
})
export class BaseComponent {

    @Input() 
    item: any;

    update$: Observable<string>;

    //whether selected item is this item
    status: {
        isSelected: boolean,
        isHover: boolean,
        isHighlight: boolean
    }

    constructor(protected m: M) {
        this.status = {
            isSelected: false,
            isHover: false,
            isHighlight: false
        }

        this.update$ = interval(1000).pipe(map(n => `${this.item.id} - ${n}`));

        let isMe = item => this.item && item && (item.id === this.item.id);
        m.active$.subscribe(item => this.status.isSelected = isMe(item));
        m.hoverObservable$.subscribe(item => this.status.isHover = isMe(item));
        m.hightlightObservable$.subscribe(item => this.status.isHighlight = isMe(item));
    }

}