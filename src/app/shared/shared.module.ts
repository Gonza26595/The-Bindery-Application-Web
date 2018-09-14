import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import {ToastModule} from 'primeng/toast';
import { StatusMessageComponent } from './status-message/status-message.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ToastModule,
  ],
  exports:[HeaderComponent, FooterComponent, StatusMessageComponent],
  declarations: [HeaderComponent, FooterComponent, StatusMessageComponent]
})
export class SharedModule { }
