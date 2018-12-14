import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HoverCanvasComponent } from './shared/components/hover-canvas/hover-canvas.component';
import { ImageListComponent } from './shared/components/image-list/image-list.component';
import { AnalyzedImageComponent } from './shared/components/analyzed-image/analyzed-image.component';

const routes: Routes = [
  {
    path: "test",
    component: AnalyzedImageComponent
  },
  {
    path: "**",
    component: ImageListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
