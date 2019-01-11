import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take, switchMap } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { ProcessedImage } from '../../ProcessedImage';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-processed-images-page',
  templateUrl: './processed-images-page.component.html',
  styleUrls: ['./processed-images-page.component.scss']
})
export class ProcessedImagesPageComponent implements OnInit, OnDestroy {


  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private router: Router) { }

  loadedImages: ProcessedImage[]
  transactionId: string = null
  totalNr = null
  loadedNr = null
  loadingTimePassed = false
  sub: Subscription;
  ngOnInit() {
    setTimeout(()=> this.loadingTimePassed = true, 1000)
    var sub = this.route.params
      .subscribe((params: any) => {
        this.transactionId = params.id
        this.fetchData(params.id, sub)
      });
    this.sub = sub
  }

  fetchData(id, sub: Subscription){
    this.dataFetchObservable(id).subscribe((v: any) => {
      console.log("Value received");
      if (id !== this.transactionId)
        return;
      if(!v.success){
        if(sub)
          sub.unsubscribe()
        if(this.sub)
          this.sub.unsubscribe()
        this.router.navigate(['/', 'page-not-found'])
      }
      this.loadedImages = v.processedImages
      this.totalNr = v.total
      this.loadedNr = v.finished
      console.log(v);
      setTimeout(() => {
        if (v.finished < v.total) {
          this.fetchData(id,sub)
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

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
