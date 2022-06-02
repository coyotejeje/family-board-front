import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicModule } from '../public/public.module';
import { ProtectedModule } from '../protected/protected.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpClientModule } from "@angular/common/http";
import { ToastrComponent } from './components/toastr/toastr.component';
import { AlertModule } from 'ngx-bootstrap/alert';




@NgModule({
  declarations: [
    NavbarComponent,
    PageNotFoundComponent,
    ToastrComponent,
    ],
  imports: [
    CommonModule,
    PublicModule,
    ProtectedModule,
    HttpClientModule,
    AlertModule.forRoot(),
  ],
  exports: [NavbarComponent, PageNotFoundComponent, ToastrComponent]
})
export class CoreModule { }
