import { Component } from '@angular/core';
import { Cliente } from '../shared/cliente';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent {
  'cliente': Cliente;
  title = '';

  constructor(private route: ActivatedRoute, private router: Router) {
    
  }

  ngOnInit(){
    this.title = 'Novo Cliente';
    this.cliente = new Cliente();

    const id = this.route.snapshot.paramMap.get('id');
  }

  onSubmit(){
    console.log(this.cliente);
    this.router.navigate(['/clientes']);
  }
}
