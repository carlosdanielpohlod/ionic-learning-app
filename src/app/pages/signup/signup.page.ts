import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { GenericAlert } from 'src/app/alerts/genericAlert';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  private _formCadastrar : FormGroup
  private _isSubmitted : boolean = false
  public genericAlert : GenericAlert
  constructor(
    public alertController : AlertController,
    public router : Router,
    public formBuilder : FormBuilder
    
    ) {
      this.genericAlert = new GenericAlert()
     }

  ngOnInit() {
    this._formCadastrar = this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      senha:['', [Validators.required, Validators.minLength(6)]],
      confSenha:['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get errorControl(){
    return this._formCadastrar.controls
  }

  private _signUp() : void{
    console.log(this._formCadastrar.value['email'])
    console.log(this._formCadastrar.value['senha'])
    this.genericAlert.success('Cadastro','Sucesso')
    this.router.navigate(['home'])
  }

  submitForm(){
    this._isSubmitted = true
    if(!this._formCadastrar.valid){
      this.genericAlert.error('Erro','Login','Todos os campos são obrigátorio')
      return false
    }else{
      this._signUp()
    }
  }
}
