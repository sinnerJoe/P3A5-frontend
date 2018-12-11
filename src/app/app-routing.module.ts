import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HoverCanvasComponent } from './shared/components/hover-canvas/hover-canvas.component';

const routes: Routes = [
  {
    path: "**",
    component: HoverCanvasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
