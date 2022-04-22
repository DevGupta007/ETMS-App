import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alertPresented: any;
  returnValue: boolean;

  constructor(public alertController: AlertController) { }

  showAlertV2(header, message, onSuccess, onError) {
    return this.alertController.create({
      header: header,
      message: message,
      backdropDismiss: false,
      buttons: [{
        text: 'Stay',
        role: 'cancel',
        handler: () => {
          console.log('Application exit prevented!');
          onSuccess()
        }
      }, {
        text: 'Exit',
        handler: () => {
          onError();
        }
      }]
    })
      .then(alert => {
        alert.present();
      });

  }

  showAlert(header, message, button?) {
    let buttons = this.setButtons(button);
    return this.alertController.create({
      header: header,
      message: message,
      backdropDismiss: false,
      buttons: buttons
    })
      .then(alert => {
        alert.present();
      });

  }

  setButtons(button?) {
    if (button)
      return button;
    else {
      return [{
        text: 'Stay',
        role: 'cancel',
        handler: () => {
          console.log('Application exit prevented!');
        }
      }, {
        text: 'Exit',
        handler: () => {
          navigator['app'].exitApp();
        }
      }];
    }
  }
}


