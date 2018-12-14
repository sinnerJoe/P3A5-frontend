import { Component, OnInit, Output, Input, EventEmitter, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { ProcessedImage } from 'src/app/ProcessedImage';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})


export class ImageListComponent implements OnInit {



  @Output()
  chageImageList = new EventEmitter<DisplayedType>();

  @Input('images')
  set inputPictures(imgs: DisplayedType) {
    this.images = imgs;
  }

  @ViewChild("lineScroller")
  lineScroller: ElementRef;

  @ViewChildren("miniature")
  miniatures: QueryList<ElementRef>;

  selectedIndex: number = -1;

  images: DisplayedType = [
    '../../../../../assets/img/manuscript.jpg',
    '../../../../../assets/img/manuscript2.jpg',
    '../../../../assets/img/manuscript.jpg',
    '../../../../../assets/img/manuscript.jpg',
    '../../../../../assets/img/manuscript2.jpg',
    '../../../../assets/img/manuscript.jpg',
    '../../../../../assets/img/manuscript.jpg',
    '../../../../../assets/img/manuscript2.jpg',
    '../../../../assets/img/manuscript.jpg',
  ];

  constructor() { }

  ngOnInit() {
  }

  nextClick() {
    if (this.selectedIndex === -1 && this.images.length != 0) {
      this.selectedIndex = 0;
    } else if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = -1;
    } else this.selectedIndex++;
    this.getMiniatureXPosition(this.selectedIndex)
  }
  prevClick() {
    if (this.selectedIndex === -1 && this.images.length != 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
    this.getMiniatureXPosition(this.selectedIndex)
  }

  get horizontalScroll(){
    console.log("SCROLLER ")
    console.log( this.lineScroller.nativeElement)
    for(var i in this.lineScroller.nativeElement)
      if(i.match(/.*scroll.*/))
        console.log(i + " " + this.lineScroller.nativeElement[i])
    console.log( this.lineScroller.nativeElement.scrollLeftMax)

    return this.lineScroller.nativeElement.scrollLeft
  }

  set horizontalScroll(value){

    this.lineScroller.nativeElement.scrollTo(value)
    console.log("SCROLLER " + this.lineScroller)
    this.lineScroller.nativeElement.scrollLeft = value
  }

  getWidth(n: ElementRef){
    return n.nativeElement.width
  }

  adjustScroller(index){
    if(index == -1)
      index = this.images.length
    const pos = this.getMiniatureXPosition(index);
    const currentScroll = this.horizontalScroll
    const parentWidth = this.getWidth(this.lineScroller)
    // console.log(this.miniatures.toArray());
    console.log(currentScroll)
    const childWidth = this.getWidth(this.miniatures.toArray()[index])
    if(currentScroll + parentWidth - childWidth < pos ||
      currentScroll - childWidth > pos){
      this.horizontalScroll = pos
    }
    // this.horizontalScroll = pos
    this.miniatures.toArray()[index].nativeElement.scrollIntoView();
  }

  getMiniatureXPosition(index){
    index = index == -1 ? this.images.length : index
    const pos = this.miniatures.toArray()[index].nativeElement.offsetLeft
    console.log(pos)

    return pos;
  }

  selectIndex(index){
    this.selectedIndex = index
    this.adjustScroller(index)
  }



}

type DisplayedType = string[] | ProcessedImage[];
