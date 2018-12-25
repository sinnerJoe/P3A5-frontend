import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take, switchMap } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { ProcessedImage } from '../../ProcessedImage';
@Component({
  selector: 'app-processed-images-page',
  templateUrl: './processed-images-page.component.html',
  styleUrls: ['./processed-images-page.component.scss']
})
export class ProcessedImagesPageComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private http: HttpClient) { }

  loadedImages: ProcessedImage[]

  ngOnInit() {
    this.route.params
      .pipe( take(1), switchMap(v =>
          this.http.get("/api/processed-data/" + v.id)
        ) )
      .subscribe((v: any) => {
        console.log("Value received");
        console.log(v);
        this.loadedImages = v.processedImages;
      });
  }

}
