import { Component, Inject, OnInit, Optional } from '@angular/core';
import { APP_CONFIG } from '../core/services/constant.service';
import { ConfigOptionsService } from '../core/services/config-options.service';
import { LocalStorageService } from '../core/services/local-storage.service';
import { generatedString } from '../core/services/generator/generator.factory';

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

  name = 'Earl Grey';
  description = 'Super cool tea';
  price = 49;
  category = Сategory[Сategory.Black];
  isAvailable = true;

  constructor(
    @Optional() 
    @Inject(APP_CONFIG) info: unknown,
    @Inject(generatedString) generated: string,
    configOptionsService: ConfigOptionsService,
    localStorage: LocalStorageService
  ) {}

  ngOnInit(): void {
  }

}
