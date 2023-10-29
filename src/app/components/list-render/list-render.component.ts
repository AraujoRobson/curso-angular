import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss'],
})
export class ListRenderComponent implements OnInit {
  animals = [
    { name: 'Max', type: 'Dog' },
    { name: 'Leo', type: 'Cat' },
    { name: 'Riley', type: 'Dog' },
    { name: 'Bob', type: 'Horse' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
