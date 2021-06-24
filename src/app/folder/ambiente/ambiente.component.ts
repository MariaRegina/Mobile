import { Component, OnInit } from '@angular/core';
import { Ambiente } from 'src/app/models/ambiente.model';

import { AlertController } from '@ionic/angular';
import { AmbienteService } from './ambiente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ambiente',
  templateUrl: './ambiente.component.html',
})

export class AmbienteComponent implements OnInit {
  ambientes ?: Ambiente[];
  ambienteSelecionado ?: Ambiente;
  currentIndex = -1;
  detalharAmbiente = false;

  constructor(private ambienteService: AmbienteService, 
    public alertController: AlertController,
    private router: Router) { }
    ngOnInit() {
      this.habilitaLista();
    }
  
    habilitaLista(): void{
      this.ambienteService.getAll()
        .subscribe(
          data => {
            this.ambientes = data;
            this.currentIndex = 0;
            this.detalharAmbiente = false;
          },
          error => {
            console.log(error);
          });
    }
      
    detalhaAmbiente(ambiente): void{
      this.ambienteSelecionado = ambiente;
      this.detalharAmbiente = true;
      
      console.log('vai');
      console.log(this.ambienteSelecionado)
    }

    salvar(): void {
      this.ambienteService.update(this.ambienteSelecionado).subscribe(() => {
        alert("funcionou");
      },
      error => {
        alert("não funcionou");
      })
      console.log('teste');
    }
    deletar(): void {
      this.ambienteService.delete(this.ambienteSelecionado.id).subscribe(() => {
        alert("Removido com sucesso");
      },
      error => {
        alert("Não foi possivel remover.");
      }
      )
      console.log('teste');
    }

    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'Subtitle',
        message: 'This is an alert message.',
        buttons: ['OK']
      });

      await alert.present();
    }

    abrirmenu(): void{
      this.router.navigate([`/folder/embarcado`]);
    }

}
