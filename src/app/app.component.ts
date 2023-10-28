import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  userName = 'Robson';
  userData = {
    email: 'robson@robsonaraujo.com.br',
    role: 'admin',
  };

  title = 'curso-angular';
}
