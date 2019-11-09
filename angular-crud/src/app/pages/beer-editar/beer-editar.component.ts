import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/services/beer.service';

/**
*  Componente responsável por editar um registro da nossa aplicação passando como parametro o ID
*/

@Component({
  selector: 'app-beer-editar',
  templateUrl: './beer-editar.component.html',
  styleUrls: ['./beer-editar.component.scss']
})
export class BeerEditarComponent implements OnInit {

  id: String = '';
  beerForm: FormGroup;
  name: String = '';
  description: String = '';
  isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getBeer(this.route.snapshot.params['id']);
    this.beerForm = this.formBuilder.group({
      'name' : [null, Validators.required],
      'description' : [null, Validators.required]
    });
  }

  getBeer(id) {
    this.api.getBeer(id).subscribe(data => {
      this.id = data.id;
      this.beerForm.setValue({
        name: data.name,
        description: data.description
      });
    });
  }
  
  updateBeer(form: NgForm) {
    this.isLoadingResults = true;
    this.api.updateBeer(this.id, form)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/beer-detalhe/' + this.id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
