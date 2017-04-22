/* tslint:disable:max-classes-per-file */
import {Component} from '@angular/core';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/reduce';

export class TileData {
  num: number;
  getColor: () => string;
}

@Component({
  selector: 'app-shell',
  styles: [`
    .scroll-container {
      height: 100vh;
    }

    .tile {
      box-sizing: border-box;
      color: grey;
      font-size: 9px;
      display: inline-flex;
      height: 50px;
      width: 50px;
      overflow: hidden;
      border-radius: 100px;
    }

    /deep/ .od-scroll-container {
      margin: 0 auto;
      display: flex;
      justify-content: center;
    }
  `],
  template: `
    <od-virtual-scroll class="scroll-container" [vsData]="data$" [vsOptions]="options$">
      <ng-template let-item>
        <div class="tile" [style.background]="item.getColor()">
          <!--{{item.num}}-->
        </div>
      </ng-template>
    </od-virtual-scroll>
  `
})
export class AppComponent {
  private _rndNum = () => Math.floor(Math.random() * 255);

  private _seed: TileData[] = [];

  data$: Observable<TileData[]> = Observable.range(0, 60000).reduce((acc, num) => {
    const bgColor = `rgba(${this._rndNum()}, ${this._rndNum()}, ${this._rndNum()}, ${Math.random()})`;
    acc.push({num, getColor: () => bgColor});
    return acc;
  }, this._seed);

  options$ = Observable.of({itemWidth: 56, itemHeight: 53, numAdditionalRows: 1});
}
