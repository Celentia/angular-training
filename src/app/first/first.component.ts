import { Component, OnInit } from '@angular/core';

enum Сategory {
  Black,
  Green,
  Oolong
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})


export class FirstComponent implements OnInit {

  name = "Earl Grey";
  description = "Super cool tea";
  price = 49;
  category = Сategory[Сategory.Black];
  isAvailable = true;

  constructor() { }

  ngOnInit(): void {
  }

}
