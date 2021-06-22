import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderModule } from './folder.module';

import { PessoaComponent } from './pessoa/pessoa.component';
import { EmbarcadoComponent } from './embarcado/embarcado.component';
import { AmbienteComponent } from './ambiente/ambiente.component';

const routes: Routes = [
  {
    path: 'pessoa',
    component: PessoaComponent
  },
  {
    path: 'embarcado',
    component: EmbarcadoComponent
  },
  {
    path: 'ambiente',
    component: AmbienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
