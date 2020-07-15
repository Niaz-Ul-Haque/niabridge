import { Component, OnInit, Input } from '@angular/core';
import { Bridge } from '../bridge';

function prettyPrrintDimension(value: number | null) : string {
  return value ? `${value} m` : `unknown`;
}


@Component({
  selector: 'app-bridge-info-panel',
  templateUrl: './bridge-info-panel.component.html',
  styleUrls: ['./bridge-info-panel.component.css']
})
export class BridgeInfoPanelComponent implements OnInit {

  @Input() bridge: Bridge;
  constructor() { }

  ngOnInit(): void {
  }

  width() : string {
    return prettyPrrintDimension(this.bridge.width)
  }

  length() : string {
    return prettyPrrintDimension(this.bridge.length)
  }

  age(): number {
    const currYear = (new Date()).getFullYear();
    return currYear - this.bridge.year;
  }

}
