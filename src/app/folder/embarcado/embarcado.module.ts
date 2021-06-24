import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { EmbarcadoComponent } from './embarcado.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [EmbarcadoComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), FormsModule ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [EmbarcadoComponent],
})
export class AppModule {}
