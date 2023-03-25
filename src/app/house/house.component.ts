import { Component, OnInit } from '@angular/core';


//import settings
import Screen from './settings/screen/Screen.class';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {
  screen = new Screen();


  constructor() { }

  ngOnInit(): void {
   
    this.createWorld();
  }

  createWorld(){
    this.screen.start(document.querySelector('.webGL')!);
  }


}
