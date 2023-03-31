import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agradecimento',
  templateUrl: './agradecimento.component.html',
  styleUrls: ['./agradecimento.component.scss']
})
export class AgradecimentoComponent {

  constructor(private router: Router) { }

  voltar() {
    this.router.navigate(['/']);
  }

}
