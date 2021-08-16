import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/class/Contato';
import { Router, ActivatedRoute } from '@angular/router';
import { ContatoService } from 'src/app/services/contato.service';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.page.html',
  styleUrls: ['./detalhar.page.scss'],
})
export class DetalharPage implements OnInit {
  public contato: Contato
  private isSubmitted : boolean = false
  public editar : boolean = true
  public formDetalhar : FormGroup

  public alertController : AlertController = new AlertController()
  constructor(private router: Router,
     private contatoService :  ContatoService,
     private formBuilder : FormBuilder
     ) { }

  ngOnInit() {
    const nav = this.router.getCurrentNavigation()
    this.contato = nav.extras.state.objeto
    this.formDetalhar = this.formBuilder.group({
      nome : [this.contato.nome, [Validators.required, Validators.minLength(8)]],
      telefone : [this.contato.telefone, [Validators.required, Validators.minLength(10)]],
      sexo : [this.contato.sexo, [Validators.required]],
      dataNascimento : [this.contato.dataNascimento, [Validators.required]],
    })
    
  }
  private get errorControl(){
    
    return this.formDetalhar.controls
  }
  alterarEdicao(){
    this.editar = !this.editar
  }
  private async editarContato(){
    if(await confirm() == true){
      this.contatoService.editar(this.contato, new Contato(
        this.formDetalhar.value['nome'], 
        this.formDetalhar.value['telefone'], 
        this.formDetalhar.value['dataNascimento'].split('T')[0], 
        this.formDetalhar.value['sexo']))
        this.router.navigate(['home'])
    }
  }
  private home(){
    this.router.navigate(['home'])
  }
  async confirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            return false
          }
        }, {
          text: 'Okay',
          handler: () => {
            return true
          }
        }
      ]
    });

    return await alert.present();
  }

}
