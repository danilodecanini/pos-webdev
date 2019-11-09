import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './core/layout/layout.component';
import { SidenavComponent } from './core/sidenav/sidenav.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { PagesModule } from './pages/pages.module';
import { HttpClientModule }    from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { BeerDetalheComponent } from './pages/beer-detalhe/beer-detalhe.component';
import { BeerEditarComponent } from './pages/beer-editar/beer-editar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsComponent } from './core/components/cards/cards.component';

/**
 *  Esse App Module é responsável por todas as declarações e imports do componente principal da nossa aplicação
 */

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SidenavComponent,
    NavbarComponent,
    BeerDetalheComponent,
    BeerEditarComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
