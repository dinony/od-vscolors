/* tslint:disable:max-classes-per-file */
import {Component} from '@angular/core';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/reduce';

export class CellData {
  num: number;
  getColor: () => string;
}

@Component({
  selector: 'app-shell',
  styleUrls: ['src/app.component.css'],
  template: `
    <od-virtualscroll class="cell-container" [vsData]="data$" [vsOptions]="options$">
      <ng-template let-item>
        <div class="cell" [style.background]="item.getColor()">
          <!--{{item.num}}-->
        </div>
      </ng-template>
    </od-virtualscroll>`
})
export class AppComponent {
  private _rndNum = () => Math.floor(Math.random() * 255);

  private _seed: CellData[] = [];

  data$: Observable<CellData[]> = Observable.range(0, 60000).reduce((acc, num) => {
    const bgColor = `rgba(${this._rndNum()}, ${this._rndNum()}, ${this._rndNum()}, ${Math.random()})`;
    acc.push({num, getColor: () => bgColor});
    return acc;
  }, this._seed);

  options$ = Observable.of({itemWidth: 53, itemHeight: 52, numAdditionalRows: 1});
}
