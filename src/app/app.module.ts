import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HoverCanvasComponent } from './shared/components/hover-canvas/hover-canvas.component';
import { ImageListComponent } from './shared/components/image-list/image-list.component';
import { AnalyzedImageComponent } from './shared/components/analyzed-image/analyzed-image.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HttpClientModule } from "@angular/common/http";
import { ProcessedImagesPageComponent } from './pages/processed-images-page/processed-images-page.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ClipboardModule } from "ngx-clipboard";
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HoverCanvasComponent,
    ImageListComponent,
    AnalyzedImageComponent,
    MainPageComponent,
    ProcessedImagesPageComponent,
    ErrorPageComponent,
    NotFoundPageComponent
  ],
  imports: [HttpClientModule, ClipboardModule,  FormsModule, BrowserModule, AppRoutingModule, StoreModule.forRoot(reducers, { metaReducers }), EffectsModule.forRoot([AppEffects])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
