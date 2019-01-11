import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';



@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
  }

  get url(){
    // return this.route.url.pipe(map(url => window.location.host + url),
    // tap(v => console.log("url "  + v)))
    return window.location.host + window.location.pathname
  }

  get hasId(){

    const arg =  window.location.pathname
    console.log("Arg = " + arg)
    if(arg.includes("error") || arg.includes("page-not-found") || arg.length < 10)
      return false
    else
      return true;
  }
}
