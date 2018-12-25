import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  unprocessedImages: string[] = []

  constructor(private http: HttpClient,
              private router: Router) { }

  ngOnInit() {
  }

  processImages(){
    this.http.post("/api/process-images", {
      images: this.unprocessedImages
    }).subscribe((response:{success: boolean, message?: string,  token?: string}) => {
      console.log("response is ")
      console.log(response)
      if(response.success){
        this.router.navigate(['/', response.token])

      } else {
        alert(response.message)
      }
    })
  }

  changeImageList(list){
    this.unprocessedImages = list

  }

}
