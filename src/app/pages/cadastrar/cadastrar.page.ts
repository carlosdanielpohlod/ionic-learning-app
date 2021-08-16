import { Component, OnInit } from '@angular/core';
import {RegisterAlert} from '../../alerts/registerAlert'
import { Router } from '@angular/router';
import { Contato } from '../../class/Contato';
import { ContatoService } from '../../services/contato.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
    
    private alert : RegisterAlert
    private formCadastrar: FormGroup
    private isSubmitted : boolean = false
  constructor(
    
    
    private router : Router,
    private contatoService : ContatoService,
    private formBuilder : FormBuilder) {
      this.alert = new RegisterAlert();

    }

  ngOnInit() {
    this.formCadastrar = this.formBuilder.group({
      nome : ['', [Validators.required, Validators.minLength(8)]],
      telefone : ['', [Validators.required, Validators.minLength(10)]],
      sexo : ['', [Validators.required]],
      dataNascimento : ['', [Validators.required]],
    })
  }

  private get errorControl(){
    
    return this.formCadastrar.controls
  }
  private submitForm(){
    this.isSubmitted = true
    if(!this.formCadastrar.valid){
      
      this.alert.error("erro")
      return false
    }else{
      this.cadastrar()
      return true
    }
  }
  cadastrar():void{

    this.contatoService.cadastrar(new Contato(
      this.formCadastrar.value['nome'], 
      this.formCadastrar.value['telefone'], 
      this.formCadastrar.value['dataNascimento'].split('T')[0], 
      this.formCadastrar.value['sexo']))

    this.alert.success()
    this.router.navigate(['home'])
        
      
    
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
