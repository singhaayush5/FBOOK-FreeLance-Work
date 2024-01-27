import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  // templateUrl: './app.component.html',
  template: `
    <main>
      <header class="brand-name">
        <h1>Hello World</h1>
      </header>
    </main>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'fbook';
}
