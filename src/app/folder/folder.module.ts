import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FolderPageRoutingModule } from './folder-routing.module';

import { AmbienteComponent } from './ambiente/ambiente.component';
import { EmbarcadoComponent } from './embarcado/embarcado.component';
import { PessoaComponent } from './pessoa/pessoa.component';

import { IonicModule } from '@ionic/angular';
import { FolderPage } from './folder.page';

@NgModule({
  declarations: [
    AmbienteComponent,
    EmbarcadoComponent,
    PessoaComponent,
    FolderPage
  ],
  imports: [
    CommonModule,
    FolderPageRoutingModule,
    FormsModule,
    IonicModule
  ],
  exports:[
  ]
})
export class FolderModule { }
