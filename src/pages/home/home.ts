import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  retorno : any;
  formato : any;
  constructor(public navCtrl: NavController,
              private alertCtrl: AlertController,
              private barcodeScanner: BarcodeScanner) {
    
  }

  ler(){
    this.barcodeScanner.scan(
      {
          "prompt" : "Vai tomar no cu",
          "orientation" : "landscape"
      })
      .then(barcodeData => {
        this.retorno = barcodeData.text;
        this.formato = barcodeData.format;
      })
      .catch(err => {
        this.showAlert(err);
      })
  }

  showAlert(mensagem){
    let alert = this.alertCtrl.create({
      title: 'Atenção!',
      subTitle: mensagem,
      buttons: ['OK']
    });
    alert.present();
  }

}
