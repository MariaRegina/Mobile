import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html'
})
export class CadastrarUsuarioComponent implements OnInit {

  constructor() { }

  public emailEnviado = false;

  ngOnInit() {}

  cadastrarUsuario(){
    console.log('cadastro de usuario');
  }

}
