import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html'
})
export class RecuperarSenhaComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  recuperarSenha(){
    console.log('senha recuperada');
  }

}
