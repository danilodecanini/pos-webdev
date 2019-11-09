import { NgModule } from '@angular/core';

import { BeerComponent } from './beer.component';
import { BeerFormComponent } from './beer-form/beer-form.component';
// import { BeerService } from 'src/app/core/services/beer.service';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

/**
  *  Modulo para realizar os imports e as declaracoes do nosso Modulo Beer
  */

@NgModule({
  declarations: [
    BeerComponent,
    BeerFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    // BeerService
  ],
  bootstrap: []
})
export class BeerModule { }
