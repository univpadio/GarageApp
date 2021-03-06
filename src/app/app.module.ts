import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LstGarage } from '../pages/Lst-garage/LstGarage';
import { Accueil } from '../pages/Accueil/Accueil';
import { InfoGarage } from '../pages/InfoGarage/InfoGarage';
import { Inscription } from '../pages/Inscription/Inscription';
import { Connexion } from '../pages/Connexion/Connexion';
/*import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';*/

@NgModule({
  declarations: [
    MyApp,
    LstGarage,
    Accueil,
    InfoGarage,
    Inscription,
    Connexion
    ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LstGarage,
    Accueil,
    InfoGarage,
    Inscription,
    Connexion
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
