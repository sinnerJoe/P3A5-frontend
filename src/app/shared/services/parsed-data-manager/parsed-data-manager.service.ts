import { Injectable } from '@angular/core';
import { CalculatedImagesCache, CalculatedImage } from '../../models/AnalysisData';



@Injectable({
  providedIn: 'root'
})
export class ParsedDataManagerService {

  constructor() { }

  resetImages(){
    this.analysedImages = {}
  }

  addImage(path:string,positions: CalculatedImage){
    this.analysedImages[path] = positions
  }

  getImage(path: string){
    return this.analysedImages[path]
  }



  analysedImages: CalculatedImagesCache = {}
}
