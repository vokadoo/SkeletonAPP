import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
  //implementamos el ngModel con OnInit
export class HomePage implements OnInit{

  dato: string;
  constructor(public toastController: ToastController, private router:Router) {}
  ngOnInit() {}
  saludar() {
    //crear un toast
    this.presentToast('Hola '+this.dato);
  }
  siguiente(){
    let navigationExtras: NavigationExtras={
      state:{dato: this.dato}
    };
    this.router.navigate(['/pagina2'],navigationExtras);
  }
  //ingresamos un parametro
  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}