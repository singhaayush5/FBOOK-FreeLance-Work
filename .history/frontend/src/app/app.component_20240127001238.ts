import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HomeComponent } from './home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, MatSlideToggleModule],
  templateUrl: './app.component.html',
  // template: `
  //   <main>
  //     <section class="content">
  //       <app-home></app-home>
  //     </section>
  //   </main>
  // `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'fbook';
}
