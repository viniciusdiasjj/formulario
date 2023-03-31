
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormularioPipe } from './pipes/formulario.pipe';
import { FormularioDirective } from './directives/formulario.directive';
import { FormularioSharedComponent } from './shared/formulario-shared/formulario-shared.component';
import { FormularioSharedPipe } from './shared/formulario-shared.pipe';
import { FormularioSharedDirective } from './shared/formulario-shared.directive';
import { AgradecimentoComponent } from './agradecimento/agradecimento.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    FormularioPipe,
    FormularioDirective,
    FormularioSharedComponent,
    FormularioSharedPipe,
    FormularioSharedDirective,
    AgradecimentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    ReactiveFormsModule // adicionado depois de um erro escroto!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
