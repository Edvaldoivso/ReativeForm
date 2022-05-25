import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPagamentoComponent } from './Pages/cadastro-pagamento/cadastro-pagamento.component';
import { CadastroPessoalComponent } from './Pages/cadastro-pessoal/cadastro-pessoal.component';
import { ErroComponent } from './Pages/erro/erro.component';
import { HOMEComponent } from './Pages/home/home.component';
import { SucessoComponent } from './Pages/sucesso/sucesso.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },

  { path: 'Home', component: HOMEComponent },

  {
    path: 'CadPagamento',
    component : CadastroPagamentoComponent,
  },

  {
    path: 'CadPessoa',
    component: CadastroPessoalComponent,
  },

  {
    path: 'Sucesso',
    component : SucessoComponent,
      
  },

  { path: '404', redirectTo: '*' },

  {
    path: '*', component: ErroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
