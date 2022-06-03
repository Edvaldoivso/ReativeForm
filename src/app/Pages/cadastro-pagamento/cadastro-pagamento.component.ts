import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-pagamento',
  templateUrl: './cadastro-pagamento.component.html',
  styleUrls: ['./cadastro-pagamento.component.scss'],
})
export class CadastroPagamentoComponent implements OnInit {
  constructor(public FormEstruture: FormBuilder, public route: Router) {}

  ngOnInit(): void {}

  FormPayment: FormGroup = this.FormEstruture.group({
    NumCartao: [''],
    NomTitular: [''],
    NumCVC: [''],
    NumValidade: [''],
    CpfTitular: [''],
    CardModal: [''],
  });

  public SucessoPagamento() {
    window.alert('PROCESSANDO O PAGAMENTO');
    this.route.navigate(['Sucesso']);
  }

  public cancelar() {
    let confirma = window.confirm('Deseja mesmo Cancelar !!!');

    if (confirma == true) this.route.navigate(['']);
  }
}
