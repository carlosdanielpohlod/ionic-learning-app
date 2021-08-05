import { AlertController } from '@ionic/angular';

export class RegisterAlert {
    public alertController : AlertController = new AlertController()
    

    async success(header:string = "sucesso", subHeader:string = "", message:string = "Cadastrado com sucesso") {
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
    

    async error(header:string = "erro", subHeader:string = "", message:string = "Não foi possivel cadastrar") {
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
