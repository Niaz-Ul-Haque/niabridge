import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { BridgeId } from '../bridge';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  bridges: Array<BridgeId>;

  constructor(
    private dataService: DataManagerService
  ) {}

 
  trackByBridges(index: number, bridge: BridgeId): string {
    return bridge.id;
  }

  ngOnInit(): void {
    this.dataService.getBridges().subscribe(data => this.bridges = data);
  }
}
