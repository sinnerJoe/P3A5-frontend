import { Injectable } from '@angular/core';
import { CalculatedImagesCache, CalculatedImage } from '../../models/AnalysisData';



@Injectable({
  providedIn: 'root'
})
export class ParsedDataManagerService {

  constructor() { }

  resetImages(){
    this.analysedImages = {}
    this.selectedImage = null
  }

  addImage(path:string,positions: CalculatedImage){
    this.analysedImages[path] = positions
  }


  getImage(path?: string){
    if(path)
      return this.analysedImages[path]
    else
      return this.analysedImages[this.selectedImage]
  }



  selectedImage = null

  analysedImages: CalculatedImagesCache = {}
}
