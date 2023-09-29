import { Component } from '@angular/core';
import { Produto } from '../shared/produto';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.css']
})
export class ProdutosFormComponent {
  'produto': Produto;
  title = '';

  constructor(){

  }

  ngOnInit(){
    this.title = 'Novo produto';
    this.produto = new Produto();
  }

  onSubmit(){
    console.log(this.produto);
  }
}
