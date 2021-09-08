import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import {GenericAlert} from '../../alerts/genericAlert'
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  private _formLogar : FormGroup
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
    this._formLogar = this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      senha:['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get errorControl(){
    return this._formLogar.controls
  }

  submitForm(){
    this._isSubmitted = true
    if(!this._formLogar.valid){
      this.genericAlert.error('Erro','Login','Todos os campos são obrigátorio')
      return false
    }else{
      this._signIn()
    }
  }

  private _signIn() : void{
    console.log(this._formLogar.value['email'])
    console.log(this._formLogar.value['senha'])
    this.router.navigate(['home'])
  }

  private _signInGoogle() : void {
    
  }
  private _irParaSignUp() : void {
    this.router.navigate(['signup'])
  }
}
