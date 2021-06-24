import { Component, OnInit } from '@angular/core';
import { Ambiente } from 'src/app/models/ambiente.model';
import { AmbienteService } from './ambiente.service';
import { AlertController } from '@ionic/angular';

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
    public alertController: AlertController) { }
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

}
