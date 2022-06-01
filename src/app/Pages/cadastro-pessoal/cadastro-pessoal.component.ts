import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import {
  catchError,
  finalize,
  findIndex,
  first,
  map,
  Observable,
  pipe,
  tap,
  toArray,
} from 'rxjs';

@Component({
  selector: 'app-cadastro-pessoal',
  templateUrl: './cadastro-pessoal.component.html',
  styleUrls: ['./cadastro-pessoal.component.scss'],
})
export class CadastroPessoalComponent implements OnInit {
  constructor(
    private formBilder: FormBuilder,
    private http: HttpClient,
    public route: Router
  ) {}

  ngOnInit(): void {
    this.ProcessaPessoal();
  }

  @Output() ValBarra: number = 0;
  UrlPersonal: string = 'http://localhost:3000/Cadastro';
  public DadosPessoais: Array<[any]> = [];
  public DadosPessoais2: Array<[any]> = [];

  public FormPessoal: FormGroup = this.formBilder.group({
    nome: [''],
    sobrenome: [''],
    social: [''],
    Nascimento: [''],
    Genero: [''],
    Sexo: [''],
    CPF: [''],
    Passaport: [''],
    Vacinacao: [''],
    RG: [''],
    Eleitor: [''],
    Motorista: [''],
    Pais: [''],
    cep: [''],
    Rua: [''],
    Referencia: [''],
    Estado: [''],
    Cidade: [''],
  });

  //Exportando o valor para ser usado no TS da barra de Status
  //5.56 X Nºcampos    ----> 4 = 23%!7

  //Array de dados a cada % vai exportar seu valor para a barra mudar seu status no component externo.
  public ProcessaPessoal() {
    let newDataList: Array<string> = this.FormPessoal.value;
    let DataList: Array<string> = [];
    Object.entries(newDataList).forEach(([key, value]) => {
      // console.log(`${key} : ${value}`);
      if (value.trim()) DataList.push(`${key} : ${value}`);
    });
    this.ValBarra = 5.56 * DataList.length;
    //console.log(DataList.length);
  }

  public cancelar() {
    let confirma = window.confirm('Aplicar rota protegida neste modulo !!!');

    if (confirma == true) this.route.navigate(['']);
  }

  //Salva o registro no banco de dados

  //Elaborado sem retorno

  public saveData() {
    // this.route.navigate(['CadPagamento']);
    console.log(`Valor dos Dados:   ${this.DadosPessoais}`);
  }

  public GetAllDados(): Observable<any> {
    return this.http.get<any>(this.UrlPersonal).pipe();
    //tap(console.log));
  }

  public PostAllDadas() {
    this.http.put(this.UrlPersonal, this.FormPessoal);
  }
}
