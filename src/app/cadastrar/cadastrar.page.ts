import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Contato } from '../class/Contato';
import { ContatoService } from '../services/contato.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  private nome: string;
    private telefone: number;
    private dataNascimento : string;
    private sexo : string;
  constructor(
    
    public alertController : AlertController,
    private router : Router,
    private contatoService : ContatoService) {}

  ngOnInit() {
  }

  cadastrar():void{
    if(this.validar(this.nome) && this.validar(this.telefone) && this.validar(this.dataNascimento), this.validar(this.sexo)){
     
      this.contatoService.cadastrar(new Contato(this.nome, this.telefone, this.dataNascimento, this.sexo))

      this.presentAlert("menssagem",'Sucesso',"cadastrado")
      this.router.navigate(['home'])
        
      
    }else{
      this.presentAlert("menssagem",'Erro',"preencha os campos")
    }
  }

  private validar(campo : any): boolean{
    if(1== 1){
      console.log(campo)
      return false
    }else{
      
      return true
    }
  }

  async presentAlert(header:string, subHeader:string, message:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    
  }



}
