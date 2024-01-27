import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
