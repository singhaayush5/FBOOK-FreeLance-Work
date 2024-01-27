import { Component } from '@angular/core';
import { ButtonTypesExample } from '../button-types/button-types.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonTypesExample],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
