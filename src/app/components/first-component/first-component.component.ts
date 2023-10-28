import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss'],
})
export class FirstComponentComponent {
  name: string = 'Robson';
  age: number = 28;
  job: string = 'Programador (se Deus quiser)';
  hobbies = ['Teste 1', 'Teste 2', 'Teste 3'];
  car = {
    name: 'Bora',
    year: 2009,
    color: 'Prata',
  };

  constructor() {}

  ngOnInit(): void {}
}
