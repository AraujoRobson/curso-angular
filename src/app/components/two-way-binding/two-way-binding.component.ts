import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss'],
})
export class TwoWayBindingComponent implements OnInit {
  name: string = '';
  age: number = 0;
  personDetails = '';

  constructor() {}

  ngOnInit(): void {}

  show() {
    this.personDetails = `O nome é ${this.name} e a idade é ${this.age}`;
  }
}
