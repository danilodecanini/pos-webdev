import { Component, OnInit } from '@angular/core';
// import { BeerService } from 'src/app/core/services/beer.service';
import { ApiService } from 'src/app/core/services/beer.service';

/**
  *  Esse é o componente do inicio da nossa aplicação onde fica localizado a listagem dos registros 
  */

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {

  public beers;
  public isLoadingResults;

  constructor(    
    // private beerService: BeerService
    private _api: ApiService
  ) { 
    
  }

  ngOnInit() {
    this._api.getBeers() .subscribe(res => { 
      this.beers = res; 
      console.log(this.beers); 
      this.isLoadingResults = false; 
    }, 
    err => { 
      console.log(err);
      this.isLoadingResults = false; 
    });           
  }

        
}
