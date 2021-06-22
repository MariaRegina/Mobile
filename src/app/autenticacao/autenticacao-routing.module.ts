import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'recuperar-senha',
    component: RecuperarSenhaComponent
  },
  {
    path: 'cadastrar-usuario',
    component: CadastrarUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AutenticacaoPageRoutingModule {}

