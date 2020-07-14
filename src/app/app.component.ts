import { Component } from '@angular/core';
import { Bridge } from './bridge';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'niabridge';

  currentBridge:Bridge;

  handleBridgeChange(bridge: Bridge): void {
    console.log("in bridgeChange", bridge);
    this.currentBridge = bridge;
  }
}
