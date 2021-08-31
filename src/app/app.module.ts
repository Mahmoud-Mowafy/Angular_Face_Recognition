import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CameraStreamingComponent } from './components/camera-streaming/camera-streaming.component';
import { FaceLogsComponent } from './components/face-logs/face-logs.component';

import{HttpClientModule} from "@angular/common/http"
import { FormsModule } from '@angular/forms';
import { FaceCardComponent } from './components/face-card/face-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CameraStreamingComponent,
    FaceLogsComponent,
    FaceCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
