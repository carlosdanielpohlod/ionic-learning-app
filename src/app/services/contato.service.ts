import { Injectable } from '@angular/core';
import {Contato} from '../class/Contato'
@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private contatos : Contato[] = []
  constructor() { 

    this.contatos.push(new Contato("Carlos Daniel",40028922,"30/11/1999","m"))
  }

  public getContatos() : Contato[]{
    
    return this.contatos
  }
  public cadastrar(contato : Contato):void{
    
    this.contatos.push(contato)
    console.log(this.contatos)
  }
}
