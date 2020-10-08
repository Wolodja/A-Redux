import { INCREMENT } from './actions';
import { NgRedux, select } from '@angular-redux/store';
import { Component } from '@angular/core';
import { IAppState } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-demo';
  @select('counter') counter;
  @select(['messaging', 'newMessaging']) newMessages;
  @select((s: IAppState) => s.messaging.newMessages) newMessagesCount;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }
}
