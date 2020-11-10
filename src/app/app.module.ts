import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeComponent } from './profile-tab/theme/theme.component';
import { MySharedService } from './services/shared.service';

import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [AppComponent, ThemeComponent],
  entryComponents: [ThemeComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule , AngularFireModule.initializeApp(environment.firebase), AngularFireAuthModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    MySharedService
  ],
  bootstrap: [AppComponent],

})
export class AppModule {}
