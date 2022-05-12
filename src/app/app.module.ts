import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HOMEComponent } from './Pages/home/home.component';
import { CadastroPessoalComponent } from './Pages/cadastro-pessoal/cadastro-pessoal.component';
import { CadastroPagamentoComponent } from './Pages/cadastro-pagamento/cadastro-pagamento.component';
import { SucessoComponent } from './Pages/sucesso/sucesso.component';
import { ErroComponent } from './Pages/erro/erro.component';

@NgModule({
  declarations: [
    AppComponent,
    HOMEComponent,
    CadastroPessoalComponent,
    CadastroPagamentoComponent,
    SucessoComponent,
    ErroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
