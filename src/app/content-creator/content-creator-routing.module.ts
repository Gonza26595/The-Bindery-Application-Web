import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanActivate } from "@angular/router";
import { ContentCreateComponent } from './components/content-create/content-create.component';



const routes : Routes = [
  {path:"content/create",component:ContentCreateComponent},
]


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class ContentCreatorRoutingModule { }
