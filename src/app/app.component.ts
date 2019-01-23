import {Component, OnInit} from "@angular/core"

@Component({
  selector: 'mt-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Bem-vindo à BG FOR MEN!'

  constructor() { }

  ngOnInit() {
  }

}
