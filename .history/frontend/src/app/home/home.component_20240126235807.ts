import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <main>
      <header class="brand-name">
        <h1>This is the Home Component</h1>
      </header>
    </main>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
