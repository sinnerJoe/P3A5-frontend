import { Component, OnInit } from '@angular/core';
import {trigger,state,style} from '@angular/animations'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations:[trigger('sideMenuAnime',[state('close',style({display:'none'})),state('open',style({display:'block'}))])]
})  


export class SidebarComponent implements OnInit {
 

  constructor() { }
  ngOnInit() {
  }
  openCloseBase:string='open'
  openClose:string='close'
  hideAndShow():void{
    console.log(this.openClose)
    this.openClose=(this.openClose==='open')?'close':'open';
    this.openCloseBase=(this.openClose==='open')?'close':'open';

  }
}


