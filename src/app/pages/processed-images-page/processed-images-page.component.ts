import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take, switchMap } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { ProcessedImage } from '../../ProcessedImage';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-processed-images-page',
  templateUrl: './processed-images-page.component.html',
  styleUrls: ['./processed-images-page.component.scss']
})
export class ProcessedImagesPageComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private http: HttpClient) { }

  loadedImages: ProcessedImage[]
  transactionId: string = null
  totalNr = null
  loadedNr = null
  loadingTimePassed = false
  ngOnInit() {
    setTimeout(()=> this.loadingTimePassed = true, 1000)
    this.route.params
      .subscribe((params: any) => {
        this.transactionId = params.id
        this.fetchData(params.id)
      });
  }

  fetchData(id){
    this.dataFetchObservable(id).subscribe((v: any) => {
      console.log("Value received");
      if (id !== this.transactionId)
        return;
      this.loadedImages = v.processedImages
      this.totalNr = v.total
      this.loadedNr = v.finished
      console.log(v);
      setTimeout(() => {
        if (v.finished < v.total) {
          this.fetchData(id)
        }
      }, 1000)
    })
  }

  dataFetchObservable(id){
    return this.http.get("/api/processed-data/" + id)
  }

  anyImagesLoaded(){
    return this.loadingTimePassed && !!this.totalNr && this.loadedImages && this.loadedImages.length
  }

}
