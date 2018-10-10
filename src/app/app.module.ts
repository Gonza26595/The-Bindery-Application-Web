import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MainScreenModule } from './main-screen/main-screen.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { NewsScreenModule } from './news-detail-screen/news-screen.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentCreatorModule } from './content-creator/content-creator.module';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import {AngularFireModule} from '@angular/fire'
import {AngularFireDatabaseModule} from '@angular/fire/database'
import { AngularFirestoreModule } from '../../node_modules/@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { FirebaseService } from './shared/firebase/firebase.service';






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
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase,'prueba-4db59'),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule
    
  ],
  providers: [
     
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
