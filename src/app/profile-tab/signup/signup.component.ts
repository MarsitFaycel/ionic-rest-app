import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


interface User{
   email?: string,
   password?: string
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  user: User={
    email: 'fayselm@hotmail.fr',
    password: '00001111'
  };

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {}


  createAccount():void{

   const user= this.afAuth.createUserWithEmailAndPassword(
      this.user.email,
      this.user.password
    )
    console.log(user);
  }  
}
