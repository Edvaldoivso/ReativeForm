import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sucesso',
  templateUrl: './sucesso.component.html',
  styleUrls: ['./sucesso.component.scss'],
})
export class SucessoComponent implements OnInit {
  constructor(public route: Router) {}

  ngOnInit(): void {}

  nome: string = 'Ackword';
  cpf: string = '417.172.308-66';
  De: string = 'São Paulo';
  To: string = 'Tokio';
  Auth: string = '####55####487993#';

  public Print() {}

  public Send() {}

  public Finaliza() {
    this.route.navigate(['Home']);
  }
}
