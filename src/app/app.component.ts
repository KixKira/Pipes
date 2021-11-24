import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Theudelinda Rahul';
  arreglo = ['Mtendere', 'Jacobus', 'Clotilda', 'Galini', 'Vendulka', 'Thandiwe'];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  person = {
    name: 'Josh',
    lastname: 'Gomez',
    gender: 'male',
    title: 'Mr.',
    race: 'Hispanic',
    age: 26,
    address:{
      street: '3507 Neuport Lane',
      city: 'Dunwoody',
      state: 'Georgia',
      zip: 30338,
      phone: '770-353-8907',
      mobile: '770-264-4137'
    }
  }
  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Data incoming');
    }, 5000);
  })
  fecha: Date = new Date();
  idioma: string = 'en';
  nombre2: string = 'kEnDrIcK a. BrIcKnEr';
  videoUrl: string = 'https://www.youtube.com/embed/QNUzGew1EN4';
  password: string = 'xGCKgMh2ErD^';
  enable: boolean = true;
}
