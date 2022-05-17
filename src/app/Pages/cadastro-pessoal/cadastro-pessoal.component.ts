import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { findIndex, tap, toArray } from 'rxjs';

@Component({
  selector: 'app-cadastro-pessoal',
  templateUrl: './cadastro-pessoal.component.html',
  styleUrls: ['./cadastro-pessoal.component.scss'],
})
export class CadastroPessoalComponent implements OnInit {
  constructor(private formBilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {}

  public FormPessoal: FormGroup = this.formBilder.group({
    nome: [''],
    sobrenome: [''],
    social: [''],
    Nascimento: [''],
    Genero: [''],
    Sexo: [''],
    CPF: [''],
    Passaport: [' '],
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

  public ArrayList: Array<{ nome: string; idade: number; sexo: string }> = [
    {
      nome: 'Edvaldo',
      idade: 29,
      sexo: 'XX',
    },
  ];

  @Output() ValBarraStatus: number = 0;
  //Array de dados a cada % mudar o valor preenchido da barra.

  public ProcessaPessoal() {
    let newDataList: Array<string> = this.FormPessoal.value;
    let DataList: Array<string> = [];
    Object.entries(newDataList).forEach(([key, value]) => {
      console.log(`${key} : ${value}`);

      if (value.trim()) DataList.push(`${key} : ${value}`);
    });
    this.ValBarraStatus = DataList.length;
    console.log(this.ValBarraStatus);
  }
}
