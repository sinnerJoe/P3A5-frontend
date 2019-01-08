import { Component, OnInit, Input, HostListener, ViewChild, ElementRef } from '@angular/core';
import { AnalysisData } from '../../models/AnalysisData';
import { _getViewData } from '@angular/core/src/render3/state';

interface CalculatedPos {
  width: number,
  height: number,
  top: number,
  left: number
}

@Component({
  selector: "app-analyzed-image",
  templateUrl: "./analyzed-image.component.html",
  styleUrls: ["./analyzed-image.component.scss"]
})
export class AnalyzedImageComponent implements OnInit {

  imageLoaded: boolean = false;
  _image: string = "../../../../assets/img/placeholder.jpg";

  @Input()
  set image(value: string){
    this._image = value;
    this.imageLoaded = false;
  }

  get image(){
    return this._image;
  }

  @Input()
  set data(data: AnalysisData) {
    this._data = data
    console.log("SET DATA")
    console.log(data)
    if(this.imageLoaded)
      this.loadData();
  }



  lineRectangles: CalculatedPos[] = null
  blockRectangles: CalculatedPos[] = null
  footnote: CalculatedPos= null

  _data:AnalysisData;

  @ViewChild("displayedImage")
  displayedImage: ElementRef;

  get width(): number {
    const width = this.displayedImage.nativeElement.clientWidth;
    return width;
  }
  get height(): number {
    const height = this.displayedImage.nativeElement.clientHeight;
    return height;
  }

  sourceWidth = 0

  sourceHeight = 0

  // get visibleLines() {
  //   return this.data.lines.filter(val => val.displayed);
  // }

  loadData(){
    this.lineRectangles = this._data.lines.map((v) => this.makeRectangle(v))
    this.blockRectangles = this._data.blocks.map((v) => this.makeRectangle(v))
    console.log("FOOTNOTE " + this._data.footnote)
    console.log("DATA ")
    console.log(this._data)
    if(this._data.footnote)
      this.footnote = this.makeRectangle(this._data.footnote)
    else
      this.footnote = null
  }

  makeRectangle(val) {
    return {
      width: this.rectangleWidth(val.x1, val.x2),
      height: this.rectangleHeight(val.y1, val.y2),
      top: this.yPos(val.y1),
      left: this.xPos(val.x1),
    }
  }

  distance(pos1, pos2) {
    return Math.abs(pos1 - pos2);
  }

  rectangleWidth(x1, x2) {
    return (this.distance(x1, x2) / this.sourceWidth) * 100;
  }

  rectangleHeight(y1, y2) {
    return this.distance(y1, y2) / this.sourceHeight * 100;
  }

  xPos(x1) {
    return x1 / this.sourceWidth * 100;
  }

  yPos(y1) {
    return y1 / this.sourceHeight * 100;
  }

  constructor() {}

  ngOnInit() {



  }

  @HostListener("window:resize", ["$event"])
  onresize() {
    console.log("Initial: " + this.sourceWidth + " " + this.sourceHeight);
    console.log("Current: " + this.width + " " + this.height);
  }

  onImageLoad(event){
    this.sourceHeight = this.displayedImage.nativeElement.naturalHeight;
    this.sourceWidth = this.displayedImage.nativeElement.naturalWidth;
    this.imageLoaded = true;
    if(this._data)
      this.loadData();
    // this.data = {
    //   lines: [
    //     {
    //       x1: 600,
    //       y1: 2000,
    //       x2: 1800,
    //       y2: 1900,
    //       displayed: true
    //     },
    //     {
    //       x1: 500,
    //       y1: 2000,
    //       x2: 800,
    //       y2: 1900,
    //       displayed: true
    //     },
    //   ],
    //   blocks: [
    //     {
    //       x1: 300,
    //       y1: 1500,
    //       x2: 600,
    //       y2: 1600,
    //       displayed: true
    //     },
    //   ]
    // };
  }
}
