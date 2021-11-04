import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    button {
      margin: 20px 0px;
    }
  `]
})
export class HomeComponent implements OnInit {



  constructor() { }
  

  ngOnInit(): void {
  }

}
