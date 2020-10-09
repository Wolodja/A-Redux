import { INCREMENT } from './actions';
import { NgRedux, select } from '@angular-redux/store';
import { Component } from '@angular/core';
import { Map } from 'immutable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-demo';
  @select(['counter']) counter;

  constructor(private ngRedux: NgRedux<Map<string, any>>) {
  }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }
}
