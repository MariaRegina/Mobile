import { Component, OnInit } from '@angular/core';
import { Embarcado } from 'src/app/models/embarcado.model';
import { EmbarcadoService } from './embarcado.service';
// import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-embarcado',
  templateUrl: './embarcado.component.html',
})

export class EmbarcadoComponent implements OnInit {
  // public form: FormGroup;
  embarcados ?: Embarcado[];
  embarcadoSelecionado ?: Embarcado;
  currentIndex = -1;
  detalharEmbarcado = false;

  constructor(private embarcadoService: EmbarcadoService, 
    // private formBuilder: FormBuilder,
    public alertController: AlertController) { }
  ngOnInit() {
    this.habilitaLista();
    // this.form = this.formBuilder.group({
    //   embarcadoSelecionado: {},
    // });
  }
  
  habilitaLista(): void{
    this.embarcadoService.getAll()
      .subscribe(
        data => {
          this.embarcados = data;
          this.currentIndex = 0;
          this.detalharEmbarcado = false;
        },
        error => {
          console.log(error);
        });
  }
      
  detalhaEmbarcado(embarcado): void{
    // this.form.value.embarcadoSelecionado = embarcado;
    this.embarcadoSelecionado = embarcado;
    this.detalharEmbarcado = true;
    
    console.log('vai');
    console.log(this.embarcadoSelecionado)
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
