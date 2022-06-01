import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register/register.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    RegisterComponent,
    RegisterFormComponent
  ],
    imports: [
        SharedModule,
        RegisterRoutingModule,
        ReactiveFormsModule
    ]
})
export class RegisterModule { }
