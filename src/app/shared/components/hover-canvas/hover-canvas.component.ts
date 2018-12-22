import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { EmitterVisitorContext } from '@angular/compiler';

@Component({
  selector: 'app-hover-canvas',
  templateUrl: './hover-canvas.component.html',
  styleUrls: ['./hover-canvas.component.scss']
})
export class HoverCanvasComponent implements OnInit {

  @Output("selectImages")
  selectImages = new EventEmitter<string>();

  @ViewChild("imgInput")
  imgInput: ElementRef

  constructor() { }

  ngOnInit() {
  }

  imageSelected(){

    const files: File[] = Array.from(this.imgInput.nativeElement.files);
    console.log(files)
    this.emitFiles(files)
    this.imgInput.nativeElement.value = ""

  }

  onDrop(event) {
    event.preventDefault();
    const files: File[] = Array.from(event.dataTransfer.files);
    console.log(files)
    this.emitFiles(files)

  }
  onDragOver(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  emitFiles(files: File[]){
    files.forEach(f => {
      const fr = new FileReader();
      fr.onload = () => {
        this.selectImages.emit(fr.result as string)
      }
      fr.readAsDataURL(f)
    })
  }

}
