import { Component, OnInit } from '@angular/core';
import {trigger,state,style} from '@angular/animations'
import { ComponentsService } from './sidebar/components.service';
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

  
  principalArray=['rectangles','blocks','lines'];
  rectangles=['Rectangle 1','Rectangle 2','Rectangle 3'];
  blocks=['Block 1','Block 2','Block 3','Block 4'];
  lines=['Line 1','Line 2','Line 3','Line 4','Line 5','Line 6'];
  


  openCloseBase:string='open';
  openClose:string='close';
  hideAndShow():void{
    console.log(this.openClose)
    this.openClose=(this.openClose==='open')?'close':'open';
    this.openCloseBase=(this.openClose==='open')?'close':'open';

  }
  
}

export class Components {
  name: string;
  isVisibile = true;
}


