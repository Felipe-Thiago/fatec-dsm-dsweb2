import { Component } from '@angular/core';
import { Cliente } from '../shared/cliente';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  'title' = 'Relação de Clientes';
  'clientes': Cliente[];

  constructor() { }

  ngOnInit() {
    this.clientes = [
      {id: 1, nome: 'Felipe', endereco: 'Rua abc', limiteCredito: 1200},
      {id: 2, nome: 'Luciane', endereco: 'Rua def', limiteCredito: 800},
      {id: 3, nome: 'Marcos', endereco: 'Rua ghi', limiteCredito: 150.80},
      {id: 4, nome: 'Marcos Jr.', endereco: 'Rua jkl', limiteCredito: 750.30},
      {id: 5, nome: 'Ariane', endereco: 'Rua mno', limiteCredito: 1250}
    ];
    
  }
}
