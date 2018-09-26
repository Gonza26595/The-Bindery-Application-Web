import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from '../app/shared/shared.module';
import { MainScreenModule } from '../app/main-screen/main-screen.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { NewsScreenModule } from './news-detail-screen/news-screen.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentCreatorModule } from './content-creator/content-creator.module';
import { HttpClientModule } from '../../node_modules/@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ContentCreatorModule,
    MainScreenModule,
    NewsScreenModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
