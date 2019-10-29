import { Injectable } from "@angular/core";
import * as firebase from "firebase";

@Injectable()
export class AuthService {
  token: string;
  isSignedIn: boolean;

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
      .then(response => {
        console.log("signing in", response);

        // getting the token immediately a user signs in
        // console.log("current user", firebase.auth().currentUser);
        firebase
          .auth()
          .currentUser.getIdToken()
          .then(retrievedToken => (this.token = retrievedToken));
      })
      .catch(error => console.log(error));
    // this.getCurrentUser();
  }

  getToken(): string {
    firebase
      .auth()
      .currentUser.getIdToken()
      .then((retrievedToken: string) => (this.token = retrievedToken));
    return this.token;
  }

  isAuthenticated(): boolean {
    return this.token != null;
  }

  getCurrentUser() {
    if (this.isAuthenticated()) {
      return firebase.auth().currentUser.providerData[0].email;
    } else {
      console.log("noooo");
    }
  }

  onLogOut() {
    firebase.auth().signOut();
    this.token = null;
  }

  handleError(error: any) {
    if (error.code === "auth/email-already-in-use") {
      console.log("you are already registered, please sign in");
    }
  }
}
