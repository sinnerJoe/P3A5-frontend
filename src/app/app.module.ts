import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HoverCanvasComponent } from './shared/components/hover-canvas/hover-canvas.component';
<<<<<<< HEAD
import { ImageListComponent } from './shared/components/image-list/image-list.component';
import { AnalyzedImageComponent } from './shared/components/analyzed-image/analyzed-image.component';
=======
>>>>>>> 24fdec618fe0ee51dfa571c1134b70bafd86fc7d
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HoverCanvasComponent,
<<<<<<< HEAD
    ImageListComponent,
    AnalyzedImageComponent,
    SidebarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
=======
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
>>>>>>> 24fdec618fe0ee51dfa571c1134b70bafd86fc7d
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
