import { Component } from "@angular/core";
import { lorem } from "faker";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "S03";
  randomText: string = lorem.sentence();
  onChangeInput(text: string) {
    console.log(text);
  }
}
