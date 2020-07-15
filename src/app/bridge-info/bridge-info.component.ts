import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataManagerService } from '../data-manager.service';
import { Bridge } from '../bridge';

@Component({
  selector: 'app-bridge-info',
  templateUrl: './bridge-info.component.html',
  styleUrls: ['./bridge-info.component.css']
})
export class BridgeInfoComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private dataService: DataManagerService
  ) {}

  bridge: Bridge;
  paramSubscription: Subscription;

  ngOnInit(): void {
    this.paramSubscription = this.route.params.subscribe(
      (params: Params) =>
        this.dataService.getBridge(params.id).subscribe(data =>
          this.bridge = data)
    );
  }

  ngOnDestroy(): void {
    if (this.paramSubscription) {
      this.paramSubscription.unsubscribe();
    }
  }
}