import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'test server', content: 'just a test!!' },
  ];

  colors = [
    { name: 'purple', description: 'color purple' },
    { name: 'blue', description: 'color blue' }
  ];
}
