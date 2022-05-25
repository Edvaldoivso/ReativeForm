import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-pagamento',
  templateUrl: './cadastro-pagamento.component.html',
  styleUrls: ['./cadastro-pagamento.component.scss'],
})
export class CadastroPagamentoComponent implements OnInit {
  constructor(public FormEstruture: FormBuilder) {}

  ngOnInit(): void {}

  FormPayment: FormGroup = this.FormEstruture.group({
    NumCartao: [''],
    NomTitular: [''],
    NumCVC: [''],
    NumValidade: [''],
    CpfTitular: [''],
    CardModal: [''],
  });
}
