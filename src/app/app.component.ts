import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "course-project";

  loadedFeature = "recipe";

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBOhN1EADHHVNRFi60iecZMW6O5tBMhbUs",
      authDomain: "ng-recipe-book-b5e10.firebaseapp.com"
    });
  }

  onNavigate(feature: string): void {
    this.loadedFeature = feature;
  }
}
