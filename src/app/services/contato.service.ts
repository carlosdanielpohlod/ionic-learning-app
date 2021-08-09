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

  public editar(contato: Contato, contatoEditado : Contato): boolean{
    for(let i = 0;  i < this.contatos.length; i++){
      if((this.contatos[i].getId() == contato.getId())){
        this.contatos[i].setNome(contatoEditado.getNome())
        this.contatos[i].setSexo(contatoEditado.getSexo())
        this.contatos[i].setDataNascimento(contatoEditado.getDataNascimento())
        this.contatos[i].setTelefone(contatoEditado.getTelefone())
        return true
      }
    }
    return false
  }

  public excluir(contato : Contato) {
    for(let i = 0;  i < this.contatos.length; i++){
      if((this.contatos[i].getId() == contato.getId())){

      }
    }
  }
}
