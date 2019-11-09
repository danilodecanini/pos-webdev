import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { beerRoutes } from './pages/beer/beer-routing.module';

/**
 *  O App Routing module serve para o gerenciamento de rotas de toda a aplicação do Angular
 */

const routes: Routes = [
  {
    path: "",
    // component: LayoutComponent,
    children: [ 
      ...beerRoutes,
    ],
    // canActivate: [LoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

