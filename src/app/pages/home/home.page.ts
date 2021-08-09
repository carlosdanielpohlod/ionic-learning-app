import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { Contato } from '../../class/Contato';
import { ContatoService } from '../../services/contato.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public contatos: Contato[]
  constructor(private router : Router,private contatoService :  ContatoService) {
    this.contatos = this.contatoService.getContatos()

  }
  private irParaCadastrarPage() :void{
    this.router.navigate(['cadastrar'])
  }

  private detalhar(contato : Contato) : void{
    this.router.navigateByUrl('/detalhar', {state:{objeto:contato}})
  }
}
