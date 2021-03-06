import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicModule } from '../public/public.module';
import { ProtectedModule } from '../protected/protected.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpClientModule } from "@angular/common/http";




@NgModule({
  declarations: [
    NavbarComponent,
    PageNotFoundComponent
    ],
  imports: [
    CommonModule,
    PublicModule,
    ProtectedModule,
    HttpClientModule
  ],
  exports: [NavbarComponent, PageNotFoundComponent]
})
export class CoreModule { }
