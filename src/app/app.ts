import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Settings } from './settings/settings';

@Component({
  selector: 'app-root',
  imports: [Settings],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'whatsapp-settings';
}
