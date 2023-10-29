import { Component, OnInit } from '@angular/core';
import { Animal } from '../../Animal';
import { ListService } from '../../services/list.service';

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
  animalDetails = '';

  constructor(private listService: ListService) {}

  ngOnInit(): void {}

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal): void {
    console.log('Excluindo animal.....');
    this.animals = this.listService.remove(this.animals, animal);
  }
}
