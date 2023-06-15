import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  model: string;
  speed: number;
  name: string;
  colors: Colors;
  options: string[];
  isEdit: boolean = false;

  constructor() {}

  ngOnInit() {
    this.name = 'Audi';
    this.speed = 210;
    this.model = 'RS8';
    this.colors = {
      car: 'White',
      salon: 'Black',
      wheels: 'Silver',
    };
    this.options = ['ABS', 'ESP', 'Cruise Control'];
  }

  addOption(option: string) {
    this.options.unshift(option);
    return false;
  }

  deleteOption(option: string) {
    this.options.forEach((element, index) => {
      if (element == option) this.options.splice(index, 1);
    });
  }

  showEdit() {
    this.isEdit = !this.isEdit;
  }

  carSelect(carName: string) {
    if (carName === 'bmw') {
      this.name = 'BMW';
      this.speed = 200;
      this.model = 'M5';
      this.colors = {
        car: 'Black',
        salon: 'Black',
        wheels: 'White',
      };
      this.options = ['ABS', 'ESP', 'Cruise Control'];
    } else if (carName === 'audi') {
      this.name = 'Audi';
      this.speed = 210;
      this.model = 'RS8';
      this.colors = {
        car: 'White',
        salon: 'Black',
        wheels: 'Silver',
      };
      this.options = ['ABS', 'ESP', 'Cruise Control'];
    } else {
      this.name = 'Mercedes';
      this.speed = 180;
      this.model = 'C180';
      this.colors = {
        car: 'White',
        salon: 'Black',
        wheels: 'Silver',
      };
      this.options = ['ABS', 'ESP'];
    }
  }
}

interface Colors {
  car: string;
  salon: string;
  wheels: string;
}
