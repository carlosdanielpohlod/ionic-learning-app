import { Component, OnInit } from '@angular/core';
import {RegisterAlert} from '../alerts/registerAlert'
import { Router } from '@angular/router';
import { Contato } from '../class/Contato';
import { ContatoService } from '../services/contato.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
    public nome: string;
    public telefone: number;
    public dataNascimento : string;
    public sexo : string;
    private alert : RegisterAlert
  constructor(
    
    
    private router : Router,
    private contatoService : ContatoService) {
      this.alert = new RegisterAlert();

    }

  ngOnInit() {
  }

  cadastrar():void{
    if(this.validar(this.nome) && this.validar(this.telefone) && this.validar(this.dataNascimento), this.validar(this.sexo)){
     
      this.contatoService.cadastrar(new Contato(this.nome, this.telefone, this.dataNascimento, this.sexo))

      this.alert.success()
      this.router.navigate(['home'])
        
      
    }else{
      this.alert.error()
    }
  }

  private validar(campo : any): boolean{
    if(!campo){
      console.log(campo)
      return false
    }else{
      
      return true
    }
  }
  private voltar() :void{
    this.router.navigate(['home'])
  }
 


}
