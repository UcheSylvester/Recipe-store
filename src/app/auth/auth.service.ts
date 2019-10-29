import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
  token: string;
  isSignedIn: boolean;

  constructor(private router: Router) {}

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

        this.router.navigate(["/"]);

        // getting the token immediately a user signs in
        firebase
          .auth()
          .currentUser.getIdToken()
          .then(retrievedToken => (this.token = retrievedToken));
      })
      .catch(error => console.log(error));
    // this.getCurrentUser();
  }

  logOut() {
    firebase.auth().signOut();
    this.token = null;
    console.log("logout out", this.token);
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
      // getting the email and converting it to a string
      let email = firebase.auth().currentUser.providerData[0].email.split("@");
      // email.pop(); //removing the last part
      const [name, suffix] = email;

      return name.toLocaleUpperCase();
    } else {
      console.log("couldn't get current user, users is not authenticated");
    }
  }

  handleError(error: any) {
    if (error.code === "auth/email-already-in-use") {
      console.log("you are already registered, please sign in");
    }
  }
}
