import { Component, OnInit } from '@angular/core';

import { Animal } from '../../Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    { name: 'Max', type: 'Dog', age: 2 },
    { name: 'Leo', type: 'Cat', age: 4 },
    { name: 'Riley', type: 'Dog', age: 1 },
    { name: 'Bob', type: 'Horse', age: 3 },
  ];

  constructor() {}

  ngOnInit(): void {}

  animalDetails = '';

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }
}
