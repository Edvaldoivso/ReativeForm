import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HOMEComponent implements OnInit {

  autenticar: boolean = false;
  showCard: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  Destinos: Array<{
    Imagem: string;
    Titulo: string;
    Subtitulo: string;
    TextoBtn: string;
    Rota: string;
  }> = [
    {
      Imagem: './assets/ImagemFundo/Tokio.jpg',
      Titulo: 'TOKIO',
      Subtitulo: 'A SN28 te leva em 30 minutos e só',
      TextoBtn: 'TOKIO',
      Rota: 'CadPessoa',
    },
    {
      Imagem: './assets/ImagemFundo/SaoPaulo.jpg',
      Titulo: 'SÃO PAULO',
      Subtitulo: 'A Cidade dos negocios com a SpaceX',
      TextoBtn: 'BRASIL !',
      Rota: 'CadPessoa',
    },
    {
      Imagem: './assets/ImagemFundo/CapeTown.jpg',
      Titulo: 'CapeTown',
      Subtitulo: 'A DOURADA com a nave do Futuro',
      TextoBtn: 'ÁFRICA',
      Rota: 'CadPessoa',
    },
  ];

  //Redirecionamento
  public Redirect(i: string) {
    //Faz a consulta de usuario se tem que ter ou não

    if (this.autenticar == false) {
      this.router.navigate([i]);
    } else {
      console.log('Rota de Pagamento em construção' + this.showCard);
      //this.router.navigate([]);
    }
  }
}
