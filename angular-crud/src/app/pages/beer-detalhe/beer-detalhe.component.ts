import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { ApiService } from 'src/app/core/services/beer.service'; 
import { Beer } from 'src/app/core/model/beer.model';
import { CardsComponent } from 'src/app/core/components/cards/cards.component';

/**
*  Componente responsável por detalhas um registro da nossa aplicação
*/


@Component({
  selector: 'app-beer-detalhe',
  templateUrl: './beer-detalhe.component.html',
  styleUrls: ['./beer-detalhe.component.scss']
})
export class BeerDetalheComponent implements OnInit {

  beer: Beer = { id: '', name: '', description: '' };
  isLoadingResults = true;
  card: CardsComponent;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.getBeer(this.route.snapshot.params['id']);
  }

  getBeer(id) { 
    this.api.getBeer(id) .subscribe(data => { 
      this.beer = data; 
      console.log(this.beer); 
      this.isLoadingResults = false; 
    });
  }

  deleteBeer(id) { 
    //this.isLoadingResults = true; 
    this.api.deleteBeer(id) .subscribe(res => { 
      this.isLoadingResults = false; 
      this.router.navigate(['/beer']); 
    }, 
    (err) => { 
      console.log(err);
      //this.isLoadingResults = false; 
    } ); 
  }

}
