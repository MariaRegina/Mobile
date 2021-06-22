import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AutenticacaoPageRoutingModule } from './autenticacao-routing.module';
import { LoginComponent } from './login/login.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';

@NgModule({
  declarations: [
    LoginComponent,
    RecuperarSenhaComponent,
    CadastrarUsuarioComponent
  ],
  imports: [
    CommonModule,
    AutenticacaoPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthenticationPageModule { }
