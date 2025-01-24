import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../models/pessoas';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  pessoas: Pessoa[] = [];
  pessoasGeral: Pessoa[] = [];

  constructor( private pessoaService: PessoaService ) {}

  ngOnInit(): void {

    this.pessoaService.GetPessoas().subscribe(data => {
      console.log(data)
    });


  }

}
