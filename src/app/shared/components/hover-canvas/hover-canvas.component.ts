import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { EmitterVisitorContext } from '@angular/compiler';

@Component({
  selector: 'app-hover-canvas',
  templateUrl: './hover-canvas.component.html',
  styleUrls: ['./hover-canvas.component.scss']
})
export class HoverCanvasComponent implements OnInit {

  @Output("imageUpload")
  imageUpload = new EventEmitter<string>();

  @ViewChild("imgInput")
  imgInput: ElementRef

  constructor() { }

  ngOnInit() {
  }

  imageSelected(){

    const path = this.imgInput.nativeElement.value
    console.log(path)
    this.imageUpload.emit(path)
    this.imgInput.nativeElement.value = ""
    
  }

  

}
