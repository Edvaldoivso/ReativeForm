import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-cadastro-pessoal',
  templateUrl: './cadastro-pessoal.component.html',
  styleUrls: ['./cadastro-pessoal.component.scss'],
})
export class CadastroPessoalComponent implements OnInit {
  constructor(private formBilder: FormBuilder) {}

  ngOnInit(): void {}

  public FormPessoal: FormGroup = this.formBilder.group({
    nome: [''],
    sobrenome: [''],
    social: [''],
    Nascimento: [''],
    Genero: [''],
    Sexo: [''],
    CPF: [''],
    Passaporte : [' '],
    Vacinacao: [''],
    RG: [''],
    Eleitor: [''],
    Motorista: [''],
    cep: [''],
    Rua: [''],
    Referencia: [''],
    Estado: [''],
    Cidade: [''],
  });



public ProcessaPessoal(){
  console.log(this.FormPessoal.value)
  
}
















}
