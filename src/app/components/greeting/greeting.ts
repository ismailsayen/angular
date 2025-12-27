import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.html',
  styleUrl: './greeting.css',
})
export class Greeting {
  counter = signal(0);
  inc() {
    this.counter.update((v) => v+1);
  }

  dec() {
    this.counter.update((v) => v-1);
  }

  reset() {
    this.counter.set(0);
  }
}
