import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { AgradecimentoComponent } from './agradecimento/agradecimento.component';

const routes: Routes = [
  { path: '', component: FormularioComponent },
  { path: 'agradecimento', component: AgradecimentoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
