import { Injectable } from '@angular/core';
import {Contato} from '../class/Contato'
@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private contatos : Contato[] = []
  constructor() { }

  public getContatos() : Contato[]{
    
    return this.contatos
  }
  public cadastrar(contato : Contato):void{
    
    this.contatos.push(contato)
    console.log(this.contatos)
  }
}
