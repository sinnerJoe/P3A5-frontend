import { Component, OnInit } from '@angular/core';
import {trigger,state,style} from '@angular/animations'
import { ParsedDataManagerService } from '../../services/parsed-data-manager/parsed-data-manager.service';
import { Rectangle, CalculatedPos } from '../../models/AnalysisData';
@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
  animations: [
    trigger("sideMenuAnime", [
      state("close", style({ display: "none" })),
      state(
        "open",
        style({
          display: "block"
        })
      )
    ])
  ]
})
export class SidebarComponent implements OnInit {
  constructor(private dataService: ParsedDataManagerService) {}
  ngOnInit() {}

  principalArray = ["rectangles", "blocks", "lines"];
  get calculatedImage() {
    return this.dataService.getImage();
  }

  get calculatedImageSelected() {
    return !!this.calculatedImage;
  }

  get lines() {
    return this.calculatedImage.lines;
  }

  get blocks() {
    return this.calculatedImage.blocks;
  }

  get words() {
    return this.calculatedImage.words;
  }

  get paragraphs() {
    return this.calculatedImage.paragraphs;
  }

  get footnote() {
    return this.calculatedImage.footnote;
  }

  get sidenotes() {
    return this.calculatedImage.sidenotes;
  }

  get header() {
    return this.calculatedImage.header;
  }

  changeAllVisibility(){
    this.calculatedImage.allVisible = !this.calculatedImage.allVisible
  }
  changeLinesVisibility(){
    this.calculatedImage.linesVisible = !this.calculatedImage.linesVisible
  }
  changeParagraphsVisibility(){
    this.calculatedImage.paragraphsVisible = !this.calculatedImage.paragraphsVisible
  }
  changeBlocksVisibility(){
    this.calculatedImage.blocksVisible = !this.calculatedImage.blocksVisible
  }
  changeWordsVisibility(){
    this.calculatedImage.wordsVisible = !this.calculatedImage.wordsVisible
  }

  changeFootnoteVisibility(){
    this.calculatedImage.footnoteVisible = !this.calculatedImage.footnoteVisible
  }
  changeHeaderVisibility(){
    this.calculatedImage.headerVisible = !this.calculatedImage.headerVisible
  }

  changeSidenotesVisibility(){
    this.calculatedImage.sidenotesVisible = !this.calculatedImage.sidenotesVisible
  }

  get allVisible(){
    return this.calculatedImage.allVisible
  }
  get linesVisible(){
    return this.calculatedImage.linesVisible
  }
  get wordsVisible(){
    return this.calculatedImage.wordsVisible
  }
  get paragraphsVisible(){
    return this.calculatedImage.paragraphsVisible
  }
  get blocksVisible(){
    return this.calculatedImage.blocksVisible
  }
  get footnoteVisible(){
    return this.calculatedImage.footnoteVisible
  }

  get sidenotesVisible(){
    return this.calculatedImage.footnoteVisible
  }
  get headerVisible(){
    return this.calculatedImage.headerVisible
  }



  changeRectangleVisibility(rec: CalculatedPos){
    rec.visible = !rec.visible
  }



  openCloseBase: string = "open";
  openClose: string = "close";
  hideAndShow(): void {
    console.log(this.openClose);
    this.openClose = this.openClose === "open" ? "close" : "open";
    this.openCloseBase = this.openClose === "open" ? "close" : "open";
  }
}



