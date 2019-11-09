import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms'; 
import { ApiService } from 'src/app/core/services/beer.service';

/**
*  Nosso componente responsável pelo nosso formulário para adicionar registros na nossa aplicação
*/

@Component({
  selector: 'app-beer-form',
  templateUrl: './beer-form.component.html',
  styleUrls: ['./beer-form.component.scss']
})
export class BeerFormComponent implements OnInit {

  beerForm: FormGroup;
  isLoadingResults = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.beerForm = this.formBuilder.group({ 
      'name' : [null, Validators.required], 
      'description' : [null, [Validators.required, Validators.minLength(4)]] 
    });
  }

  addBeer(form: NgForm) { 
    this.isLoadingResults = true; 
    this.api.addBeer(form) .subscribe(res => { 
      const id = res['id']; 
      this.isLoadingResults = false; 
      this.router.navigate(['/beer-detalhe', id]); 

    }, 
    (err) => { 
      console.log('Erro', err); 
      this.isLoadingResults = false; 
    }); 
  }

}
