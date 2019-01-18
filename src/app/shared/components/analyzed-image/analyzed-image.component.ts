import { Component, OnInit, Input, HostListener, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { AnalysisData, CalculatedPos, CalculatedImage } from '../../models/AnalysisData';
import { _getViewData } from '@angular/core/src/render3/state';
import { ParsedDataManagerService } from '../../services/parsed-data-manager/parsed-data-manager.service';


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
    this.changeDetector.detectChanges()
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

  calculatedData: CalculatedImage

  set rectangles(value: CalculatedImage){
    this.calculatedData = value;
    this.paragraphs = value.paragraphs
    this.lines = value.lines
    this.words = value.words
    this.footnote = value.footnote
    this.sidenotes = value.sidenotes
    this.blocks = value.blocks
    this.header = value.header


    this.changeDetector.detectChanges();
  }
  paragraphs: CalculatedPos[] = null
  lines: CalculatedPos[] = null
  blocks: CalculatedPos[] = null
  words: CalculatedPos[] = null
  footnote: CalculatedPos= null
  sidenotes: CalculatedPos[] = []
  header: CalculatedPos = null
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
    const savedData = this.dataManager.getImage(this._image)
    if(savedData){
      this.rectangles = savedData

      return;
    }
    const rectanglesObj: CalculatedImage = {
      blocks: [],
      footnote: null,
      lines: [],
      paragraphs: [],
      sidenotes: [],
      words: [],
      header:null,
      allVisible: true,
      blocksVisible: true,
      footnoteVisible: true,
      headerVisible: true,
      linesVisible: true,
      paragraphsVisible: true,
      sidenotesVisible: true,
      wordsVisible: true
    }
    rectanglesObj.lines = this._data.lines.map((v) => this.makeRectangle(v))
    rectanglesObj.blocks = this._data.blocks.map((v) => this.makeRectangle(v))
    rectanglesObj.paragraphs = this._data.paragraphs.map((v) => this.makeRectangle(v))
    rectanglesObj.words = this._data.words.map((v) => this.makeRectangle(v))
    rectanglesObj.sidenotes = this._data.sidenotes.map((v)=> this.makeRectangle(v))

    if(this._data.header)
      rectanglesObj.header =  this.makeRectangle(this._data.header)

    if(this._data.footnote)
      rectanglesObj.footnote  = this.makeRectangle(this._data.footnote)

    this.rectangles = rectanglesObj
    this.dataManager.addImage(this.image, rectanglesObj)
    this.dataManager.selectedImage = this.image
  }

  makeRectangle(val) {
    return {
      width: this.rectangleWidth(val.x1, val.x2),
      height: this.rectangleHeight(val.y1, val.y2),
      top: this.yPos(val.y1),
      left: this.xPos(val.x1),
      visible: true
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

  constructor(
      public dataManager: ParsedDataManagerService,
    private changeDetector: ChangeDetectorRef
            ) {}

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
  }
}
