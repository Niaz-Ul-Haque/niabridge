import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Bridge } from '../bridge'
import { Bridges } from '../bridges'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  bridges: Array<Bridge> = Bridges;
  @Output() bridgeSelected: EventEmitter<Bridge> = new EventEmitter();
  constructor() { }

  onBridgeSelected(bridge: Bridge) : void {
    console.log("inside onBridgeSelected", bridge);
    this.bridgeSelected.emit(bridge);
  }

  ngOnInit(): void {
  }

}
