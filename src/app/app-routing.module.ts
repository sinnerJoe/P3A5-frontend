import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HoverCanvasComponent } from './shared/components/hover-canvas/hover-canvas.component';
import { ImageListComponent } from './shared/components/image-list/image-list.component';
import { AnalyzedImageComponent } from './shared/components/analyzed-image/analyzed-image.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProcessedImagesPageComponent } from './pages/processed-images-page/processed-images-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [

  {
    path: "page-not-found",
    component: NotFoundPageComponent
  },
  {
    path: "error",
    component: ErrorPageComponent
  },
  {
    path: ":id",
    component: ProcessedImagesPageComponent,
    pathMatch: "full"
  },
  {
    path: "",
    component: MainPageComponent,
    pathMatch: "full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
