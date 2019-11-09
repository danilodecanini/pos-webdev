import { NgModule } from '@angular/core';
import { BeerModule } from './beer/beer.module';

/**
 *  Modulo responsável pelas declaracoes e imports das paginas da nossa aplicação, 
 *  ele importa o Modulo geral do nosso app, que é o Beer Module
 */

@NgModule({
  declarations: [
  ],
  imports: [
    BeerModule
  ],
  providers: [],
  bootstrap: []
})
export class PagesModule { }