import { Component, OnInit } from '@angular/core';
import { Ambiente } from 'src/app/models/ambiente.model';
import { AmbienteService } from './ambiente.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ambiente',
  templateUrl: './ambiente.component.html',
})

export class AmbienteComponent implements OnInit {
  public form: FormGroup;
  ambientes ?: Ambiente[];
  ambienteSelecionado ?: Ambiente;
  currentIndex = -1;
  detalharAmbiente = false;

  constructor(private ambienteService: AmbienteService, 
    private formBuilder: FormBuilder,
    public alertController: AlertController) { }
    
  ngOnInit() {
    this.habilitaLista();
    this.form = this.formBuilder.group({
      ambienteSelecionado: {},
    });
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
    this.form.value.ambienteSelecionado = ambiente;
    this.ambienteSelecionado = ambiente;
    this.detalharAmbiente = true;
    console.log('vai');
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
