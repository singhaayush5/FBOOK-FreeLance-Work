import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    MatSlideToggleModule,
    NavbarComponent,
    MatButtonModule,
  ],
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
