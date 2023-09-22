import { Component } from '@angular/core';
import { Cliente } from '../shared/cliente';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent {
  'cliente': Cliente;
  title = '';

  constructor(){
    
  }

  ngOnInit(){
    this.title = 'Novo Cliente';
    this.cliente = new Cliente();
  }

  onSubmit(){
    console.log(this.cliente);
  }
}
