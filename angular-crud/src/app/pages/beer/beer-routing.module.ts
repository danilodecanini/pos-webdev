import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BeerComponent } from './beer.component';
import { BeerFormComponent } from './beer-form/beer-form.component';
import { BeerDetalheComponent } from '../beer-detalhe/beer-detalhe.component';
import { BeerEditarComponent } from '../beer-editar/beer-editar.component';

/**
 *  Esse routing module é responsável por todas as rotas da nossa aplicação
 */

export const beerRoutes: Routes = [
  {
    path: 'beer',
    component: BeerComponent,
    data: { title: 'Lista de Cervejas' }
  },
  {
    path: 'beer-detalhe/:id',
    component: BeerDetalheComponent,
    data: { title: 'Detalhe das Cervejas' }
  },
  {
    path: 'beer-novo',
    component: BeerFormComponent,
    data: { title: 'Adicionar Cerveja' }
  },
  {
    path: 'beer-editar/:id',
    component: BeerEditarComponent,
    data: { title: 'Editar a Cerveja' }
  },
  { path: '',
    redirectTo: '/beer',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forChild(beerRoutes)],
  exports: [RouterModule]
})
export class BeerModule { }