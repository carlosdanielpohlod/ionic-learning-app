import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/class/Contato';
import { Router, ActivatedRoute } from '@angular/router';
import { ContatoService } from 'src/app/services/contato.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.page.html',
  styleUrls: ['./detalhar.page.scss'],
})
export class DetalharPage implements OnInit {
  public contato: Contato
  public contatoEditado : Contato 
  public editar : boolean = true
  public alertController : AlertController = new AlertController()
  constructor(private router: Router, private contatoService :  ContatoService) { }

  ngOnInit() {
    const nav = this.router.getCurrentNavigation()
    this.contato = nav.extras.state.objeto
    this.contatoEditado = this.contato
    
  }
  alterarEdicao(){
    this.editar = !this.editar
  }
  private async editarContato(){
    if(await confirm() == true){
      this.contatoService.editar(this.contato, this.contatoEditado)
      
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
