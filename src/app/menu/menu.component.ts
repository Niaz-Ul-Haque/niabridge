import { Component, OnInit } from '@angular/core';
import { Bridge } from '../bridge'
import { Bridges } from '../bridges'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  bridges: Array<Bridge> = Bridges;

  ngOnInit(): void {
  }

}
