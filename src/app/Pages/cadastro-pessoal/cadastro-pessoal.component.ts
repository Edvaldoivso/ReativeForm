import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { findIndex, Observable, tap, toArray } from 'rxjs';

@Component({
  selector: 'app-cadastro-pessoal',
  templateUrl: './cadastro-pessoal.component.html',
  styleUrls: ['./cadastro-pessoal.component.scss'],
})
export class CadastroPessoalComponent implements OnInit {
  constructor(private formBilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.ProcessaPessoal();
  }

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

  @Output() ValBarra: number = 0;

  //Array de dados a cada % vai exportar seu valor para a barra mudar seu status no component externo.
  public ProcessaPessoal() {
    let newDataList: Array<string> = this.FormPessoal.value;
    let DataList: Array<string> = [];
    Object.entries(newDataList).forEach(([key, value]) => {
      // console.log(`${key} : ${value}`);

      if (value.trim()) DataList.push(`${key} : ${value}`);
    });

    this.ValBarra = 5.56 * DataList.length ;
    console.log(DataList.length);
  }
 









}
