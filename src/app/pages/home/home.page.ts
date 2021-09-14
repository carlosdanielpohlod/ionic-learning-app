import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { User } from 'src/app/class/user';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Contato } from '../../class/Contato';
import { ContatoService } from '../../services/contato.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public contatos: Contato[]
  user : User
  constructor(private router : Router,
    public authService: AuthServiceService,
    private contatoService :  ContatoService) {
    this.contatos = this.contatoService.getContatos()

  }
  private irParaCadastrarPage() :void{
    this.router.navigate(['cadastrar'])
  }

  private detalhar(contato : Contato) : void{
    this.router.navigateByUrl('/detalhar', {state:{objeto:contato}})
  }
}
