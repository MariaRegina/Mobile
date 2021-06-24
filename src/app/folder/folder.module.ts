import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FolderPageRoutingModule } from './folder-routing.module';

import { AmbienteComponent } from './ambiente/ambiente.component';
import { EmbarcadoComponent } from './embarcado/embarcado.component';
import { PessoaComponent } from './pessoa/pessoa.component';

import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AmbienteComponent,
    EmbarcadoComponent,
    PessoaComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    FolderPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //MenuComponent
  ],
  exports:[
    //MenuComponent
  ]
})
export class FolderModule { }
