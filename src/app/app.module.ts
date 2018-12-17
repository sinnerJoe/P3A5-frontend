import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HoverCanvasComponent } from './shared/components/hover-canvas/hover-canvas.component';
import { ImageListComponent } from './shared/components/image-list/image-list.component';
import { AnalyzedImageComponent } from './shared/components/analyzed-image/analyzed-image.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HoverCanvasComponent,
    ImageListComponent,
    AnalyzedImageComponent,
    SidebarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
