import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from '../app/shared/shared.module';
import { HeaderComponent } from '../app/shared/header/header.component';
import { MainScreenModule } from '../app/main-screen/main-screen.module';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { NewsDetailComponent } from './news-detail-screen/news-detail/news-detail.component';
import { SideBarComponent } from './news-detail-screen/side-bar/side-bar.component';
import { NewsScreenModule } from './news-detail-screen/news-screen.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NewsDetailComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    MainScreenModule,
    NewsScreenModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
