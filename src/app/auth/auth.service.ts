import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class AuthService {
  constructor() {}

  signupUser(email: string, password: string) {
    // console.log("signing user up 12345454");
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        console.log(error);
        this.handleError(error);
      });
  }

  signinUser(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  handleError(error: any) {
    if (error.code === "auth/email-already-in-use") {
      console.log("you are already registered, please sign in");
    }
  }
}
