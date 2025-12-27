import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';

@Component({
  selector: 'app-home',
  imports: [Greeting],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  name = signal('ismail sayen');
  HandleInput(e:KeyboardEvent) {
    console.log(`key: ${e.key}`);
  }
}
