import { Injectable } from "@angular/core";
import { Observable, Subject, BehaviorSubject, merge } from "rxjs";
import { distinctUntilChanged, skipUntil, filter, mergeMap, takeUntil, mapTo, map } from "rxjs/operators";

@Injectable()
export class M {

    //mouse over item
    hover$: Subject<any>;
    hoverObservable$: Observable<any>;

    //selected item
    active$: Subject<any>;

    //item to be highlighted
    highlight$: BehaviorSubject<any>;
    highlightInterrupt$: BehaviorSubject<any>;
    hightlightObservable$: Observable<any>

    //dashboard state
    dashboard$: BehaviorSubject<any>;

    constructor() {
        this.dashboard$ = new BehaviorSubject<any>({});
        this.active$ = new Subject<any>();
        this.hover$ = new Subject<any>();
        this.highlight$ = new BehaviorSubject<any>({});
        this.highlightInterrupt$ = new BehaviorSubject<any>({});

        let stopSignal$ = this.highlightInterrupt$.pipe(map(n => { return {id: -1} }))
        this.hightlightObservable$ = merge(this.highlight$, stopSignal$);

        this.hightlightObservable$.subscribe(console.log);

        this.hoverObservable$ = this.hover$.pipe(distinctUntilChanged());
    }
}